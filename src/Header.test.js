import { render, screen } from '@testing-library/react';
import Enzyme, {shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './components/Header';

Enzyme.configure({adapter: new Adapter()});

describe('Header', () => {
    
it ("Renders Header Component",() => {
    const div = document.createElement('div');
    render(<Header />, div);
    console.log("True")
  });

    it('Should Show Text',() => {
        const wrapper = shallow(<Header />);
        const text = wrapper.find('div');
        expect(text.text()).toBe('News Stand');
    })
})


