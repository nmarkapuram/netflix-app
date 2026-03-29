import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true)

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header />
      <div className='absolute opacity-40'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_large.jpg'
          alt='image'
        />
      </div>
      <div className='mx-auto bg-black absolute w-3/12 p-8 text-white my-36 right-0 left-0 rounded-lg opacity-85'>
        <form className='w-full'>
          <h2 className='font-bold text-3xl py-4'>
            {' '}
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </h2>
          {!isSignInForm && (
            <input
              type='text'
              placeholder='Full Name'
              className='border p-4 m-2 w-full bg-gray-700'
            />
          )}
          <input
            type='text'
            placeholder='Email Address'
            className='border p-4 m-2 w-full bg-gray-700'
          />

          <input
            type='Password'
            placeholder='Password'
            className='border p-4 m-2 w-full bg-gray-700'
          />
          <button className='p-4 m-2 bg-red-700 w-full'>
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>
          <a
            onClick={toggleSignInForm}
            href='javascript:void(0)'
            className='p-4 m-2'
          >
            {isSignInForm
              ? 'New to Netflix? Sign Up Now'
              : 'Already Registerd? Sign In now'}{' '}
          </a>
        </form>
      </div>
    </div>
  )
}

export default Login
