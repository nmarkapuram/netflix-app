import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)

  const Logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
        navigate('error')
      })
  }
  return (
    <div className='absolute bg-linear-to-t from-gray to-black px-8 py-2 z-20 w-screen flex justify-between'>
      <div className='w-28'>
        <img
          src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-03-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
          alt='logo'
        ></img>
      </div>
      {user && (
        <div className='flex justify-between p-2'>
          <img
            className='p-2 w-12'
            src={user?.photoURL}
            alt=''
          />
          <button
            onClick={Logout}
            className='cursor-pointer p-2'
          >
            {' '}
            Log out{' '}
          </button>
        </div>
      )}
    </div>
  )
}

export default Header
