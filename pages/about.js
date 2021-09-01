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
							className='absolute h-[70vh] w-[40vw] top-40 right-48 '>
							<Image
								src='v1620326973/Newberger%20and%20Associates/braverman-01_g5m0zc.jpg'
								layout='fill'
								objectFit='cover'
							/>
						</motion.div>
					</motion.div>
					<div className='h-96'></div>
					<div className='h-auto mx-[15vw] mb-48 font-bold font-serif'>
						<h3 className='text-gray-500 text-5xl mb-16'>
							Welcome to Newberger & Associates
						</h3>
						<p className='ml-12 mb-36 text-2xl text-[#414141] leading-relaxed font-sans font-normal'>
							Led by founder Todd Newberger, we are a design
							studio committed to innovative, sustainable
							architecture that elevates the human experience
							while celebrating the natural environment. Our
							integrated philosophy is founded on the relationship
							between the structure and the land it occupies,
							utilizing the unique characteristics offered by the
							site.
							<br />
							<br />
							Our 20+ years of coastal planning experience puts us
							in the unique position of knowing not only how to
							design for your coastal space, but also how to
							navigate the unique challenges coastal building can
							present. Our expertise is perfectly suited to
							guiding you through the process of assembling a
							skilled team of professionals and delivering a
							successful project within budget and schedule.
						</p>
						<div className='flex flex-col md:flex-row'>
							<div className='relative w-screen md:w-1/3  '>
								<Image
									src='c_crop,g_south_west,h_1800,w_1200/v1626282323/Newberger%20and%20Associates/Todd-photo-by-the-ocean_vrluo7.jpg'
									layout='fill'
									objectFit='contain'
									placeholder='blur'
							blurDataURL='t_placeholder/c_crop,g_south_west,h_1800,w_1200/v1626282323/Newberger%20and%20Associates/Todd-photo-by-the-ocean_vrluo7.jpg'
								/>
							</div>
							<div className=' ml-12 w-screen md:w-2/3'>
								<h3 className='text-4xl mb-8'>
									Todd Newberger
								</h3>
								<p className=' text-xl text-[#414141] leading-relaxed font-sans font-normal '>
									Todd is principal architect, landscape
									designer, project manager and
									spearfisherman. Receiving his Bachelor’s
									degree from University of California at
									Berkeley, he became a licensed architect in
									2007 after spending many years in the
									industry. His visionary perspective has
									earned him opportunities to design projects
									with wide ranging functions. From modern
									ocean view homes to intimate cottages, from
									artfully designed tasting rooms to
									large-scale medical facilities: all of
									Todd's projects are as beautiful as they are
									functional. <br /> <br />
									He escapes it all by retreating to his
									vegetable garden by the sea, puttering and
									planning. Todd's love of the outdoors also
									calls him to the ocean. Here he can be found
									freediving in the cold Pacific waters,
									usually to catch his dinner.
									<br /> <br /> Todd's deep passion for
									architecture joins with his love of nature
									to create wonderful, livable places and
									spaces for every project he tackles. <br />
									<br /> Todd is accredited by the California
									Architects Board and holds a California
									Landscape Contractors License. His previous
									experience as a Certified Energy Analyst and
									a Leadership in Energy and Environmental
									Design Accredited Professional serve as a
									foundation for his sustainable ethic. His
									work has been featured on Home and Garden
									Television (HGTV) and he has designed large
									complex medical complexes for organizations
									including UC Davis, Sutter Health and Kaiser
									Permanente.
								</p>
							</div>
						</div>
						<div className='grid grid-flow-col mt-24'>
						<div className='relative h-96'>
								<Image
									src='c_crop,g_south_west,h_1800,w_1200/v1630520323/Newberger%20and%20Associates/Skiing_xydhi9.jpg'
									layout='fill'
									objectFit='contain'
									placeholder='blur'
							blurDataURL='t_placeholder/c_crop,g_south_west,h_1800,w_1200/v1630520323/Newberger%20and%20Associates/Skiing_xydhi9.jpg'
								/></div>
								<div className='relative h-96'>
								<Image
									src='c_crop,g_south_west,h_1800,w_1200/v1630520323/Newberger%20and%20Associates/Todd-Planting_as6c73.png'
									layout='fill'
									objectFit='contain'
									placeholder='blur'
							blurDataURL='t_placeholder/c_crop,g_south_west,h_1800,w_1200/v1630520323/Newberger%20and%20Associates/Todd-Planting_as6c73.png'
								/></div>
								<div className='relative h-96'>
								<Image
									src='v1630520323/Newberger%20and%20Associates/Spearfishing_bmhnvb.jpg'
									layout='fill'
									objectFit='contain'
									placeholder='blur'
							blurDataURL='v1630520323/Newberger%20and%20Associates/Spearfishing_bmhnvb.jpg'
								/></div>
								<div className='relative h-96'>
								<Image
									src='c_crop,g_south_west,h_1800,w_1200/v1630520323/Newberger%20and%20Associates/Adoption_Day_dbizvz.jpg'
									layout='fill'
									objectFit='contain'
									placeholder='blur'
							blurDataURL='t_placeholder/c_crop,g_south_west,h_1800,w_1200/v1630520323/Newberger%20and%20Associates/Adoption_Day_dbizvz.jpg'
								/></div>
						</div>
					</div>
					<div></div>
				</main>
			</div>{' '}
		</>
	)
}
