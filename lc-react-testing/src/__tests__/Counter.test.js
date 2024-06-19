import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../Counter';
import userEvent from '@testing-library/user-event';

//test files can be named .test or .spec for jest
//testing comp
//import comp
//screen.debug outputs html to test output

describe('counter component functions as expected', () => {

  test('renders counter component', () => {
    //arrange
    render(<Counter title="My Counter" />);

    //act
    const titleElement = screen.getByText(/My Counter/i);
    const countElement = screen.getByText(/Count: 0/i);

    //assert
    expect(titleElement).toBeInTheDocument();
    expect(countElement).toBeInTheDocument();
  });

  test('it increments the counter', () => {
    //arrange
    render(<Counter title="My Counter" />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });

    //act
    //fireEvent.click(incrementButton);
    userEvent.click(incrementButton);
    const countElement = screen.getByText(/Count: 1/i);

    //assert
    expect(incrementButton).toBeInTheDocument();
    expect(countElement).toBeInTheDocument();
  });

  test('it decrements the counter', () => {
    //arrange
    render(<Counter title="My Counter" />);
    const decrementButton = screen.getByRole('button', { name: /decrement/i });

    //act
    //fireEvent.click(incrementButton);
    userEvent.click(decrementButton);
    const countElement = screen.getByText(/Count: -1/i);

    //assert
    expect(decrementButton).toBeInTheDocument();
    expect(countElement).toBeInTheDocument();
  });

  test('renders counter component using selectors', () => {
    //arrange
    const { container } = render(<Counter title="My Counter" />);
    //console.log(container.outerHTML);

    //act
    const titleElement = container.querySelector('#title');
    const countElement = container.querySelector('#count');

    //assert
    expect(titleElement.textContent).toContain('My Counter');
    expect(countElement.textContent).toContain('Count: 0');
  });
});