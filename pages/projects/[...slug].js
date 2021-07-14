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
			{console.log(project.heroImage)}
			<motion.div
				initial={{ opacity: 0.2 }}
				animate={{ opacity: 1 }}
				className='relative h-[60vh] z-0 bg-[#322121]'>
				<Image
					src={project.heroImage}
					layout='fill'
					objectFit='cover'
					className='opacity-70'
				/>

				<div className='absolute pt-24 pl-24 w-[70vw] z-10 text-white'>
					<motion.h1
						initial={{ opacity: 0.2, translateY: -300 }}
						animate={{ opacity: 1, translateY: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className='font-serif text-4xl font-bold mb-8'>
						Newberger & Associates
					</motion.h1>
					<motion.h2
						initial={{ opacity: 0.2, translateX: -300 }}
						animate={{ opacity: 1, translateX: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className='font-serif text-8xl font-bold ml-8'>
						{project.title}
					</motion.h2>
				</div>
				<motion.div
					initial={{ opacity: 0.2, translateX: 300 }}
					animate={{ opacity: 1, translateX: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className='absolute h-[50vh] w-[60vw] top-80 right-0 bg-[]'>
					<Image
						src={project.portfolioImages[0]}
						layout='fill'
						objectFit='cover'
					/>
				</motion.div>
			</motion.div>
			<div className='mx-[20vw] mt-96'>
				<h3 className='text-lg font-bold text-yellow-600'>
					{project.headline}
				</h3>
				<p className='font-serif text-lg font-semibold'>
					{project.description}
				</p>
			</div>
			<SlideIn originY={200}>
				<div className=' h-[60vh] w-[40vw] relative mx-[20vw] my-24'>
					<Image
						src={project.portfolioImages[1]}
						layout='fill'
						objectFit='cover'
					/>
				</div>
			</SlideIn>
			<SlideIn originY={200}>
				<div className=' h-[60vh] w-[40vw] relative mx-[40vw] my-24'>
					<Image
						src={project.portfolioImages[2]}
						layout='fill'
						objectFit='cover'
					/>
				</div>
			</SlideIn>
			<SlideIn originY={200}>
				<div className=' h-[60vh] w-[40vw] relative mx-[20vw] my-24'>
					<Image
						src={project.portfolioImages[3]}
						layout='fill'
						objectFit='cover'
					/>
				</div>
			</SlideIn>
			<SlideIn originY={200}>
				<div className=' h-[60vh] w-[40vw] relative mx-[40vw] my-24'>
					<Image
						src={project.portfolioImages[4]}
						layout='fill'
						objectFit='cover'
					/>
				</div>
			</SlideIn>
		</div>
	)
}

export default Project
