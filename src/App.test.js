import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Feed", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Header />)
    const wrapper = shallow(<Banner />)
    const wrapper = shallow(<Feed />);
  });
});