import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Missions from '../components/Missions';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

describe('Missions component', () => {
  it('renders the Missions component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(getByText('Mission')).toBeInTheDocument();
    expect(getByText('Description')).toBeInTheDocument();
    expect(getByText('Status')).toBeInTheDocument();
  });
});

describe('Missions component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
