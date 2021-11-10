import { ProjectsPageProjects } from '@components/ProjectsPageProjects'
import projectList from '../data/projectList.json'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
	return (
		<>
			<Head>
				<title>Newberger & Associates | Projects</title>
				<meta property="og:title" content='Newberger & Associates | Projects' key="title" />
				<link rel='icon' href='/favicon.ico' />
				<meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<main lang="en">
				<motion.div
					initial={{ opacity: 0.2 }}
					animate={{ opacity: 1 }}
					className='relative h-[40vh] md:h-[60vh] z-0 bg-[#322121]'>
					<Image
						src='v1628109814/Newberger%20and%20Associates/schuh-02_oybmuz.jpg'
						layout='fill'
						objectFit='cover'
						className='opacity-50'
						placeholder='blur'
						blurDataURL='https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/v1620327405/Newberger%20and%20Associates/schuh-02_oybmuz.jpg'
					/>

					<div className='absolute md:pt-24 pt-12 pl-[10vw] w-[70vw] z-10 text-white'>
						<motion.h1
							initial={{ opacity: 0.2, translateY: -300 }}
							animate={{ opacity: 1, translateY: 0 }}
							className='font-serif lg:text-4xl text-2xl font-bold mb-8'>
							<Link href='/'>Newberger & Associates</Link>
						</motion.h1>
						<motion.h2
							initial={{ opacity: 0.2, translateX: -300 }}
							animate={{ opacity: 1, translateX: 0 }}
							className='font-sans 2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl md:ml-8 lg:w-6/12'>
								<h2 className='md:leading-relaxed font-semibold'>
							Featured Projects</h2>
						</motion.h2>
					</div>
					<motion.div
						initial={{ opacity: 0.2, translateX: 300 }}
						animate={{ opacity: 1, translateX: 0 }}
						transition={{ duration: 0.5 }}
						className='absolute hidden md:block left-[5vw] right-[5vw] md:left-[50vw] top-[400px] md:h-[50vh] md:w-[40vw] md:top-60 xl:h-[60vh]'>
						<Image
							src='v1628109812/Newberger%20and%20Associates/schuh-06_ktz6vd.jpg'
							layout='fill'
							objectFit='cover'
							placeholder='blur'
							blurDataURL='https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/v1620326973/Newberger%20and%20Associates/schuh-06_ktz6vd.jpg'
						/>
					</motion.div>
				</motion.div>
				<div className='md:h-96 h-16'></div>
				<div className='md:h-96 mx-12 md:mx-[25vw] font-bold font-serif '>
					<h3 className='text-gray-500 text-4xl mb-8'>
						Newberger & Associates
					</h3>
					<h4 className='text-xl text-[#414141] leading-relaxed tracking-wide font-sans font-normal mb-12'>
						Our philosophy is founded on the relationship between
						the structure and the land it occupies. We focus on the
						unique elements of the environment while also
						considering the sustainable nature of the building
						itself. Our expertise is perfectly suited to guiding you
						through this process and finding the most natural fit
						for your needs.
					</h4>
				</div>
				<ProjectsPageProjects {...projectList} />
			</main>
		</>
	)
}
