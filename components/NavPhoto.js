import { motion } from 'framer-motion'
import Image from 'next/image'

const variants = {
	open: {
		translateX: 0,
		transition: {
			type: 'spring',
			mass: 0.3,
			staggerChildren: 0.07,
			delayChildren: 0.2,
		},
	},
	closed: {
		translateX: -1000,

		transition: { delay: 0.2, staggerChildren: 0.05, delayChildren: 0 },
	},
}

export const NavPhoto = ({ toggle }) => {
	return (
		<motion.div className='relative w-screen z-40'>
			<motion.div
				className='absolute origin-left top-0 left-0 w-6/12 md:w-4/12 bg-blue-500 h-[40vh]'
				variants={variants}
				onClick={toggle}>
				<div className='relative w-full h-full'>
				<Image
					src='v1620327406/Newberger%20and%20Associates/brotherton-05_fwt9l9.jpg'
					layout='fill'
					objectFit='cover'
					placeholder='blur'
					blurDataURL='https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/v1620327406/Newberger%20and%20Associates/brotherton-05_fwt9l9.jpg'
					alt='menu-image'
				/></div>
			</motion.div>
		</motion.div>
	)
}
