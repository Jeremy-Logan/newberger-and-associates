import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
	return (
		<>
			<div className='min-h-screen'>
				<Head>
					<title>Newberger & Associates | About Us</title>
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
								className='font-serif text-8xl font-bold ml-8'>
								About Us
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
					<div className='h-auto mx-[25vw] mb-24 font-bold font-serif'>
						<h3 className='text-gray-500 text-5xl mb-8'>
							Welcome to Newberger & Associates
						</h3>
						<p className=' text-2xl text-[#414141] leading-relaxed font-sans font-normal'>
							Led by founder Todd Newberger, we are a design
							studio committed to innovative, sustainable
							architecture that elevates the human experience
							while celebrating the natural environment. <br />
							<br />
							Our integrated philosophy is founded on the
							relationship between the structure and the land it
							occupies, utilizing the unique characteristics
							offered by the site.
							<br />
							<br />
							Our 20+ years of coastal planning experience has put
							us in the unique position of knowing not only how to
							design for your coastal space, but also how to
							navigate the unique challenges coastal building can
							present. Our expertise is perfectly suited to
							guiding you through the process of negotiating
							permits, bluff erosion control, coastal garden
							planning.
						</p>
					</div>
					<div>
					
					</div>
				</main>
			</div>{' '}
		</>
	)
}
