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

const DrawLine = ({ children }) => {
	const controls = useAnimation()
	const [ref, inView] = useInView()

	useEffect(() => {
		inView ? controls.start('visible') : null
	}, [controls, inView])

	return (
		<motion.div ref={ref} animate={controls} initial='hidden'>
			<div className='z-50'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1024 140'
					className='hidden md:block z-0'>
					<motion.path
						d='M1025,4.19H217.69A5.82,5.82,0,0,0,211.87,10V123a5.83,5.83,0,0,1-5.83,5.83H1'
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
						d='M1024,11.19H224.69A5.82,5.82,0,0,0,218.87,17V130a5.83,5.83,0,0,1-5.83,5.83H0'
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

const DrawLineFlipped = ({ children }) => {
	const controls = useAnimation()
	const [ref, inView] = useInView()

	useEffect(() => {
		inView ? controls.start('visible') : null
	}, [controls, inView])

	return (
		<motion.div ref={ref} animate={controls} initial='hidden'>
			<div className='z-50'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1024 140'
					className='hidden md:block z-0 '>
					<motion.path
						d="M0,4.19H807.31A5.82,5.82,0,0,1,813.13,10V123a5.83,5.83,0,0,0,5.83,5.83h205"
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
						d='M1,11.19H800.31A5.82,5.82,0,0,1,806.13,17V130a5.83,5.83,0,0,0,5.83,5.83h213'
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
		<div className='overflow-hidden relative my-24 md:my-0'>
			<SlideIn originX={-100} originY={0} delay={0}>
				<div className='relative w-screen h-96 md:w-[60vw] md:h-[60vh] cursor-pointer z-10'>
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
			

			<div className='absolute top-0 left-0 md:top-52 md:left-[55vw] z-30'>
				<Link href={`./projects${props.path}`} passHref>
					<h2 className=' bg-[#EE9207] text-white text-6xl font-serif font-bold pb-4 pt-3 px-6 cursor-pointer'>
						{props.title}
					</h2>
				</Link>
			</div>

			<SlideIn originX={0} originY={200} delay={0}>
				<div className='grid grid-cols-4 grid-flow-row w-screen '>
					<div className='flex justify-left ml-6 md:ml-0 md:justify-end md:pr-36 py-16 md:py-24 col-span-2 row-span-1 '>
						<div className='text-left'>
							<h3 className='text-md font-semibold tracking-wider mb-4'>
								{props.category}
							</h3>
							{props.features.map((feature, i) => (
								<h4
									className='text-lg md:text-2xl leading-relaxed'
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
					<div className='relative h-96 md:h-[70vh] row-span-2 col-span-2 cursor-pointer'>
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
					<div className='relative h-96 md:h-[70vh] mb-12 w-screen md:w-full col-span-2 cursor-pointer row-start-2'>
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
			<DrawLine/>
		</div>
	)
}

const ProjectFlipped = (props) => {
	return (
		<>
			<div className='relative flex overflow-hidden'>
				<div className='w-1/2'></div>
				<div className='absolute top-0 right-0 md:top-52 md:right-[55vw] z-30'>
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
						<div className='relative w-screen h-96 md:w-[60vw] md:h-[60vh] z-10 cursor-pointer'>
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
						<div className='relative h-96 md:h-[70vh] row-span-2 col-span-2 cursor-pointer'>
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
					<div className='flex justify-center md:justify-start md:pl-36 py-16 md:py-24 col-span-2 row-span-1 z-50'>
						<div className='text-left'>
							<h3 className='text-md font-semibold tracking-wider mb-4 md:text-left text-right'>
								{props.category}
							</h3>
							{props.features.map((feature, i) => (
								<h4
									className='text-lg md:text-2xl text-right md:text-left leading-relaxed'
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
						<div className='relative w-screen h-96 md:w-[50vw] md:h-[60vh] z-10 mb-12 cursor-pointer hidden md:block'>
							<Link href={`./projects${props.path}`} passHref>
								<Image
									src={props.portfolioImages[1]}
								layout='fill'
								objectFit='cover'
								placeholder='blur'
								blurDataURL={
									'https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/' +
									props.portfolioImages[1]
									}
								/>
							</Link>
						</div>
					</SlideIn>
				</div><SlideIn originX={300}>
						<div className='relative h-96 md:h-[60vh] w-screen md:w-full col-span-2 cursor-pointer row-start-2 md:hidden'>
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
					</SlideIn>
			</SlideIn>
			<DrawLineFlipped/>
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
