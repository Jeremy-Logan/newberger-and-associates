import { motion } from 'framer-motion'

const Path = (props) => (
	<motion.path
		fill='transparent'
		strokeWidth='2'
		stroke='hsl(100, 100%, 100%)'
		{...props}
	/>
)

export const MenuToggle = ({ toggle }) => (
	<button className='absolute top-24 right-4 outline-none border-none focus:outline-none cursor-pointer w-[100px] h-[100px] z-50 bg-yellow-500 appearance-none' onClick={toggle}>
		<svg width='100' height='100' viewBox='0 -8 20 35'>
			<Path
				variants={{
					closed: { d: 'M 2 2.5 L 20 2.5' },
					open: { d: 'M 3 16.5 L 17 2.5' },
				}}
			/>
			<Path
				d='M 2 9.423 L 20 9.423'
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 },
				}}
				transition={{ duration: 0.1 }}
			/>
			<Path
				variants={{
					closed: { d: 'M 2 16.346 L 20 16.346' },
					open: { d: 'M 3 2.5 L 17 16.346' },
				}}
			/>
		</svg>
	</button>
)