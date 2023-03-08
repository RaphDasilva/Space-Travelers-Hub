import React from 'react';
import { useSelector } from 'react-redux';
import style from '../styles/Profile.module.css';

const Profile = () => {
  const missions = useSelector((store) => store.mission);
  const display = missions.mission.filter((mission) => mission.reserved === true);
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div>My Mission</div>
        <div className={style.rocketHead}>My Rocket</div>
      </div>

      <div className={style.body}>

        <div className={style.mission}>
          {
            display.map((item) => <div key={item.mission_id}>{item.mission_name}</div>)
          }
        </div>
        <div className={style.rocket}>
          <div>Your code here</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
