import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import DiveFormElements from "./components/diveForm/diveFormElements";
import { INITIAL_FORM_DATA, FORM_CONFIG } from "src/data/config";
import {
  TEST_INITIAL_DATA,
  divingHistory as mockData
} from "src/data/mockData";
import * as formActions from "./actions";
import store from "src/store";

import { DivingForm } from "./components/diveForm/diveForm";

describe("DiveForm: add new dive tests", () => {
  const expectedState = {
    formData: { ...INITIAL_FORM_DATA },
    editingFormData: { ...INITIAL_FORM_DATA },
    locationSuggestions: [],
    isTouched: false
  };

  const match = {
    params: {}
  };

  const component = shallow(<DivingForm match={match} />);

  it("onLoad: add new dive should see blank page with initial data", () => {
    const instance = component.instance();

    expect(instance.state).toEqual(expectedState);
  });

  it("getSuggestionValue: expect return the name of country", () => {
    const instance = component.instance();
    const countryObj = {
      id: "ph",
      name: "Philipines"
    };

    expect(instance.getSuggestionValue(countryObj)).toBe("Philipines");
  });

  it("getSuggestions: should get matched suggestions based on input", () => {
    const instance = component.instance();
    const input1 = "p";
    const expect1 = [
      { id: "PA", name: "Panama" },
      { id: "PE", name: "Peru" },
      { id: "PG", name: "Papua New Guinea" },
      { id: "PH", name: "Philippines" },
      { id: "PK", name: "Pakistan" },
      { id: "PL", name: "Poland" }
    ];

    expect(instance.getSuggestions(input1)).toEqual(expect1);

    const input2 = "pA";
    const expect2 = [
      { id: "PA", name: "Panama" },
      { id: "PG", name: "Papua New Guinea" },
      { id: "PK", name: "Pakistan" },
      { id: "PS", name: "Palestinian Territory, Occupied" },
      { id: "PW", name: "Palau" },
      { id: "PY", name: "Paraguay" }
    ];

    expect(instance.getSuggestions(input2)).toEqual(expect2);
  });

  it("onSuggestionsFetchRequested: should update location suggestion state", () => {
    const instance = component.instance();
    const getSuggestionsMock = jest
      .spyOn(instance, "getSuggestions")
      .mockImplementation(() => {
        return [
          { id: "PA", name: "Panama" },
          { id: "PE", name: "Peru" },
          { id: "PG", name: "Papua New Guinea" },
          { id: "PH", name: "Philippines" },
          { id: "PK", name: "Pakistan" },
          { id: "PL", name: "Poland" }
        ];
      });

    instance.onSuggestionsFetchRequested({ value: "abc" });

    expect(instance.state.locationSuggestions).toEqual(getSuggestionsMock());
  });

  it("onSuggestionsClearRequested: should clear suggestion array", () => {
    const instance = component.instance();

    instance.setState({
      locationSuggestions: [{ id: "PA", name: "Panama" }]
    });

    instance.onSuggestionsClearRequested();

    expect(instance.state.locationSuggestions).toEqual([]);
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
    formValid: true,
    locationSuggestions: [],
    isTouched: false
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
    expect(instance.state.isTouched).toBe(true);
    expect(instance.state.editingFormData.name).toBe("atlantic");

    const handleDateChange = instance.handleChange("date");
    const event1 = {
      target: {
        value: "20190101"
      }
    };

    handleDateChange(event1);
    expect(instance.state.isTouched).toBe(true);
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
    expect(instance.state.isTouched).toBe(false);
  });

  it("onFormSubmit: should dispatch action contains edited form data", () => {
    const instance = component.instance();
    const mockStore = jest.spyOn(store, "dispatch");

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

    expect(mockStore).toHaveBeenCalledTimes(2);
  });

  it("checkFormFieldInValidity: should check required field validity", () => {
    const instance = component.instance();

    expect(instance.checkFormFieldInValidity("someKeyNonExistent", 123)).toBe(
      true
    );

    // 1. Required Empty form should not be valid
    expect(instance.checkFormFieldInValidity("name", "")).toBe(true);
    expect(instance.checkFormFieldInValidity("country", "")).toBe(true);
    expect(instance.checkFormFieldInValidity("date", "")).toBe(true);
    expect(instance.checkFormFieldInValidity("depth", "")).toBe(true);
    expect(instance.checkFormFieldInValidity("oxygen", "")).toBe(false);
    expect(instance.checkFormFieldInValidity("feedback", "")).toBe(false);

    // 2. check valid form values
    instance.resetAllForms();
    expect(instance.checkFormFieldInValidity("name", "someName")).toBe(false); // required
    expect(instance.checkFormFieldInValidity("country", "somewhere")).toBe(
      false
    ); // required
    expect(instance.checkFormFieldInValidity("depth", "12")).toBe(false); // required
    expect(instance.checkFormFieldInValidity("oxygen", "50")).toBe(false); // optional

    // 3. check invalid values
    instance.resetAllForms();
    expect(instance.checkFormFieldInValidity("depth", "-12")).toBe(true);
  });

  it("getInputPropsFromConfig: should retrieve data from config obj", () => {
    const instance = component.instance();

    const countryObj = FORM_CONFIG.country;
    const inputProps = instance.getInputPropsFromConfig(countryObj);

    expect(inputProps.required).toBe(countryObj.required);
    expect(inputProps.label).toBe(countryObj.label);
    expect(inputProps.helperText).toBe(countryObj.helperText);
    expect(inputProps.invalid).toBe(countryObj.invalid);
  });

  it("validateForm: should iterate form inputs and set validity for form", () => {
    const instance = component.instance();

    instance.setState(() => ({
      formValid: true
    }));
    //1. Required input field is invalid, form is invalid
    instance.formConfig.name.invalid = true;
    instance.validateForm();

    expect(instance.state.formValid).toBe(false);

    //2. Optional input field is invalid, form still valid
    instance.setState(() => ({
      formValid: false
    }));

    instance.formConfig.name.invalid = false;
    instance.formConfig.feedback.invalid = true;
    instance.validateForm();
    expect(instance.state.formValid).toBe(true);

    //3. Required input and optional field are valid, form is valid
    instance.setState(() => ({
      formValid: false
    }));
    instance.formConfig.name.invalid = false;
    instance.formConfig.feedback.invalid = false;
    instance.validateForm();
    expect(instance.state.formValid).toBe(true);
  });
});

describe("DiveForm snapshot tests", () => {
  it("Dive form elements should render correctly", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const locationSuggestions = [];
    const onSuggestionsClearRequested = jest.fn();
    const onSuggestionsFetchRequested = jest.fn();
    const getSuggestionValue = jest.fn();
    const locationInputProps = {
      onChange: jest.fn(),
      value: TEST_INITIAL_DATA.country,
      placeholder: FORM_CONFIG.country.helperText
    };
    const formConfig = { ...FORM_CONFIG };

    const wrapper = renderer.create(
      <DiveFormElements
        handleChange={onChange}
        handleBlur={onBlur}
        formData={TEST_INITIAL_DATA}
        formConfig={formConfig}
        locationSuggestions={locationSuggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        inputProps={locationInputProps}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
