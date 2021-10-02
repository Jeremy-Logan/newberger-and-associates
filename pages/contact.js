import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

export default function Contact() {
	const { register, handleSubmit, formState: { errors } } = useForm()
	const onSubmit = (data) => {
		console.log(data)
	}
	return (
		<>
			<div className='min-h-screen'>
				<Head>
					<title>Newberger & Associates | Contact Us</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<main>
				<motion.div
					initial={{ opacity: 0.2 }}
					animate={{ opacity: 1 }}
					className='relative h-screen z-0 bg-[#322121]'>
					<Image
						src='v1620327405/Newberger%20and%20Associates/brotherton-06_ivbdxi.jpg'
						layout='fill'
						objectFit='cover'
						className='opacity-50 z-0'
					/><div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
					<form
						onSubmit={handleSubmit(onSubmit)}
						method='post'
						name='contact'
						data-netlify='true'
						netlify-honeypot='bot-field'
						id='contact'
						className='md:p-16 p-8 flex flex-col bg-white opacity-100 z-20 drop-shadow-xl w-screen xl:w-[30vw] lg:w-[50vw] md:w-[70vw]'>
						
						<h2 className='md:text-2xl text-xl font-sans font-bold text-center mb-8 md:mb-12'>
							Interested in working together?<br/> Tell us a bit about your project.
						</h2>
						<input type='hidden' name='form-name' value='contact' />
						<div className={'flex '}>
							<div
								className={
									'flex flex-col w-full justify-center items-center'
								}>
								<div
									className={
										'text-black '
									}>
									<p className='hidden'>
										<label>
											Don’t fill this out if you're human:{' '}
											<input name='bot-field' />
										</label>
									</p>
									<div
										className={'flex justify-between'}
										{...register('firstName', {
											required: true,
											maxLength: 20,
										})}>
										<label
											htmlFor='firstName'
											className={'w-full'}>
											<input
												type='text'
												name='firstName'
												id='firstName'
												placeholder='First Name'
												className={
													'border-solid border-2 rounded border-gray-600 my-2 pl-2 w-full flex-auto'
												}
											/>
											{errors.firstName?.type ===
												'required' &&
												'First name is required'}
										</label>
										<label
											htmlFor='lastName'
											className='ml-2 w-full'
											{...register('lastName')}>
											<input
												type='text'
												name='lastName'
												id='lastName'
												placeholder='Last Name'
												className={
													'border-solid border-2 rounded border-gray-600  my-2 pl-2 flex-auto w-full'
												}
											/>
										</label>
									</div>
									<label htmlFor='email'>
										<input
											type='email'
											name='email'
											id='email'
											placeholder='Email Address'
											{...register('email', {
												required: true,
											})}
											className={
												'border-solid border-2 rounded border-gray-600 justify-start w-full my-2 pl-2'
											}
										/>
										{errors.email?.type === 'required' &&
											'email is required'}
									</label>
									<label htmlFor='question'>
										<textarea
											{...register('question', {
												required: true,
											})}
											name='question'
											id='question'
											rows='3'
											placeholder='Project Details'
											className={
												'border-solid border-2 rounded border-gray-600 w-full my-2 pl-2'
											}
										/>
										{errors.question?.type === 'required' &&
											'Please leave a brief message.'}
									</label>
									<button
										type='submit'
										className='bg-yellow-500 text-gray-800 font-semibold px-8 py-1 mx-2 rounded m-4'>
										Send
									</button>
								</div>
							</div>
						</div>
					</form></div></motion.div>
				</main>
			</div>
		</>)
	
}
