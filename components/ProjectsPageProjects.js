import Image from 'next/image'
import Link from 'next/link'

const Project = (props) => {
	return (
		<>
			<div className='flex flex-col md:flex-row justify-center relative md:mt-24 mb-24 md:-mb-6 mt-24'>
				<div className='relative md:hidden w-screen md:w-1/3 h-[40vh] md:h-[70vh] mb-2 z-20 cursor-pointer'>
					<Link href={`./projects${props.path}`} passHref>
						<Image
							src={props.portfolioImages[0]}
							layout='fill'
							objectFit='cover'
							placeholder='blur'
							blurDataURL={
								'https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/' +
								props.portfolioImages[0]
							}
						/>
					</Link>
				</div>
				<div className='md:w-1/3 flex ml-8 md:ml-0 md:justify-center md:mt-24 z-40'>
					<div className='text-left'>
						<Link href={`./projects${props.path}`} passHref>
							<h2 className='text-5xl font-serif font-bold mb-8 text-[#EE9207] cursor-pointer'>
								{props.title}
							</h2>
						</Link>
						<h3 className='text-md font-semibold tracking-wider mb-4'>
							{props.category}
						</h3>
						{props.features.map((feature, i) => (
							<h4 className='text-xl md:text-2xl leading-relaxed' key={i}>
								{feature}
							</h4>
						))}
						<Link href={`./projects${props.path}`}>
							<button className='border-[#EE9207] p-4 border-2 mt-10 text-[#EE9207]'>
								READ MORE
							</button>
						</Link>
					</div>
				</div>
				<div className='relative hidden md:block w-screen md:w-1/3 h-[70vh] mb-12 md:mb-0 z-20 cursor-pointer'>
					<Link href={`./projects${props.path}`} passHref>
						<Image
							src={props.portfolioImages[0]}
							layout='fill'
							objectFit='cover'
							placeholder='blur'
							blurDataURL={
								'https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/' +
								props.portfolioImages[0]
							}
						/>
					</Link>
				</div>
			</div>
		</>
	)
}

const ProjectFlipped = (props) => {
	return (
		<>
			<div className='flex flex-col md:flex-row justify-center relative py-24 bg-[#254A5A] md:mt-36  md:mb-0'>
				<div className='relative w-screen md:w-1/3 h-[40vh] md:h-[70vh] mb-2 z-20 cursor-pointer'>
					<Link href={`./projects${props.path}`} passHref>
						<Image
							src={props.portfolioImages[0]}
							layout='fill'
							objectFit='cover'
							placeholder='blur'
							blurDataURL={
								'https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/' +
								props.portfolioImages[0]
							}
						/>
					</Link>
				</div>
				<div className='md:w-1/3 flex ml-8 md:ml-0 md:justify-center md:mt-24 z-40'>
					<div className='text-left'>
						<Link href={`./projects${props.path}`} passHref>
							<h2 className='text-5xl font-serif font-bold mb-8 text-[#EE9207] cursor-pointer'>
								{props.title}
							</h2>
						</Link>
						<h3 className='text-md font-semibold tracking-wider mb-4 text-white'>
							{props.category}
						</h3>
						{props.features.map((feature, i) => (
							<h4
								className='text-xl md:text-2xl leading-relaxed text-white'
								key={i}>
								{feature}
							</h4>
						))}
						<Link href={`./projects${props.path}`}>
							<button className='border-[#EE9207] p-4 border-2 mt-10 text-[#EE9207]'>
								READ MORE
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export const ProjectsPageProjects = (props) => {
	const contentRows = (props.projectList || []).map((r, i) => {
		return i % 2 === 0 ? (
			<Project key={i} {...r} />
		) : (
			<ProjectFlipped key={i} {...r} />
		)
	})
	return <div>{contentRows}</div>
}
