// import React from 'react'
// import logo from "../images/logos.png"
// export default function Navbar() {
//     return (
//         <>
//             <navbar class="fixed top-0 z-10 bg-gray-50 w-full">

//                 <div className="navbar bg-blue-700">

//                     <div className="flex-1">
//                         <img className="w-20" src={logo}/>
//                     </div>

//                     <div className="flex-none">

//                         <div className="dropdown dropdown-end">

//                             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
//                                 <div className="indicator">

//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
//                                     <span className="badge badge-xs badge-primary indicator-item"></span>

//                                 </div>
//                             </div>

//                             <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-auto bg-base-100 shadow">
//                                 <div className="card-body">

//                                     <div className="card w-96 bg-gray-100 text-neutral-content">
//                                         <div className="card-body">
//                                             {/* <h2 className="card-title">Cookies!</h2> */}
//                                             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//                                                 <div className="w-10 rounded-full">
//                                                     <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//                                                 </div>

//                                             </div>

//                                             <p>We are using cookies for no reason.</p>
//                                             <div className="card-actions">
//                                                 <button className="btn btn-primary">Accept</button>
//                                                 <button className="btn btn-ghost">Deny</button>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="card w-96 bg-gray-100 text-neutral-content">
//                                         <div className="card-body">
//                                             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//                                                 <div className="w-10 rounded-full">
//                                                     <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//                                                 </div>

//                                             </div>

//                                             <p>We are using cookies for no reason.</p>
//                                             <div className="card-actions">
//                                                 <button className="btn btn-primary">Accept</button>
//                                                 <button className="btn btn-ghost">Deny</button>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="card w-96 bg-gray-100 text-neutral-content">
//                                         <div className="card-body">
//                                             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//                                                 <div className="w-10 rounded-full">
//                                                     <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//                                                 </div>

//                                             </div>
//                                             <p>We are using cookies for no reason.</p>
//                                             <div className="card-actions">
//                                                 <button className="btn btn-primary">Accept</button>
//                                                 <button className="btn btn-ghost">Deny</button>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="card-actions">
//                                         <button className="btn btn-primary btn-block w-96">View All Notifications</button>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>

//                         <div className="dropdown dropdown-end mr-8">
//                             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//                                 <div className="w-10 rounded-full">
//                                     <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//                                 </div>
//                             </div>

//                             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                                 <li>
//                                     <a className="justify-between">
//                                         Profile
//                                         <span className="badge">New</span>
//                                     </a>
//                                 </li>
//                                 <li><a>Settings</a></li>
//                                 <li><a>Logout</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </navbar>
//         </>
//     )
// }

import React from "react";
import logo from "../images/logos.png";

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 z-10 bg-purple-600 w-full">
        <div className="navbar justify-between">
          {" "}
          {/* Changed to light beige */}
          <div className="flex">
            <img className="w-20" src={logo} />
          </div>
          {/* <div className="relative">

          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div> */}
          <input
            type="text"
            placeholder="Search here"
            // className="input input-bordered input-primary ml-5 w-full max-w-3xl  "
            className="
             w-1/2 p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {/* <input
            type="text"
            placeholder="Search here"
            className="input input-bordered input-primary ml-5 w-full max-w-xl "
          /> */}
          {/* search  bar */}
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-auto bg-white shadow"
              >
                {" "}
                {/* Changed to white */}
                <div className="card-body">
                  <div className="card w-96 bg-gray-50 text-neutral-content">
                    {" "}
                    {/* Changed to light gray */}
                    <div className="card-body">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          />
                        </div>
                      </div>
                      <p>We are using cookies for no reason.</p>
                      <div className="card-actions">
                        <button className="btn btn-primary">Accept</button>
                        <button className="btn btn-ghost">Deny</button>
                      </div>
                    </div>
                  </div>
                  <div className="card w-96 bg-gray-50 text-neutral-content">
                    {" "}
                    {/* Changed to light gray */}
                    <div className="card-body">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          />
                        </div>
                      </div>
                      <p>We are using cookies for no reason.</p>
                      <div className="card-actions">
                        <button className="btn btn-primary">Accept</button>
                        <button className="btn btn-ghost">Deny</button>
                      </div>
                    </div>
                  </div>
                  <div className="card w-96 bg-gray-50 text-neutral-content">
                    {" "}
                    {/* Changed to light gray */}
                    <div className="card-body">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          />
                        </div>
                      </div>
                      <p>We are using cookies for no reason.</p>
                      <div className="card-actions">
                        <button className="btn btn-primary">Accept</button>
                        <button className="btn btn-ghost">Deny</button>
                      </div>
                    </div>
                  </div>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block w-96">
                      View All Notifications
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end mr-8">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
              >
                {" "}
                {/* Changed to white */}
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
