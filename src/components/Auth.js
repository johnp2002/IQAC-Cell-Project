import React from 'react'

const Auth = () => {
  return (
    <div className='flex justify-center items-center bg-no-repeat bg-cover w-screen h-full bg-[url("https://static.vecteezy.com/system/resources/previews/023/029/813/non_2x/cyber-security-and-security-password-login-online-concept-hands-typing-and-entering-username-and-password-of-social-media-log-in-with-smartphone-to-an-online-bank-account-data-protection-hacker-photo.jpg")]'>
        <div className='-mt-40 flex items-center backdrop-blur-sm backdrop-brightness-75 p-10 rounded-xl'>
            <img src='https://www.pvpsiddhartha.ac.in/me_conference/assets/img/logo1.png' width={120} />
            <form className='pl-5 border-l ml-4'>
                <div className='flex justify-between items-center justify-center'>

                <label className='text-white'>Username</label>
                <input type='text' className='p-2 ml-2 rounded-lg mb-2' placeholder='enter UserName' />
                </div>
                <div className='flex justify-between items-center justify-center'>

                <label className='text-white'>Password</label>
                <input className='p-2 ml-2 rounded-lg mb-2' type='text' placeholder='enter Password' />
                </div>
            </form>
        </div>  
    </div>
  )
}

export default Auth