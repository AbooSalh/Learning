import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Great", () => {
  it("should reneder hello when name provided", () => {
    render(<Greet name="Mosh" />);
    const heading = screen.getByRole("button");
    expect(heading).toBeInTheDocument(); // Use toBeInTheDocument instead of toBeInDocument
  });
});
