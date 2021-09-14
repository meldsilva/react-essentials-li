// import { fireEvent } from "@testing-library/dom";
// import { render } from "react-dom"
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {Checkbox} from "./Checkbox"

test("Selecting checkbox", () => {
    const {getByLabelText} = render(<Checkbox />);
    const checkbox = getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
})