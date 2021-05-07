import { motion } from 'framer-motion'
import { MenuItem } from './menuItem'

const variants = {
	open: {
        scaleX: 1,
		transition: {type: "spring", mass: 0.3, delay:0.1, staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
        scaleX: 0,
        
		transition: { delay: 0.3, staggerChildren: 0.05, delayChildren: 0 },
	},
}

export const Menu = ({ toggle }) => {
	return (
	<motion.div className='relative w-screen z-40'>
		<motion.ul
			className='pt-36 absolute origin-right top-0 right-0 w-8/12 bg-[#687C8B] h-screen'
			variants={variants}
			onClick={toggle}>
			{itemIds.map((i) => (
				<MenuItem i={i} key={i} />
			))}
		</motion.ul>
	</motion.div>)
}

const itemIds = [0, 1, 2, 3, 4]