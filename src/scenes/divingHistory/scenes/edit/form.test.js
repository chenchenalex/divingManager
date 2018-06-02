import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import DiveFormElements from "./components/diveForm/diveformElements";
import { INITIAL_FORM_DATA, FORM_CONFIG } from "src/data/config";
import {
  TEST_INITIAL_DATA,
  divingHistory as mockData
} from "src/data/mockData";
import * as formActions from "./actions";

import { DivingForm } from "./components/diveForm/diveForm";

describe("DiveForm: add new dive tests", () => {
  const expectedState = {
    formData: { ...INITIAL_FORM_DATA },
    editingFormData: { ...INITIAL_FORM_DATA }
  };

  const match = {
    params: {}
  };

  const component = shallow(<DivingForm match={match} />);

  it("onLoad: add new dive should see blank page with initial data", () => {
    const instance = component.instance();

    expect(instance.state).toEqual(expectedState);
  });
});

describe("DiveForm: edit existing dive tests", () => {
  const match = {
    params: {
      id: "test1"
    }
  };

  const {
    diveById: { test1 }
  } = mockData;

  const expectedState = {
    formData: test1,
    editingFormData: test1,
    formValid: true
  };

  const component = shallow(
    <DivingForm match={match} divingHistory={mockData} history={[]} />
  );

  it("onLoad: edit existing dive should populate data correctly", () => {
    const instance = component.instance();

    expect(instance.state).toEqual(expectedState);
  });

  it("handleChange: should update local state reflecting the change", () => {
    const instance = component.instance();

    const handleNameChange = instance.handleChange("name");
    const event = {
      target: {
        value: "atlantic"
      }
    };
    handleNameChange(event);
    expect(instance.state.editingFormData.name).toBe("atlantic");

    const handleDateChange = instance.handleChange("date");
    const event1 = {
      target: {
        value: "20190101"
      }
    };

    handleDateChange(event1);
    expect(instance.state.editingFormData.date).toBe("20190101");
  });

  it("resetAllForms: should reset form to initial state", () => {
    const instance = component.instance();

    // This will mutate object and affect other tests
    instance.formConfig.name.invalid = true;
    instance.formConfig.depth.invalid = true;

    instance.setState(prevState => {
      return {
        editingFormData: {
          id: "test1",
          name: "new name",
          location: "new place",
          date: "123123",
          depth: 28
        },
        formValid: false
      };
    });

    // magical happens here
    instance.resetAllForms();

    expect(instance.formConfig.name.invalid).toBe(false);
    expect(instance.formConfig.depth.invalid).toBe(false);
    expect(instance.state.editingFormData).toEqual(instance.state.formData);
    expect(instance.state.formValid).toBe(true);
  });

  it("onFormSubmit: should dispatch action contains edited form data", () => {
    const instance = component.instance();

    instance.setState(state => {
      return { editingFormData: {}, formValid: true };
    });

    // Add new dive form submit
    const mockAddDive = jest.spyOn(formActions, "addNewDive");

    instance.onFormSubmit();

    expect(mockAddDive).toBeCalledWith(instance.state.editingFormData);

    instance.setState(state => {
      return { editingFormData: { ...test1 }, formValid: true };
    });

    // Edit dive form submit
    const mockEditDive = jest.spyOn(formActions, "editDive");

    instance.onFormSubmit();

    expect(mockEditDive).toBeCalledWith(instance.state.editingFormData);
  });
});

describe("DiveForm snapshot tests", () => {
  it("Dive form elements should render correctly", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const formConfig = { ...FORM_CONFIG };

    const wrapper = renderer.create(
      <DiveFormElements
        handleChange={onChange}
        handleBlur={onBlur}
        formData={TEST_INITIAL_DATA}
        formConfig={formConfig}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
