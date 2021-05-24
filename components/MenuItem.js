import { motion } from 'framer-motion'
import Link from 'next/link'

export const MenuItem = (props) => {
	const links = ['/', '/about', '/projects', '/contact']
	const names = ['Home', 'About', 'Projects', 'Contact']
	const menuLink = `${links[props.i]}`
	const menuName = `${names[props.i]}`
	const variants = {
		open: {
			scaleY: 1,
			opacity: 1,
			transition: {
				y: { stiffness: 1000, velocity: 100 },
			},
		},
		closed: {
			scaleY: 0,
			opacity: 0,
			transition: {
				y: { stiffness: 1000 },
			},
		},
	}
	const backgroundColor = {backgroundColor: props.color}

	return (
		<motion.li variants={variants}>
			<motion.div
				className='z-10 overflow-hidden flex '
				>
				{' '}
				<h2 style={backgroundColor} className='text-white origin-left font-serif font-bold p-3 ml-48 lg:ml-16 text-4xl m:pl-0 xl:text-8xl lg:text-7xl md:text-6xl lg:mt-2 md:mt-2 transition duration-300 ease-in-out transform hover:scale-110'>
					<Link href={menuLink}>{menuName}</Link>
				</h2>
			</motion.div>
		</motion.li>
	)
}