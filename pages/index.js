import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FrontPageProjects } from '@components/FrontPageProjects'
import projectList from '../data/projectList.json'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Newberger & Associates</title>
				<meta property="og:title" content='Newberger & Associates' key="title" />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main lang="en">
				<motion.div
					initial={{ opacity: 0.2 }}
					animate={{ opacity: 1 }}
					className='relative h-[40vh] md:h-[60vh] z-0 bg-[#322121]'>
					<Image
						src='v1620327405/Newberger%20and%20Associates/brotherton-06_ivbdxi.jpg'
						blurDataURL='https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/v1620327405/Newberger%20and%20Associates/brotherton-06_ivbdxi.jpg'
						layout='fill'
						objectFit='cover'
						className='opacity-50'
						placeholder='blur'
						alt='hero-image'
					/>

					<div className='absolute pt-2 md:pt-24 pl-[10vw] w-[80vw] z-10 text-white'>
						<motion.h1
							initial={{ opacity: 0.2, translateY: -300 }}
							animate={{ opacity: 1, translateY: 0 }}
							className='font-serif lg:text-4xl text-2xl font-bold mb-8'>
							Newberger & Associates
						</motion.h1>
						<motion.div
							initial={{ opacity: 0.2, translateX: -300 }}
							animate={{ opacity: 1, translateX: 0 }}
							className='font-sans 2xl:text-5xl xl:text-4xl lg:text-4xl text-2xl md:ml-8 lg:w-6/12'>
							<h2 className='md:leading-relaxed font-semibold'>Exploring new directions. <br/> Grounded in tradition.</h2>
						</motion.div>
					</div>
					<div >
					<motion.div
						initial={{ opacity: 0.2, translateX: 300 }}
						animate={{ opacity: 1, translateX: 0 }}
						transition={{ duration: 0.5 }}
						className='absolute hidden md:block left-[5vw] right-[5vw] top-[400px] md:top-60 md:left-[50vw]   '>
						<div className='relative md:h-[50vh] md:w-[40vw]  2xl:h-[60vh]'>
						<Image
							src='v1620326973/Newberger%20and%20Associates/braverman-01_g5m0zc.jpg'
							layout='fill'
							objectFit='cover'
							placeholder='blur'
							blurDataURL='https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/v1620326973/Newberger%20and%20Associates/braverman-01_g5m0zc.jpg'
							alt='featured-image'
						/></div>
					</motion.div></div>
				</motion.div>
				<div className='md:h-60 h-12'></div>
				<div className='md:h-96 mx-12 md:mx-[25vw] font-bold font-serif'>
					<h3 className='text-gray-500 text-4xl mb-4 md:mb-8'>
						Newberger & Associates
					</h3>
					<h3 className='text-xl md:text-3xl text-[#414141] leading-relaxed font-sans font-normal md:mb-6 tracking-wider'>
						INNOVATIVE, SUSTAINABLE DESIGN{' '}
					</h3>{' '}
					<h3 className='text-sm md:text-xl text-[#414141] leading-relaxed tracking-wide font-sans font-normal mb-12'>
						We are committed to design solutions that elevate the
						human experience while celebrating the natural
						environment.
					</h3>
				</div>
				<FrontPageProjects {...projectList} />
			</main>
		</div>
	)
}
