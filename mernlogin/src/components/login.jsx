import React from 'react';
import Dragon from '../assets/image.png';

const Login = () =>{
    return(<>

    <div className='w-full h-screen flex justify-center items-center  bg-slate-200'>
    <div className="relative w-[80%] h-[80vh] after:content-[''] after:absolute after:top-0 after:left-0 after:opacity-25 after:w-full after:h-[80vh] after:ml-0.5 after:bg-gradient-to-l from-indigo-500 after:z-10 py-7 px-7 shadow-md bg-slate-400 rounded-sm" style={{ backgroundImage: `url(${Dragon})`, backgroundSize: 'cover', backgroundPosition: 'center center',filter: 'grayscale(100%)', }}>
       <div className=''>

       </div>
    </div>
    </div>
        
    </>)
}

export default Login