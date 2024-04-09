import React from 'react'
import styles from './styles.module.css';

const home = () => {
  return (
    <>
      {/* desktop */}
      <div className='md:flex hidden relative w-screen h-screen justify-center items-center'>
        <img src='/memezoo.png' alt='memezoo' className='w-full h-full absolute top-0 left-0'/>
        <a href="#" className='w-32 absolute'>
          <img src="/Buttons/buy_button.png" className='w-50' alt="buy" />
        </a>
      </div>
      {/* mobile */}
      <div className='md:hidden flex relative w-screen h-screen justify-center items-center'>
        <img src='/memezoo.png' alt='memezoo' className={`${styles.bgImage} w-full h-full absolute top-0 left-0`}/>
        <img src='/memezoo.png' alt='memezoo' className='w-full h-1/2 absolute top-1/4 left-0'/>
        <a href="#" className='w-32 absolute'>
          <img src="/Buttons/buy_button.png" className='w-50' alt="buy" />
        </a>
      </div>

      {/* navbar */}
      <div className="flex sm:justify-start sm:pl-8 justify-center items-center gap-8 absolute top-8 left-0 w-full">
        <a href='https://x.com/memezoosol'>
          <img src='/Socials/twitter.png' className='w-12'/>
        </a>
        <a href='https://t.me/memezoosolportal'>
          <img src='/Socials/telegram.png' className='w-12'/>
        </a>
        <a href='#'>
          <img src='/Socials/logo_sol2.png' className='w-12'/>
        </a>
      </div>
    </>
  )
}

export default home