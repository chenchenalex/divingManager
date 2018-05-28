import React from "react";
import renderer from "react-test-renderer";
import DiveFormElements from "./components/diveForm/diveformElements";
import { INITIAL_FORM_DATA, FORM_CONFIG } from "src/data/constants";

describe("DiveForm snapshot tests", () => {
  it("Dive form elements should render correctly", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const formConfig = { ...FORM_CONFIG };

    const wrapper = renderer.create(
      <DiveFormElements
        handleChange={onChange}
        handleBlur={onBlur}
        formData={INITIAL_FORM_DATA}
        formConfig={formConfig}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
