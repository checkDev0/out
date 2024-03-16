import Logo from '../assets/ms-logo.svg'
import LogoHeader from '../assets/out-logo.png'
import { useState } from 'react'

const Body = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [showError, setShowError] = useState(false)
  const [btn, setBtn] = useState('Next')

  const handleClick = () => {
    setShowError(false)
    if (!showPassword && !email) {
      setShowError(true)
      setError('Please provide a valid user ID')
      return
    }
    if (!showPassword && email) {
      setBtn('Submit')
      setShowPassword(true)
      return
    }

    if (showPassword && !password) {
      setShowError(true)
      setError('Please enter your password')
      return
    }
    if (showPassword && password) {
      alert('ok')
    }
  }
  return (
    <div className='px-3 py-5 md:p-[auto] w-screen md:h-screen flex items-center justify-center flex-col gap-6 text-[#323130]'>
      <header className='text-3xl text-[#323130] font-extrabold'>
        <img src={LogoHeader} className='w-[13rem]' />
      </header>
      <div className='border w-full md:w-[27rem] p-10 flex flex-col shadow-microsoftLogin'>
        <img src={Logo} className='w-[7rem] mb-5' />
        <section className='text-[#323130]'>
          <p className='text-xl font-medium'>Sign in</p>
          <p className='text-sm'>to continue to Outlook</p>
        </section>
        {!showPassword ? (
          <input
            type='text'
            placeholder='Email, phone, or skype'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mt-5 tracking-tight outline-none border-b border-black pb-1 w-full text-lg'
          />
        ) : (
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='mt-5 tracking-tight outline-none border-b border-black pb-1 w-full text-lg'
          />
        )}
        {showError && <p className='text-red-600'>{error}</p>}
        <p className='mt-3 text-sm'>
          No account? <span className='text-[#00A4EF]'>Create one!</span>
        </p>
        <button
          className='bg-[#0067B8] text-white w-24 self-end mt-3 font-medium py-1'
          onClick={handleClick}
        >
          {btn}
        </button>
      </div>
    </div>
  )
}

export default Body
