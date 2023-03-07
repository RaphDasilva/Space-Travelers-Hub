import React from 'react';
import DisplayMission from './DisplayMission';
import styles from '../styles/Missions.module.css';

function Missions() {
  return (
    <div className={styles.missionsContainer}>
      <div className={styles.missionsHeader}>
        <div>
          <p>Mission</p>
        </div>
        <div>
          <p>Description</p>
        </div>
        <div>
          <p>Status</p>
        </div>
        <div />
      </div>
      <DisplayMission />
    </div>
  );
}

export default Missions;
