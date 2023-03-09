import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rockets from '../components/Rockets';

describe('Appcomponents snapshots', () => {
  it('App renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
