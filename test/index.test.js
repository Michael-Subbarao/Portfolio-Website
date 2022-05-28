import React from "react";
import { render, screen } from "../test-utils.js";

import { Button } from "../components/Button";

//test button
test("button renders text correctly", () => {
    const { getByText } = render(<Button>Test</Button>);
    const buttonElement = getByText(/test/i);
    expect(buttonElement).toBeInTheDocument();
    });