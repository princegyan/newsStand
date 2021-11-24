import { render, screen } from '@testing-library/react';
import Enzyme, {shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Banner from './components/Banner';

Enzyme.configure({adapter: new Adapter()});

describe('Banner', () => {
    it ("Renders Banner Component",() => {
        const div = document.createElement('div');
        render(<Banner />, div);
        console.log("True")
      });

    it('Should Show Text',() => {
        const wrapper = shallow(<Banner />);
        const text = wrapper.find('div div');
        expect(text.text()).toBe('Most Popular News Trending');
    })
})



