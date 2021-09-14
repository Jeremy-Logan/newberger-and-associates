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

const SlideIn = ({ children, originX, originY, delay }) => {
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
			transition={{ type: 'spring', duration: 0.75, delay: delay }}
			variants={{
				visible: { opacity: 1, x: 0, y: 0 },
				hidden: { opacity: 0, x: originX, y: originY },
			}}>
			{children}
		</motion.div>
	)
}

const DrawIn = ({ children }) => {
	const controls = useAnimation()
	const [ref, inView] = useInView()

	useEffect(() => {
		inView ? controls.start('visible') : null
	}, [controls, inView])

	return (
		<motion.div ref={ref} animate={controls} initial='hidden'>
			<div className='z-0'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1024 580'
					className='absolute xl:top-[-15%] lg:top-[5%] md:top-[10%] sm:top-[15%] top-[20%] left-0 z-0'>
					<motion.path
						d='M1024.39,275.33H186.27a2.94,2.94,0,0,0-2.94,2.94V546.56a2.93,2.93,0,0,1-2.94,2.93h-246'
						fill='none'
						stroke='#6676aa'
						strokeWidth='1'
						strokeDasharray='1.5, 3'
						transition={{
							type: 'spring',
							duration: 2.5,
							delay: 0.8,
						}}
						variants={{
							visible: { pathLength: 1 },
							hidden: { pathLength: 0 },
						}}
					/>

					<motion.path
						d='M1024,281.67H192.21a2.94,2.94,0,0,0-2.94,2.94V552.89a2.94,2.94,0,0,1-2.94,2.94H0'
						fill='none'
						stroke='#6676aa'
						strokeWidth='2'
						transition={{
							type: 'spring',
							duration: 2.5,
							delay: 0.8,
						}}
						variants={{
							visible: { pathLength: 1 },
							hidden: { pathLength: 0 },
						}}
					/>
				</svg>
			</div>
		</motion.div>
	)
}

const Project = (props) => {
	const { scrollYProgress } = useViewportScroll()
	const yRange = useTransform(scrollYProgress, [0, 1], [0, 1])
	const pathLength = useSpring(
		useTransform(scrollYProgress, [0.2, 0.25], [0, 1]),
		{ stiffness: 400, damping: 100 }
	)

	return (
		<div className='overflow-hidden relative'>
			<SlideIn originX={-100} originY={0} delay={0}>
				<div className='relative w-[60vw] h-[60vh] cursor-pointer z-10'>
					<Link href={`./projects${props.path}`} passHref>
						<Image
							src={props.heroImage}
							layout='fill'
							objectFit='cover'
							placeholder='blur'
							blurDataURL={
								'https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/' +
								props.heroImage
							}
						/>
					</Link>
				</div>
			</SlideIn>
			<div className='z-0'>
				<DrawIn />
			</div>

			<div className='relative flex z-40'>
				<Link href={`./projects${props.path}`} passHref>
					<h2 className='z-40 absolute bottom-52 left-[55vw] bg-[#EE9207] text-white text-6xl font-serif font-bold pb-4 pt-3 px-6 cursor-pointer'>
						{props.title}
					</h2>
				</Link>
			</div>

			<SlideIn originX={0} originY={200} delay={0}>
				<div className='grid grid-cols-4 grid-flow-row w-screen '>
					<div className='flex justify-end pr-36 py-24 col-span-2 row-span-1 '>
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
								<button className='border-[#EE9207] p-4 border-2 mt-10 text-[#EE9207] z-40'>
									READ MORE
								</button>
							</Link>
						</div>
					</div>
					<div className='relative h-[70vh] row-span-2 col-span-2 cursor-pointer'>
						<Link href={`./projects${props.path}`} passHref>
							<Image
								src={props.portfolioImages[0]}
								layout='fill'
								objectFit='cover'
								placeholder='blur'
								blurDataURL={
									'https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/' +
									props.portfolioImages[0]
								}
							/>
						</Link>
					</div>

					<div className='relative h-[70vh] mb-36 col-span-2 cursor-pointer row-start-2'>
						<Link href={`./projects${props.path}`} passHref>
							<Image
								src={props.portfolioImages[2]}
								layout='fill'
								objectFit='cover'
								placeholder='blur'
								blurDataURL={
									'https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/' +
									props.portfolioImages[2]
								}
							/>
						</Link>
					</div>
				</div>
			</SlideIn>
		</div>
	)
}

const ProjectFlipped = (props) => {
	return (
		<>
			<div className='relative flex overflow-hidden'>
				<div className='w-1/2'></div>
				<div className='absolute bottom-52 right-[55vw] z-30'>
					<SlideIn originX={-200}>
						<Link href={`./projects${props.path}`} passHref>
							<h2 className=' bg-[#EE9207] text-white text-6xl font-serif font-bold pb-4 pt-3 px-6 cursor-pointer'>
								{props.title}
							</h2>
						</Link>
					</SlideIn>
				</div>
				<SlideIn originX={300}>
					<Link href={`./projects${props.path}`} passHref>
						<div className='relative w-[60vw] h-[60vh] z-10 cursor-pointer'>
							<Image
								src={props.heroImage}
								layout='fill'
								objectFit='cover'
								placeholder='blur'
								blurDataURL={
									'https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/' +
									props.heroImage
								}
							/>
						</div>
					</Link>
				</SlideIn>
			</div>
			<SlideIn originY={200}>
				<div className='grid grid-cols-4 grid-flow-row w-screen z-40'>
					<Link href={`./projects${props.path}`} passHref>
						<div className='relative h-[70vh] row-span-2 col-span-2 cursor-pointer'>
							<Image
								src={props.portfolioImages[0]}
								layout='fill'
								objectFit='cover'
								placeholder='blur'
								blurDataURL={
									'https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/' +
									props.portfolioImages[0]
								}
							/>
						</div>
					</Link>
					<div className='flex justify-start pl-36 py-24 col-span-2 row-span-1 z-50'>
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
					<SlideIn originX={300}>
						<div className='relative w-[60vw] h-[60vh] z-10 mb-36 cursor-pointer'><Link href={`./projects${props.path}`} passHref>
							<Image
								src={props.heroImage}
								layout='fill'
								objectFit='cover'
								placeholder='blur'
								blurDataURL={
									'https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/' +
									props.heroImage
								}
							/></Link>
						</div>
					</SlideIn>
				</div>
			</SlideIn>
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
