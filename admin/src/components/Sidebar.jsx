// import React from 'react'
// import {Link} from "react-router-dom";
// export default function Sidebar() {
//     return (

//         <>
//             {/* <div className="drawer lg:drawer-open mt-18">
//                 <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//                 <div className="drawer-content flex flex-col items-center justify-center">
//                     Page content here
//                     <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

//                 </div>
//                 <div className="drawer-side">
//                     <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
//                     <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
//                         {/* Sidebar content here */}
//             {/* <li><a>Sidebar Item 1</a></li>
//                         <li><a>Sidebar Item 2</a></li>
//                     </ul>

//                 </div>

//             </div> */}

//             <div className="drawer lg:drawer-open  mt-5">
//                 <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//                 <div className="drawer-content flex flex-col items-center justify-center">
//                     {/* Page content here */}
//                     <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

//                 </div>
//                 <div className="drawer-side shadow ps-2 pe-5  sidebarHeight mb-5">
//                     <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay">
//                       <h2 className=' mt-5 mb-0 pb-0'>Dashboard</h2></label>
//                     <hr className='p-0 m-0' />

//                     <ul className="menu m-0 p-0  w-70 bg-base-200 text-base-content ">
//                         {/* Sidebar content here */}

//                         {/* <li><a a className='m-0 p-0 pb-2 pt-3 '>Health services</a></li>
//                         <li><a a className='m-0  pb-2 p-0'>Guides</a></li>
//                         <li><a a className='m-0  pb-2 p-0'>Acoomodation</a></li> */}

//                         <Link to='/healthservices'><li><a a className='m-0  pb-2 p-0'>Health Services</a></li></Link>

//                         <Link to='/guides'><li><a a className='m-0  pb-2 p-0'>Guides</a></li></Link>

//                         <Link to='/accomodation'><li><a a className='m-0  pb-2 p-0'>Accomodation</a></li></Link>

//                     </ul>

//                 </div>
//             </div>
//         </>

//     )
// }

import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side shadow ps-2 pe-5  sidebarHeight mt-5">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        >
          {" "}
          <h2 className=" mt-2 mb-0 pb-0">Category</h2>
        </label>
        <hr className="p-0 m-0" />

        <ul className="menu m-0 p-0  w-70 bg-base-200 text-base-content ">
          {/* Sidebar content here */}

          <Link to="/guides">
            <li>
              <a a className="m-0  pb-2 p-0">
                Guide
              </a>
            </li>
          </Link>

          <Link to="/healthservices">
            <li>
              <a a className="m-0  pb-2 p-0">
                Health Services
              </a>
            </li>
          </Link>

          <Link to="/accomodation">
            <li>
              <a a className="m-0  pb-2 p-0">
                Accomodation
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
