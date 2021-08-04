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
			<motion.div
				initial={{ opacity: 0.2 }}
				animate={{ opacity: 1 }}
				className='relative h-[60vh] z-0 bg-[#0b0b13]'>
				<Image
					src={project.heroImage}
					layout='fill'
					objectFit='cover'
					className='opacity-50'
				/>

				<div className='absolute pt-48 pl-[10vw] w-[70vw] z-10 text-white cursor-pointer'>
					<Link href='/'>
						<motion.h1
							initial={{ opacity: 0.2, translateY: -300 }}
							animate={{ opacity: 1, translateY: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className='font-serif text-4xl font-bold mb-8'>
							Newberger & Associates
						</motion.h1>
					</Link>
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
					className='absolute h-[50vh] w-[60vw] top-80 right-0 '>
					<Image
						src={project.portfolioImages[0]}
						layout='fill'
						objectFit='cover'
					/>
				</motion.div>
			</motion.div>
			<div className='mx-[20vw] mt-64'>
				<h3 className='text-lg font-bold text-yellow-600'>
					{project.headline}
				</h3>
				<p className='font-serif text-lg font-semibold leading-loose mt-6'>
					{project.description}
				</p>
			</div>
			<div className='grid grid-cols-2 grid-rows-8 mt-24'>
				<SlideIn originX={-200}>
					<div className=' h-[60vh] relative row-span-2 '>
						<Image
							src={project.portfolioImages[1]}
							layout='fill'
							objectFit='cover'
							placeholder='blur'
							blurDataURL={
								't_placeholder' + project.portfolioImages[1]
							}
						/>
					</div>
				</SlideIn>
				<SlideIn originX={200}>
					<div className=' h-[60vh] relative row-span-2 mt-[30vh]'>
						<Image
							src={project.portfolioImages[2]}
							layout='fill'
							objectFit='cover'
							placeholder='blur'
							blurDataURL={
								't_placeholder' + project.portfolioImages[2]
							}
						/>
					</div>
				</SlideIn>
				<SlideIn originX={-200}>
					<div className=' h-[60vh] relative row-span-2 mt-[-30vh]'>
						<Image
							src={project.portfolioImages[3]}
							layout='fill'
							objectFit='cover'
							placeholder='blur'
							blurDataURL={
								't_placeholder' + project.portfolioImages[3]
							}
						/>
					</div>
				</SlideIn>
				<SlideIn originX={200}>
					<div className=' h-[60vh] relative row-span-2 row-start-5'>
						<Image
							src={project.portfolioImages[4]}
							layout='fill'
							objectFit='cover'
							placeholder='blur'
							blurDataURL={
								't_placeholder' + project.portfolioImages[4]
							}
						/>
					</div>
				</SlideIn>
			</div>
		</div>
	)
}

export default Project
