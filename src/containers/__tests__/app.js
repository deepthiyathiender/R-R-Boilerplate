import React from 'react';
import { App } from '../app';
import { shallow, mount } from 'enzyme';
import store from 'store';
import Zen from '/Users/deepthiyathiender/Desktop/React/simplereactZenAPI/react/src/components/Zen.js'

describe('<App />', () => {
  it('renders <App /> container', () => {
    const wrapper = shallow(<App store={store} />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
