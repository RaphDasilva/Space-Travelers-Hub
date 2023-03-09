import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from '../components/Header';
import store from '../redux/store';

describe('Header component', () => {
  it('should render Header component', () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
