import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import Button from ".";

describe('<Button>', () => {
  it("should be render the button with the text 'Click'", () => {
    render(<Button name="btn-test" onClick={() => {}} text="Click"/>);

    const button = screen.getByRole('button', {name: /click/i});
    expect(button).toBeInTheDocument();
  });

  it("should be status disabled when disabled is true", () => {
    render(<Button name="btn-test" onClick={() => {}} text="Click" disabled={true}/>);

    const button = screen.getByRole("button", {name: /click/i});
    expect(button).toBeDisabled();
  });

  it("should be status enable when disabled is false or null", () => {
    render(<Button name="btn-test" onClick={() => {}} text="Click" disabled={false}/>);

    const button = screen.getByRole("button", {name: /click/i});
    expect(button).toBeEnabled();
  });

  it("should be call the function when user press click", () => {
    const handleClick = jest.fn();
    render(<Button name="btn-test" onClick={handleClick} text="Click"/>);

    const button = screen.getByRole("button", {name: /click/i});
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should be change status to loading when loading prop is true", () => {
    let loading = false;
    const handleClick = jest.fn(() => loading = true);    
    render(<Button name="btn-test" onClick={handleClick} loading={loading} text="Click"/>);

    const button = screen.getByRole("button", {name: /click/i});
    fireEvent.click(button);

    // expect(loading).value;
  });
});