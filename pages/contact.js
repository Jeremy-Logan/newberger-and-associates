import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
// import {
// 	useNetlifyForm,
// 	NetlifyFormProvider,
// 	NetlifyFormComponent,
// 	Honeypot,
// } from 'react-netlify-forms'
// import { useForm } from 'react-hook-form'

export default function Contact() {
	// const { register, handleSubmit, reset, errors } = useForm({
	// 	mode: 'onBlur',
	// })
	// const netlify = useNetlifyForm({
	// 	name: 'react-hook-form',
	// 	action: '/thanks',
	// 	honeypotName: 'bot-field',
	// 	onSuccess: (response, context) => {
	// 		console.log('Successfully sent form data to Netlify Server')
	// 	},
	// })
	// const onSubmit = (data) => netlify.handleSubmit(null, data)

	const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i

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
										name='contact'
										data-netlify='true'
										data-netlify-honeypot='bot-field'
										className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
										<input
											type='hidden'
											name='form-name'
											value='contact'
										/>
										<div>
											<label htmlFor='first-name' />
											<div className='mt-1'>
												<input
													type='text'
													name='firstName'
													id='first-name'
													autoComplete='given-name'
													required
													placeholder='First Name*'
													className={
														'py-1 border-solid border-2  border-gray-600  pl-2 w-full flex-auto'
													}
												/>
											</div>
										</div>
										<div>
											<label htmlFor='last-name' />
											<div className='mt-1 '>
												<input
													type='text'
													name='lastName'
													id='last-name'
													required
													autoComplete='family-name'
													placeholder='Last Name*'
													className={
														'py-1 border-solid border-2  border-gray-600   pl-2 flex-auto w-full'
													}
												/>
											</div>
										</div>
										<div className='col-span-2'>
											<label htmlFor='email' />
											<div className='mt-1'>
												<input
													id='email'
													name='email'
													type='email'
													required
													autoComplete='email'
													placeholder='Email Address*'
													className={
														'py-1 border-solid border-2  border-gray-600   pl-2 flex-auto w-full'
													}
												/>
											</div>
										</div>

										<div className='sm:col-span-2'>
											<div className='flex justify-between'>
												<label htmlFor='message' />
											</div>
											<div className='mt-1'>
												<textarea
													id='message'
													name='message'
													type='text'
													rows={4}
													placeholder='Property address and project description'
													className={
														'py-1 border-solid border-2  border-gray-600 w-full  pl-2'
													}
													defaultValue={''}
												/>
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

								{/* <div className={'flex '}>
									<NetlifyFormComponent
										onSubmit={handleSubmit(onSubmit)}
										className={
											'flex flex-col w-full justify-center items-center'
										}>
										<input
											type='hidden'
											name='form-name'
											value='contact'
										/>
										<div className={'text-black '}>
											<Honeypot />
											{netlify.success && (
												<p>Thanks for contacting us!</p>
											)}
											{netlify.error && (
												<p>
													Sorry, we could not reach
													our servers. Please try
													again later.
												</p>
											)}
											<div
												className={
													'flex justify-between'
												}
												>
												<label
													htmlFor='firstName'
													className={'w-full'}>
													<input
														type='text'
														name='firstName'
														id='firstName'
														placeholder='First Name'
														className={
															'border-solid border-2  border-gray-600 my-2 pl-2 w-full flex-auto'
														}
													/>
												</label>
												<label
													htmlFor='lastName'
													className='ml-2 w-full'
													>
													<input
														type='text'
														name='lastName'
														id='lastName'
														placeholder='Last Name'
														className={
															'border-solid border-2  border-gray-600  my-2 pl-2 flex-auto w-full'
														}
													/>
												</label>
											</div>
											<label htmlFor='email'>
												
											
											<input
												type='email'
												name='email'
												id='email'
												placeHolder='Email Address'
												className={
															'border-solid border-2  border-gray-600  my-2 pl-2 flex-auto w-full'
														}
											/>
											</label>
											<label htmlFor='question'>
												<textarea
													
													name='question'
													id='question'
													rows='3'
													placeholder='Property address and project description'
													className={
														'border-solid border-2  border-gray-600 w-full my-2 pl-2'
													}
												/>
												
											</label>
											<button
												type='submit'
												className='bg-yellow-500 text-gray-800 font-semibold px-8 py-2 mx-2 m-4'>
												Send
											</button>
											
										</div>
									</NetlifyFormComponent>
								</div>*/}
							</div>
						</div>
					</motion.div>
				</main>
			</div>
		</>
	)
}
