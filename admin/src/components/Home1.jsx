import React from 'react';
import Navbar from './Navbar';
import Sidebar1 from './Sidebar1';
import Card1 from './Card1';
import Card2 from './Card2';
import Food_card from './Food_card';




export default function Home() {
    return (
        <div>
            <Navbar />

            <div className="container-fluid mb-5 pt-5 d-flex">
                <div className="row w-100 m-0 p-0">

                    <div className="col-lg-2 p-0 m-0" style={{ position: 'fixed', top: '0', left: '0', height: '100%', overflowY: 'auto' }}>
                        <Sidebar1 />
                    </div>


                    <div className="col-lg-9 offset-lg-2 mt-5" style={{ paddingLeft: '20px' }}>
                    {/* <input type="text" placeholder="Type here" className="input input-bordered input-primary ml-5 w-full max-w-xl mt-4" /> */}

                        <h4 className='ml-5'>Guide Request Review</h4>
                        <div className='flex ml-5 flex-wrap gap-3'>
                            <Card1 />
                            <Card1 />
                            <Card1 />
                            <Card1 />
                        </div>




                        <h4 className='ml-5 mt-5'>Requested accomodation request</h4>
                        <div className='ml-5  flex flex-wrap gap-2'>
                            <Card2 />
                            <Card2 />
                            <Card2 />
                            <Card2 />
                        </div>



                        <h4 className='ml-5 mt-5'>Requested restaurant request</h4>
                        <div className='ml-5  flex flex-wrap gap-2'>
                            <Food_card />
                            <Food_card />
                            <Food_card />
                            <Food_card />
                        </div>
                    </div>




                   




                       



                      
                   
                </div>
            </div>
        </div>
    );
}
