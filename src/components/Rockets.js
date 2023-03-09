import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RocketsItem from './rocketComponent/RocketsItem';
import { fetchRocketApi } from '../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRocketApi());
    }
  }, [rockets.length, dispatch]);
  // useEffect(() => {
  //   if (rockets.length === 0) {
  //     dispatch(fetchRocketApi());
  //   }
  // }, [dispatch]);
  return (
    <main>
      {
      rockets.map((rocket) => (
        <RocketsItem key={rocket.id} rocket={rocket} />
      ))
    }
    </main>
  );
};

export default Rockets;
