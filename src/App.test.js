import { render, screen } from '@testing-library/react';
import Enzyme, {shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import App from './App';
import Banner from './components/Banner';
import Feed from './components/Feed';
import Header from './components/Header';

Enzyme.configure({adapter: new Adapter()});

describe('App', () => {
  it ("Renders without Crashing",() => {
    const div = document.createElement('div');
    render(<App />, div);
    console.log("True")
  });
  
  it('Searching for Child Components',() => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBe(true)
    expect(wrapper.contains(<Banner />)).toBe(true)
    expect(wrapper.contains(<Feed />)).toBe(true)
  })  
  })

