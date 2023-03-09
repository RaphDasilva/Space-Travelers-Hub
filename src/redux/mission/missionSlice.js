import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMission = createAsyncThunk('mission/getMission', async () => {
  const result = await axios('https://api.spacexdata.com/v3/missions');
  return result.data;
});

const initialState = {
  mission: [],
  status: 'idle',
  error: null,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const updatedMissions = state.mission.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
      return { ...state, mission: updatedMissions };
    },
    leavingMission: (state, action) => {
      const updatedMissions = state.mission.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
      return { ...state, mission: updatedMissions };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMission.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getMission.fulfilled, (state, action) => ({
        ...state,
        mission: action.payload,
        status: 'succeeded',
      }))
      .addCase(getMission.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const missionActions = missionSlice.actions;
export default missionSlice.reducer;
