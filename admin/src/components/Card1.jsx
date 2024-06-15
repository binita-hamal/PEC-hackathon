import React from 'react'

export default function Card1() {
    return (


        <div className="card w-auto bg-gray-100 text-neutral-content">
            <div className="card-body">
                {/* <h2 className="card-title">Cookies!</h2> */}
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full flex">
                        <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>

                <p className='m-0'>John Doe</p>
                <p className='m-0'>Experienced guide with 10 years in the tourism industry.</p>
                <p>john.doe@example.com</p>


                <div className="card-actions">
                    {/* <button className="btn btn-primary">Accept</button>
                                        <button className="btn btn-ghost">Deny</button> */}

                    {/* <button className="btn bg-blue-500 text-white hover:bg-blue-700">Accept</button>
                    <button className="btn btn-ghost hover:bg-blue-500 hover:text-white">Deny</button> */}

                    <button className="btn btn-primary hover:bg-blue-500">Accept</button>
                    <button className="btn btn-ghost hover:bg-blue-500 hover:text-white">Deny</button>
                </div>
            </div>

        </div>






    )
}
