import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'


export default function Contact() {
	

	

	return (
		<>
			<div className='min-h-screen'>
				<Head>
					<title>Newberger & Associates | Contact Us</title>
					<meta
						property='og:title'
						content='Newberger & Associates | Contact Us'
						key='title'
					/>
					<link rel='icon' href='/favicon.ico' />
					<meta charSet='utf-8' />
					<meta
						name='viewport'
						content='initial-scale=1.0, width=device-width'
					/>
				</Head>

				<main lang='en'>
					<motion.div
						initial={{ opacity: 0.2 }}
						animate={{ opacity: 1 }}
						className='relative h-screen z-0 bg-[#322121]'>
						<Image
							src='v1620327405/Newberger%20and%20Associates/brotherton-06_ivbdxi.jpg'
							layout='fill'
							objectFit='cover'
							className='opacity-50 z-0'
						/>
						<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
							<div className='md:p-16 p-8 flex flex-col bg-white opacity-100 z-20 drop-shadow-xl w-screen xl:w-[30vw] lg:w-[50vw] md:w-[70vw]'>
								<h2 className='md:text-2xl text-xl font-sans font-semibold text-center mb-2'>
									Interested in working together?
								</h2>
								<h2 className='md:text-2xl text-xl font-sans font-semibold text-center mb-8 md:mb-12'>
									{' '}
									Let's talk. 707.961.0911
								</h2>

								<div className='py-6 px-6 sm:px-4 lg:col-span-2 '>
									<h3 className='text-lg font-medium text-warm-gray-900'>
										Tell us a little about your project.
									</h3>

									<form
										action='#'
										method='post'
										name='contactForm'
										data-netlify='true'
										data-netlify-honeypot='bot-field'
										className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
										<input
											type='hidden'
											name='form-name'
											value='contactForm'
										/>
										<div>
											
											<div className='mt-1'><label htmlFor='firstName'>
												<input
													type='text'
													name='firstName'
													
													required
													placeholder='First Name*'
													className={
														'py-1 border-solid border-2  border-gray-600  pl-2 w-full flex-auto'
													}
												/></label>
											</div>
										</div>
										<div>
											
											<div className='mt-1 '><label htmlFor='lastName'>
												<input
													type='text'
													name='lastName'
													
													required
													
													placeholder='Last Name*'
													className={
														'py-1 border-solid border-2  border-gray-600   pl-2 flex-auto w-full'
													}
												/></label>
											</div>
										</div>
										<div className='col-span-2'>
											
											<div className='mt-1'><label htmlFor='email'>
												<input
													
													name='email'
													type='email'
													required
													
													placeholder='Email Address*'
													className={
														'py-1 border-solid border-2  border-gray-600   pl-2 flex-auto w-full'
													}
												/></label>
											</div>
										</div>

										<div className='sm:col-span-2'>
											
												
											
											<div className='mt-1'><label htmlFor='message'>
												<textarea
													
													name='message'
													type='text'
													rows={4}
													placeholder='Property address and project description'
													className={
														'py-1 border-solid border-2  border-gray-600 w-full  pl-2'
													}
													defaultValue={''}
												/></label>
											</div>
											
										</div>
										<div className='sm:col-span-2 sm:flex sm:justify-start'>
											<button
												type='submit'
												className='bg-yellow-500 text-gray-800 font-semibold px-8 py-2 '>
												Send
											</button>
										</div>
									</form>
								</div>

								
							</div>
						</div>
					</motion.div>
				</main>
			</div>
		</>
	)
}
