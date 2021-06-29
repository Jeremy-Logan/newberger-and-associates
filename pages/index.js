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
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<motion.div
					initial={{ opacity: 0.2 }}
					animate={{ opacity: 1 }}
					className='relative h-[60vh] z-0 bg-[#322121]'>
					<Image
						src='v1620327405/Newberger%20and%20Associates/brotherton-06_ivbdxi.jpg'
						layout='fill'
						objectFit='cover'
						className='opacity-70'
					/>

					<div className='absolute pt-24 pl-24 w-[70vw] z-10 text-white'>
						<motion.h1
							initial={{ opacity: 0.2, translateY: -300 }}
							animate={{ opacity: 1, translateY: 0 }}
							className='font-serif text-4xl font-bold mb-8'>
							Newberger & Associates
						</motion.h1>
						<motion.h2
							initial={{ opacity: 0.2, translateX: -300 }}
							animate={{ opacity: 1, translateX: 0 }}
							className='font-serif text-8xl font-bold ml-8 w-3/4'>
							Exploring new directions. Grounded in tradition.
						</motion.h2>
					</div>
					<motion.div
						initial={{ opacity: 0.2, translateX: 300 }}
						animate={{ opacity: 1, translateX: 0 }}
						transition={{ duration: 0.5 }}
						className='absolute h-[70vh] w-[40vw] top-40 right-48 bg-[]'>
						<Image
							src='v1620326973/Newberger%20and%20Associates/braverman-01_g5m0zc.jpg'
							layout='fill'
							objectFit='cover'
						/>
					</motion.div>
				</motion.div>
				<div className='h-96'></div>
				<div className='h-96 mx-[25vw] font-bold font-serif'>
					<h3 className='text-gray-500 text-5xl mb-16'>
						Newberger & Associates
					</h3>
					<h3 className=' text-2xl text-[#414141] leading-relaxed font-sans font-normal mb-6'>
						Innovative, Sustainable Design:{' '}
					</h3>{' '}
					<h3 className=' text-xl text-[#414141] leading-relaxed font-sans font-normal'>
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
