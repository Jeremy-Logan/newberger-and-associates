import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className='flex justify-around md:justify-between py-12 bg-yellow-500 md:flex-row flex-col mt-12'>
        <ul className='ml-12 md:ml-24 underline text-xl text-white font-medium mb-12 md:mb-0'>
        <li><Link href='/'>HOME</Link></li>
        <li><Link href='/projects'>PROJECTS</Link></li>
        <li><Link href='/about'>ABOUT</Link></li>
        <li><Link href='/contact'>CONTACT</Link></li>
        </ul>
        <div className='md:text-right ml-12 md:ml-24 md:mr-24 text-xl text-white font-medium'>
        <h3>435 NORTH MAIN STREET</h3>
        <h3>FORT BRAGG, CA  95437</h3>
        <h3>707.961.0911</h3>
        <h3>INFO@LSNDESIGN.COM</h3>
        </div>
      </footer>
    </>
  )
}
