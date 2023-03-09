import React from 'react';
import { useSelector } from 'react-redux';
import style from '../styles/Profile.module.css';

const Profile = () => {
  const missions = useSelector((store) => store.mission);
  const display = missions.mission.filter((mission) => mission.reserved === true);

  const rockets = useSelector((state) => state.rocketsReducer);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div>My Mission</div>
        <div className={style.rocketHead}>My Rocket</div>
      </div>

      <div className={style.body}>

        <div className={style.mission}>
          { display.length === 0 && <div>No Reserved Mission</div>}
          {
            display.map((item) => <div key={item.mission_id}>{item.mission_name}</div>)
          }
        </div>
        <div className={style.rocket}>
          { reservedRockets.length === 0 && <div>No Reserved Rockets</div>}
          {reservedRockets.map((rocket) => (
            <div key={rocket.id} className="reserve-item">{rocket.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;

// import React from 'react';
// import RocketProfile from './rocketComponent/RocketProfile';
// import MissionProfile from './missionspage/missionsProfile';

// const Profiles = () => (
//   <main className="profile-main">
//     <RocketProfile />
//     <MissionProfile />
//   </main>
// );

// export default Profiles;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import style from '../styles/Profile.module.css';

// const Profile = () => {
//   const missions = useSelector((store) => store.mission);
//   const display = missions.mission.filter((mission) => mission.reserved === true);
//   return (
//     <div className={style.container}>
//       <div className={style.header}>
//         <div>My Mission</div>
//         <div className={style.rocketHead}>My Rocket</div>
//       </div>

//       <div className={style.body}>

//         <div className={style.mission}>
//           {
//             display.map((item) => <div key={item.mission_id}>{item.mission_name}</div>)
//           }
//         </div>
//         <div className={style.rocket}>
//           <div>Your code here</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
