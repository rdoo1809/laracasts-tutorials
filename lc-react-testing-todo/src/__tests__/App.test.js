import { render, screen } from '@testing-library/react';
import App from '../components/App';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  render(<App />);
});


describe('todo app tests', () => {

  it('renders the App component', () => {
    const titleElement = screen.getByText(/Todo App/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('shows the default todos', () => {
    const todoOne = screen.getByText(/Finish React Series/i);
    const todoTwo = screen.getByText(/Go Grocery/i);
    const todoThree = screen.getByText(/Take over world/i);

    expect(todoOne).toBeInTheDocument();
    expect(todoTwo).toBeInTheDocument();
    expect(todoThree).toBeInTheDocument();
  });

  it('can add todos', () => {
    const todoInput = screen.getByPlaceholderText(/What do you need to do\?/i);

    userEvent.type(todoInput, 'New todo{enter}');
    const newTodo = screen.getByText(/New todo/i);

    expect(todoInput).toBeInTheDocument();
    expect(newTodo).toBeInTheDocument();
  })

  it('shows strikethrough on completed todos', () => {
    const todoOne = screen.getByText(/Finish React Series/i);
    const todoTwo = screen.getByText(/Go Grocery/i);

    //assert
    expect(todoOne.previousElementSibling).not.toBeChecked();
    expect(todoOne).not.toHaveClass('line-through');

    expect(todoTwo.previousElementSibling).toBeChecked();
    expect(todoTwo).toHaveClass('line-through');
  })
  //
});

