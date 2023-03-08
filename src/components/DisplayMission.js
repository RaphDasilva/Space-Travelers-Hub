import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/DisplayMission.module.css';
import { getMission } from '../redux/mission/missionSlice';

const DisplayMission = () => {
  const { mission, status } = useSelector((store) => store.mission);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(getMission());
  }, [dispach]);

  let outPut;
  if (status === 'loading') {
    outPut = (
      <div className="loading">
        <h5>Loading....</h5>
      </div>
    );
  }

  return (
    <>
      <div>{outPut}</div>
      {
      mission.map((item) => (
        <div className={styles.missionItems} key={item.mission_id}>
          <div className={styles.missionHead}>
            <h3>{item.mission_name}</h3>
          </div>
          <div className={styles.missionInfo}>
            <p>
              {item.description}
            </p>
          </div>
          <div className={styles.buttons}>
            <button type="button" className={styles.memberBtn}>
              NOT A MEMBER
            </button>
          </div>
          <div className={styles.buttons}>
            <button type="button" className={styles.joinMissionBtn}>
              Join Mission
            </button>
          </div>
        </div>
      ))
    }
    </>
  );
};

export default DisplayMission;
