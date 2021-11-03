import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

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
						className='relative h-[40vh] md:h-[60vh] z-0 bg-[#322121]'>
						<Image
							src='v1620327405/Newberger%20and%20Associates/brotherton-06_ivbdxi.jpg'
							layout='fill'
							objectFit='cover'
							className='opacity-70'
							placeholder='blur'
							blurDataURL='t_placeholder/v1620327405/Newberger%20and%20Associates/brotherton-06_ivbdxi.jpg'
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
								className='font-sans 2xl:text-7xl xl:text-5xl lg:text-4xl text-2xl md:ml-8 lg:w-6/12'>
								<h2 className='md:leading-relaxed font-semibold'>
									About Us
								</h2>
							</motion.h2>
						</div>
						<motion.div
							initial={{ opacity: 0.2, translateX: 300 }}
							animate={{ opacity: 1, translateX: 0 }}
							transition={{ duration: 0.5 }}
							className='absolute hidden md:block left-[5vw] right-[5vw] md:left-[50vw] top-[400px] md:h-[50vh] md:w-[40vw] md:top-60 xl:h-[60vh] '>
							<Image
								src='v1620326973/Newberger%20and%20Associates/braverman-01_g5m0zc.jpg'
								layout='fill'
								objectFit='cover'
								placeholder='blur'
								blurDataURL='t_placeholder/v1620326973/Newberger%20and%20Associates/braverman-01_g5m0zc.jpg'
							/>
						</motion.div>
					</motion.div>
					<div className='h-24 md:h-96'></div>
					<div className='h-auto px-6 md:mx-[15vw] mb-10 md:mb-48 font-bold font-serif'>
						<h3 className='text-gray-500 text-3xl md:text-5xl mb-16'>
							Welcome to Newberger & Associates
						</h3>
						<p className='md:ml-12 mb-8 md:mb-36 text-sm md:text-2xl text-[#414141] leading-relaxed font-sans font-normal'>
							Led by Todd Newberger, we are a design studio
							committed to innovative, sustainable architecture
							that elevates the human experience while celebrating
							the natural environment. Our holistic philosophy is
							founded on the relationship between the structure
							and the land it occupies, utilizing the unique
							characteristics offered by the site.
							<br />
							<br />
							Newberger & Associates builds on the legacy of
							Leventhal Schlosser Architects, founded in 1982 by
							Michael Leventhal and Robert Schlosser. Todd joined
							Leventhal Schlosser Newberger Architects as a
							partner in 2007. Leventhal retired in 2009 and in
							2020, Todd took full ownership.It is this long
							history of commitment to excellence that brings us
							to where we are today.
							<br />
							<br />
							Our twenty-plus years of coastal planning experience
							puts us in the unique position of knowing not only
							how to design for your coastal space, but also how
							to navigate the unique challenges coastal building
							can present. Our expertise is perfectly suited to
							guide you through the process of assembling a
							skilled team of professionals and delivering a
							successful project within budget and schedule.
						</p>
					</div>
					<div className='w-screen flex flex-col md:flex-row justify-items-center md:mx-12'>
						<div
							className='relative md:w-3/12 h-[45vh] md:h-[600px] md:mt-20 mb-10'
							style={{ float: 'left' }}>
							<Image
								src='c_crop,g_south_west,h_1800,w_1200/v1635897518/Newberger%20and%20Associates/Todds-first-day_yydhpu.jpg'
								layout='fill'
								objectFit='contain'
								placeholder='blur'
								blurDataURL='t_placeholder/c_crop,g_south_west,h_1800,w_1200/v1635897518/Newberger%20and%20Associates/Todds-first-day_yydhpu.jpg'
							/>
						</div>
						<div className='w-screen md:w-7/12 md:mx-0 px-6'>
							<h3 className='md:text-4xl text-xl md:mb-8 mb-4 font-serif font-bold text-gray-500'>
								Todd Newberger
							</h3>
							<p className='md:ml-12 mb-0 md:mb-36 text-sm lg:text-2xl text-[#414141] leading-relaxed font-sans font-normal'>
								Todd is principal architect, landscape designer,
								project manager and spearfisherman. He received
								his Bachelor’s degree from University of
								California at Berkeley and became a licensed
								architect in 2007 after spending sixteen years
								working in the industry. His visionary
								perspective earned him opportunities to design
								projects with wide ranging functions. From
								modern ocean view homes to intimate cottages,
								from artfully designed tasting rooms to
								large-scale medical facilities: all of Todd's
								projects are as beautiful as they are
								functional.
								<br /> <br /> He enjoys spending long hours in
								his vegetable garden by the sea, puttering and
								planning. Todd's love of the outdoors also calls
								him to the ocean where he can be found
								freediving in the cold Pacific waters, usually
								to catch his dinner. Todd's deep passion for
								architecture joins with his love of nature,
								compelling him to create wonderful, livable
								places and spaces. <br />
								<br /> Todd is accredited by the California
								Architects Board and holds a California
								Landscape Contractors License. His previous
								experience as a Certified Energy Analyst and a
								Leadership in Energy and Environmental Design
								(LEED) Accredited Professional serve as a
								foundation for his sustainable ethic. Todd has
								managed many large complex projects and applies
								his expertise, organization and rigor to every
								project.
							</p>
						</div>
					</div>
					<div className='grid xl:grid-cols-4 grid-cols-2 mt-8 md:mt-24 gap-4 md:mx-24 2xl:mx-48'>
						<div className='relative h-[30vh] md:h-[50vh] xl:h-[40vh] 2xl:h-[50vh] w-full '>
							<Image
								src='c_crop,g_south_west,h_1800,w_1200/v1630520323/Newberger%20and%20Associates/Skiing_xydhi9.jpg'
								layout='fill'
								objectFit='cover'
								placeholder='blur'
								blurDataURL='t_placeholder/c_crop,g_south_west,h_1800,w_1200/v1630520323/Newberger%20and%20Associates/Skiing_xydhi9.jpg'
							/>
						</div>
						<div className='relative h-[30vh] md:h-[50vh] xl:h-[40vh] 2xl:h-[50vh] w-full'>
							<Image
								src='c_crop,g_south_west,h_1800,w_1200/v1630520323/Newberger%20and%20Associates/Todd-Planting_as6c73.png'
								layout='fill'
								objectFit='cover'
								placeholder='blur'
								blurDataURL='t_placeholder/c_crop,g_south_west,h_1800,w_1200/v1630520323/Newberger%20and%20Associates/Todd-Planting_as6c73.png'
							/>
						</div>
						<div className='relative h-[30vh] md:h-[50vh] xl:h-[40vh] 2xl:h-[50vh] w-full'>
							<Image
								src='v1630520323/Newberger%20and%20Associates/Spearfishing_bmhnvb.jpg'
								layout='fill'
								objectFit='cover'
								placeholder='blur'
								blurDataURL='v1630520323/Newberger%20and%20Associates/Spearfishing_bmhnvb.jpg'
							/>
						</div>
						<div className='relative h-[30vh] md:h-[50vh] xl:h-[40vh] 2xl:h-[50vh] w-full'>
							<Image
								src='c_crop,g_south_west,h_1800,w_1200/v1630520323/Newberger%20and%20Associates/Adoption_Day_dbizvz.jpg'
								layout='fill'
								objectFit='cover'
								placeholder='blur'
								blurDataURL='t_placeholder/c_crop,g_south_west,h_1800,w_1200/v1630520323/Newberger%20and%20Associates/Adoption_Day_dbizvz.jpg'
							/>
						</div>
					</div>
					<div></div>
				</main>
			</div>{' '}
		</>
	)
}
