import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import DisplayMission from '../components/DisplayMission';
import { missionActions } from '../redux/mission/missionSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('DisplayMission component', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatch);
  });

  afterEach(() => {
    useDispatch.mockReset();
    useSelector.mockReset();
    dispatch.mockClear();
  });

  it('should render correctly', () => {
    useSelector.mockReturnValue({
      mission: [
        {
          mission_id: 'mission-1',
          mission_name: 'Mission 1',
          description: 'Mission 1 description',
          reserved: false,
        },
        {
          mission_id: 'mission-2',
          mission_name: 'Mission 2',
          description: 'Mission 2 description',
          reserved: true,
        },
      ],
      status: 'idle',
    });

    const { container } = render(<DisplayMission />);
    expect(container).toMatchSnapshot();
  });

  it('should dispatch joinMission action when Join Mission button is clicked', () => {
    useSelector.mockReturnValue({
      mission: [
        {
          mission_id: 'mission-1',
          mission_name: 'Mission 1',
          description: 'Mission 1 description',
          reserved: false,
        },
      ],
      status: 'idle',
    });

    const { getByText } = render(<DisplayMission />);
    const joinMissionBtn = getByText('Join Mission');

    fireEvent.click(joinMissionBtn);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith(missionActions.joinMission('mission-1'));
  });

  it('should dispatch leavingMission action when Leave Mission button is clicked', () => {
    useSelector.mockReturnValue({
      mission: [
        {
          mission_id: 'mission-1',
          mission_name: 'Mission 1',
          description: 'Mission 1 description',
          reserved: true,
        },
      ],
      status: 'idle',
    });

    const { getByText } = render(<DisplayMission />);
    const leaveMissionBtn = getByText('Leave Mission');

    fireEvent.click(leaveMissionBtn);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith(missionActions.leavingMission('mission-1'));
  });
});
