import "@testing-library/jest-dom";

// jsdom doesn't implement scrollIntoView — ContinentChips calls it on click.
Element.prototype.scrollIntoView = jest.fn();
