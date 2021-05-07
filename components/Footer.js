import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className='flex justify-between'>
        <ul className='ml-12 underline text-xl font-medium'>
        <li><Link href='/'>HOME</Link></li>
        <li><Link href='/projects'>PROJECTS</Link></li>
        <li><Link href='/about'>ABOUT</Link></li>
        <li><Link href='/contact'>CONTACT</Link></li>
        </ul>
        <div className='text-right mr-12 text-xl font-medium'>
        <h3>435 NORTH MAIN STREET</h3>
        <h3>FORT BRAGG, CA  95437</h3>
        <h3>707.961.0911</h3>
        <h3>INFO@LSNDESIGN.COM</h3>
        </div>
      </footer>
    </>
  )
}
