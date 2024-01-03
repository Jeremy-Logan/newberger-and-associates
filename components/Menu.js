import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'


const variants = {
	open: {
		scaleX: 1,
		transition: {
			type: 'spring',
			mass: 0.3,
			delay: 0.1,
			staggerChildren: 0.07,
			delayChildren: 0.2,
		},
	},
	closed: {
		scaleX: 0,

		transition: { delay: 0.3, staggerChildren: 0.05, delayChildren: 0 },
	},
}

export const Menu = ({ toggle }) => {
	const links = [{index: 0, href: '/', name:'Home'}, {index: 1, href: '/about', name:'About'}, {index: 2, href: '/projects', name:'Projects'}, {index: 3, href: '/contact', name:'Contact'}]

	return (
		<motion.div id="menu-container"
        aria-labelledby="menubutton"
        role="menu" className='relative w-screen z-40'>
			<motion.div
				className='pt-36 absolute origin-right right-0 w-6/12 md:w-8/12 bg-[#687C8B] h-screen'
				variants={variants}
				initial='closed'
				onClick={toggle}>
				{links.map((link, index) => (
					<>
						<MenuItem className='active:bg-yellow-500'
							key={index}
							href={link.href}
							role="menuitem"
							name={link.name}
						><a>{link.name}</a></MenuItem>
					</>
				))}
			</motion.div>
		</motion.div>
	)
}
