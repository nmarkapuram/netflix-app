import React, { useRef, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../utils/firebase'
import Header from './Header'
import { checkValidateData } from '../utils/validate'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true)
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm)
  }

  const handleButtonCLick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value,
    )
    setErrorMessage(message)

    if (message) return

    if (!isSignInForm) {
      //SignUp
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user
          console.log(user)

          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: 'https://avatars.githubusercontent.com/u/10340654?v=4',
          })
            .then(() => {
              // Profile updated!
              console.log('Profile updated', auth.currentUser)
              const { uid, email, displayName, photoURL } = auth.currentUser
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
            })
            .catch((error) => {
              // An error occurred
              console.log(error)
              // ...
            }) // ...
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setErrorMessage(errorCode + '-' + errorMessage)
          // ..
        })
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log(user)
          navigate('/browse')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setErrorMessage(errorCode + '-' + errorMessage)
        })
    }
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
        <form
          className='w-full'
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className='font-bold text-3xl py-4'>
            {' '}
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </h2>
          {!isSignInForm && (
            <input
              type='text'
              ref={name}
              placeholder='Full Name'
              className='border p-4 m-2 w-full bg-gray-700'
            />
          )}
          <input
            type='text'
            ref={email}
            placeholder='Email Address'
            className='border p-4 m-2 w-full bg-gray-700'
          />

          <input
            type='Password'
            ref={password}
            placeholder='Password'
            className='border p-4 m-2 w-full bg-gray-700'
          />
          <button
            className='p-4 m-2 bg-red-700 w-full'
            onClick={handleButtonCLick}
          >
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>
          {errorMessage && (
            <p className='text-red-800 py-4 m-2'>{errorMessage}</p>
          )}

          <a
            onClick={toggleSignInForm}
            href='javascript:void(0)'
            className='py-4 m-2'
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
