import React from 'react'
import h1 from '../images/hotel1.webp'
import lo from "../images/location.png"

export default function Card2() {
    return (


        // <div className="bg-gray-100 text-neutral-content">
        <div className=" w-auto bg-gray-100 text-neutral-content rounded-lg">


            <div className="card-body">

                <div className='flex '>
                    <figure className="">
                        <img src={h1} alt="Shoes" className="rounded-xl w-32 h-auto" />
                    </figure>


                    <div className='ml-5 mt-2'>
                        <strong> <p className='m-0'>Hotel Yellow Pagoda</p></strong>

                        <p>Hotel in Pokhara</p>
                        


                        <p>Set in Pokhara, 300 metres from Fewa Lake,Hotel Portland offers air-conditioned rooms and a bar.</p>
                    </div>
                </div>


                <div className="card-actions">


                    <button className="btn btn-primary hover:bg-blue-500">Accept</button>
                    <button className="btn btn-ghost hover:bg-blue-500 hover:text-white">Deny</button>
                </div>
            </div>

        </div>






    )
}
