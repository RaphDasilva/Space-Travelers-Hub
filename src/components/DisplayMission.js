import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/DisplayMission.module.css';
import { getMission, missionActions } from '../redux/mission/missionSlice';

const DisplayMission = () => {
  const { mission, status, id } = useSelector((store) => store.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);

  let outPut;
  if (status === 'loading') {
    outPut = (
      <div className="loading">
        <h5>Loading....</h5>
      </div>
    );
  }

  const joinMissionHandler = (e) => {
    const { id } = e.target.dataset;
    dispatch(missionActions.joinMission(id));
  };

  return (
    <>
      <div>{outPut}</div>
      {
        mission ? (
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
                <button type="button" data-id={id} className={styles.joinMissionBtn} onClick={joinMissionHandler}>
                  Join Mission
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="loading">
            <h5>Loading....</h5>
          </div>
        )
      }
    </>
  );
};

export default DisplayMission;
