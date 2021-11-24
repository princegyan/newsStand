import { render, screen } from '@testing-library/react';
import Enzyme, {shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Feed from './components/Feed';



Enzyme.configure({adapter: new Adapter()});

describe('Feed', () => {
  it ("Renders Banner Component",() => {
    const div = document.createElement('div');
    render(<Feed />, div);
    console.log("True")
  });
  
  //it('Searching for Variables',() => {
    //const wrapper = shallow(<Feed />);
    //expect(wrapper.contains(<Header />)).toBe(true)
    //expect(wrapper.contains(<Banner />)).toBe(true)
    //expect(wrapper.contains(<Feed />)).toBe(true)
  //}) 
  
  })

  