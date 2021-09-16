import { motion } from 'framer-motion'

const variants = {
	open: {
		translateY: 0,
        opacity: 1,
		transition: { type: 'spring', mass: 0.3, staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		translateY: 800,
opacity: 0,
		transition: {   delay: 0.2, staggerChildren: 0.05, delayChildren: 0 },
	},
}

export const NavInfo = ({ toggle }) => {
	return (
		<motion.div className='relative w-screen z-40'>
			<motion.div
				className='pt-12 center absolute origin-bottom top-0 left-0 w-6/12 md:w-4/12 bg-[#8B8888] h-[60vh] mt-[40vh]'
				variants={variants}

				onClick={toggle}>
				<div className='lg:px-20 px-2 text-white text-right text-sm md:text-lg xl:text-2xl font-sans'>
					<h3 className='mb-2'>435 NORTH MAIN STREET</h3>
					<h3 className='mb-2'>FORT BRAGG, CA 95437</h3>
					<h3 className='mb-2'>707.961.0911</h3>
					<h3 className='mb-2'>INFO@LSNDESIGN.COM</h3>
				</div>
			</motion.div>
		</motion.div>
	)
}
