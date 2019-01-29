'use strict'
import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

import Counter from '../../src/components/counter/counter'

describe('Counter', () => {
  it('is alive', () => {
    let component = shallow(<Counter/>);
    expect(component.find('span').exists()).toBeTruthy();
  });
  it('subtracts one from count with subtract btn', () => {
    let component = mount(<Counter/>);

    let button = component.find('.downClicker');
    button.simulate('click');
    console.log(component.state);
    expect(component.state('count')).toBe(-1);
  });
  it('adds one to count with add btn', () => {
    let component = mount(<Counter/>);
    let button = component.find('.upClicker');
    button.simulate('click');
    expect(component.state('count')).toBe(1);
  });
  it('renders correctly', () => {
    let render = renderer.create('<Counter/>').toJSON();
    expect(render).toMatchSnapshot();
  });
});