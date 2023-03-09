import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/missionSlice';
import rocketsReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    mission: missionReducer, rocketsReducer,
  },
});

export default store;
