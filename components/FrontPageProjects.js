import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring,
	useAnimation,
} from 'framer-motion'

const FadeIn = ({ children }) => {
	const controls = useAnimation()
	const [ref, inView] = useInView()

	useEffect(() => {
		inView ? controls.start('visible') : controls.start('hidden')
	}, [controls, inView])

	return (
		<motion.div
			className='z-30'
			ref={ref}
			animate={controls}
			initial='hidden'
			transition={{ type: 'spring', duration: 1, delay: 0.5 }}
			variants={{
				visible: { opacity: 1, scale: 1 },
				hidden: { opacity: 0, scale: 0.5 },
			}}>
			{children}
		</motion.div>
	)
}

const SlideIn = ({ children, originX, originY }) => {
	const controls = useAnimation()
	const [ref, inView] = useInView()

	useEffect(() => {
		inView ? controls.start('visible') : null
	}, [controls, inView])

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial='hidden'
			transition={{ type: 'spring', duration: 1, delay: 0.4 }}
			variants={{
				visible: { opacity: 1, x: 0, y: 0 },
				hidden: { opacity: 0, x: originX, y: originY },
			}}>
			{children}
		</motion.div>
	)
}

const Project = (props) => {
	const { scrollYProgress } = useViewportScroll()
	const yRange = useTransform(scrollYProgress, [0, 1], [0, 1])
	return (
		<div className='overflow-hidden'>
			<SlideIn originX={-100} originY={0}>
				<div className='relative w-[60vw] h-[60vh] mb-36'>
					<Image
						src={props.heroImage}
						layout='fill'
						objectFit='cover'
					/>
				</div>
			</SlideIn>
			<SlideIn originX={200} originY={0}>
				<div className='relative flex '>
					<h2 className='absolute bottom-52 left-[45vw] z-30 bg-[#EE9207] text-white text-6xl font-serif font-bold pb-4 pt-3 px-6'>
						{props.title}
					</h2>
				</div>
			</SlideIn>
			<SlideIn originX={0} originY={200}>
				<div className='flex justify-center'>
					<div className='w-1/3 flex justify-center mt-24'>
						<div className='text-left'>
							<h3 className='text-md font-semibold tracking-wider mb-4'>
								{props.category}
							</h3>
							{props.features.map((feature, i) => (
								<h4
									className='text-2xl leading-relaxed'
									key={i}>
									{feature}
								</h4>
							))}
							<Link href={`./projects${props.path}`}>
								<button className='border-[#EE9207] p-4 border-2 mt-10 text-[#EE9207]'>
									READ MORE
								</button>
							</Link>
						</div>
					</div>
					<div className='relative w-1/3 h-[70vh] mb-36'>
						<Image
							src={props.portfolioImages[0]}
							layout='fill'
							objectFit='cover'
						/>
					</div>
				</div>
			</SlideIn>
			<div className='flex justify-end h-36 '>
				<svg height='100' width='500'>
					<line
						x1='0'
						y1='0'
						x2='300'
						y2='0'
						className='stroke-[5px] stroke-current text-gray-400'
					/>
				</svg>
			</div>
		</div>
	)
}

const ProjectFlipped = (props) => {
	return (
		<>
			<div className='relative flex overflow-hidden'>
				<div className='w-1/2'></div>
				<div className='absolute bottom-52 right-[40vw] z-30'>
					<SlideIn originX={-200}>
						<h2 className=' bg-[#EE9207] text-white text-6xl font-serif font-bold pb-4 pt-3 px-6'>
							{props.title}
						</h2>
					</SlideIn>
				</div>
				<SlideIn originX={300}>
					<div className='relative w-[60vw] h-[60vh] z-10 mb-36'>
						<Image
							src={props.heroImage}
							layout='fill'
							objectFit='cover'
						/>
					</div>
				</SlideIn>
			</div>
			<SlideIn originY={200}>
			<div className='flex justify-center'>
				<div className='relative w-1/3 h-[70vh] mb-36'>
					<Image
						src={props.portfolioImages[0]}
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='w-1/3 flex justify-center mt-24'>
					<div className='text-left'>
						<h3 className='text-md font-semibold tracking-wider mb-4'>
							{props.category}
						</h3>
						{props.features.map((feature, i) => (
							<h4 className='text-2xl leading-relaxed' key={i}>
								{feature}
							</h4>
						))}
						<Link href={`./projects${props.path}`}>
							<button className='border-[#EE9207] p-4 border-2 mt-10 text-[#EE9207]'>
								READ MORE
							</button>
						</Link>
					</div>
				</div>
			</div></SlideIn>
		</>
	)
}

export const FrontPageProjects = (props) => {
	const contentRows = (props.projectList || []).slice(0, 3).map((r, i) => {
		return i % 2 === 0 ? (
			<Project key={i} {...r} />
		) : (
			<ProjectFlipped key={i} {...r} />
		)
	})
	return <div>{contentRows}</div>
}
