import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import Profiles from '../components/Profile';

it('Test if my_profile renderers correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Profiles />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
