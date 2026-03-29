import React, { useEffect } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constant'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        )
        navigate('/browse')
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate('/')
      }
    })

    return () => unsubscribe()
  }, [])

  const Logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error)
        navigate('/error')
      })
  }
  return (
    <div className='absolute bg-linear-to-t from-gray to-black px-8 py-2 z-20 w-screen flex justify-between'>
      <div className='w-28'>
        <img
          src={LOGO}
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
