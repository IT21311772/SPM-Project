// import React, { useState } from 'react';
// import './Sidebar.css';
// import { SidebarDetails } from './SidebarDetails';
// import IconButton from '@mui/material/IconButton';
// import DehazeIcon from '@mui/icons-material/Dehaze';

// function Sidebar() {
//   const [sidebarVisible, setSidebarVisible] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   return (
//     <div className="sideApp">
//       <div className={sidebarVisible ? 'sidebar' : 'sidebar hidden'}>
//         <IconButton className="toggle-button" onClick={toggleSidebar}>
//           <DehazeIcon className='sideIcon'/>
//         </IconButton>
//         {sidebarVisible && (
//           <ul className='list'>
//             {SidebarDetails.map((val, key) => {
//               return (
//                 <li
//                   key={key}
//                   className='row'
//                   id={window.location.pathname == val.link ? "active" : ""}
//                   onClick={() => {
//                     window.location.pathname = val.link;
//                   }}
//                 >
//                   <div className='icon'>{val.icon}</div> <div className='title'>{val.title}</div>
//                 </li>
//               );
//             })}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
