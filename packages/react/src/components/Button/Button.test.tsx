import { render, screen } from "@testing-library/react";
import React from "react";

import { Button } from "..";

describe("<Button />", () => {
  test(": renders", () => {
    render(<Button>Button</Button>);
    const Text = screen.getByText(/Button/i);

    expect(Text).toBeInTheDocument();
  });
});
