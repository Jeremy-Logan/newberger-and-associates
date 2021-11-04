import { useEffect } from 'react'
import projectList from '../../data/projectList.json'
import { useInView } from 'react-intersection-observer'
import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring,
	useAnimation,
} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import ReactPlayer from 'react-player/youtube'

export async function getStaticPaths() {
	const paths = projectList.projectList.map((project) => {
		const slug = project.path.split('/').slice(1)
		return { params: { slug } }
	})
	return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const currentPath = `/${params.slug.join('/')}`
	const project = projectList.projectList.find(
		(project) => project.path === currentPath
	) || {
		notfound: true,
	}
	return { props: { project } }
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
			transition={{ type: 'spring', duration: 1, delay: 0.3 }}
			variants={{
				visible: { opacity: 1, x: 0, y: 0 },
				hidden: { opacity: 0, x: originX, y: originY },
			}}>
			{children}
		</motion.div>
	)
}

function Project({ project }) {
	return (
		<div>
			<Head>
				<title>Newberger & Associates | {project.title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<motion.div
					initial={{ opacity: 0.2 }}
					animate={{ opacity: 1 }}
					className='relative h-[40vh] md:h-[60vh] z-0 bg-[#322121]'>
					<Image
						src={project.heroImage}
						layout='fill'
						objectFit='cover'
						className='opacity-50'
						placeholder='blur'
						blurDataURL={
							'https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/' +
							project.heroImage
						}
					/>

					<div className='absolute md:pt-24 pt-12 pl-[10vw] w-[70vw] z-10 text-white'>
						<motion.h1
							initial={{ opacity: 0.2, translateY: -300 }}
							animate={{ opacity: 1, translateY: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className='font-serif lg:text-4xl text-2xl font-bold mb-8'>
							<Link href='/'>Newberger & Associates</Link>
						</motion.h1>

						<motion.h2
							initial={{ opacity: 0.2, translateX: -300 }}
							animate={{ opacity: 1, translateX: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className='font-sans 2xl:text-7xl xl:text-5xl lg:text-4xl text-2xl md:ml-8 lg:w-6/12'>
							<h2 className='md:leading-relaxed font-semibold'>
								{project.title}
							</h2>
						</motion.h2>
					</div>
					<motion.div
						initial={{ opacity: 0.2, translateX: 300 }}
						animate={{ opacity: 1, translateX: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className='absolute hidden md:block left-[5vw] right-[5vw] md:left-[50vw] top-[400px] md:h-[50vh] md:w-[40vw] md:top-60 xl:h-[60vh]'>
						<Image
							src={project.portfolioImages[5].image}
							layout='fill'
							objectFit='cover'
							placeholder='blur'
							blurDataURL={
								'https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/' +
								project.portfolioImages[5].image
							}
						/>
					</motion.div>
				</motion.div>
				<div className='md:h-96 h-16'></div>
				<div className='md:h-auto mx-4 md:mx-[25vw] font-bold '>
					<h3 className='text-2xl font-bold text-yellow-600 font-serif'>
						{project.headline}
					</h3>
					<p className='font-normal text-sm md:text-lg md:font-semibold leading-loose mt-6 whitespace-pre-line' >
						{project.description}
					</p>
				</div>
				<div className='grid md:grid-cols-2 grid-rows-8 mt-24 mb-24'>
					<SlideIn originX={-200}>
						
							<div className=' h-[60vh] relative md:row-span-2 '>
								<Image
									src={project.portfolioImages[0].image}
									layout='fill'
									objectFit='cover'
									objectPosition= {project.portfolioImages[0].position}
									placeholder='blur'
									blurDataURL={
										'https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/' +
										project.portfolioImages[0].image
									}
								/>
							</div>
						
					</SlideIn>
					<SlideIn originX={200}>
					
						<div className=' h-[60vh] relative md:row-span-2 md:mt-[30vh] '>{project.video ? (
							<ReactPlayer
								url={project.video}
								playing='true'
								loop='true'
								controls='false'
								volume={0}
								height='60vh'
								width=''
							/>
						) : (
							<Image
								src={project.portfolioImages[1].image}
								layout='fill'
								objectFit='cover'
								objectPosition= {project.portfolioImages[1].position}
								placeholder='blur'
								blurDataURL={
									'https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/' +
									project.portfolioImages[1].image
								}
							/>)}
						</div>
					</SlideIn>
					<SlideIn originX={-200}>
						<div className='overflow-hidden h-[60vh] relative md:row-span-2 md:mt-[-30vh]'>
							<Image
								src={project.portfolioImages[2].image}
								layout='fill'
								objectFit='cover'
								objectPosition= {project.portfolioImages[2].position}
								placeholder='blur'
								blurDataURL={
									'https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/' +
									project.portfolioImages[2].image
								}
							/>
						</div>
					</SlideIn>
					<SlideIn originX={200}>
						<div className=' h-[60vh] relative md:row-span-2 md:row-start-5'>
							<Image
								src={project.portfolioImages[3].image}
								layout='fill'
								objectFit='cover'
								objectPosition= {project.portfolioImages[3].position}
								placeholder='blur'
								blurDataURL={
									'https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/' +
									project.portfolioImages[3].image
								}
							/>
						</div>
					</SlideIn>
					<SlideIn originX={-200}>
						<div className='overflow-hidden h-[60vh] relative md:row-span-2 md:mt-[-30vh]'>
							<Image
								src={project.portfolioImages[4].image}
								layout='fill'
								objectFit='cover'
								objectPosition= {project.portfolioImages[4].position}
								placeholder='blur'
								blurDataURL={
									'https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/' +
									project.portfolioImages[4].image
								}
							/>
						</div>
					</SlideIn>
					<SlideIn originX={200}>
						<div className=' h-[60vh] relative md:row-span-2 md:row-start-5'>
							<Image
								src={project.portfolioImages[5].image}
								layout='fill'
								objectFit='cover'
								objectPosition= {project.portfolioImages[5].position}
								placeholder='blur'
								blurDataURL={
									'https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/' +
									project.portfolioImages[5].image
								}
							/>
						</div>
					</SlideIn>
				</div>
			</main>
		</div>
	)
}

export default Project
