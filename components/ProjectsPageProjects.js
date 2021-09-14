import Image from 'next/image'
import Link from 'next/link'

const Project = (props) => {
	return (
		<>
			<div className='flex justify-center relative mt-36'>
				
				<div className='w-1/3 flex justify-center mt-24 z-10'>
					<div className='text-left'><Link href={`./projects${props.path}`} passHref>
                    <h2 className='text-5xl font-serif font-bold mb-8 text-[#EE9207] cursor-pointer'>{props.title}</h2></Link>
						<h3 className='text-md font-semibold tracking-wider mb-4'>
							{props.category}
						</h3>
						{props.features.map((feature, i) => (
							<h4 className='text-2xl leading-relaxed' key={i}>
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
				<div className='relative w-1/3 h-[70vh] mb-36 z-20 cursor-pointer'><Link href={`./projects${props.path}`} passHref>
					<Image
						src={props.portfolioImages[0]}
						layout='fill'
						objectFit='cover'
						placeholder='blur'
						blurDataURL={'https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/' + props.portfolioImages[0] }
					/></Link>
				</div>
			</div>

		</>
	)
}

const ProjectFlipped = (props) => {
	return (
		<>
			<div className='flex justify-center relative pt-36 bg-[#254A5A]'>
            
            
				<div className='relative w-1/3 h-[70vh] mb-36 z-10 cursor-pointer'>
				<Link href={`./projects${props.path}`} passHref>
					<Image
						src={props.portfolioImages[0]}
						layout='fill'
						objectFit='cover'
						placeholder='blur'
						blurDataURL={'https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/' + props.portfolioImages[0] }
					/></Link>
				</div>
				<div className='w-1/3 flex justify-center mt-24'>
                
					<div className='text-left'>
					<Link href={`./projects${props.path}`} passHref>
                    <h2 className='text-5xl font-serif font-bold mb-8 text-[#EE9207] cursor-pointer'>{props.title}</h2></Link>
						<h3 className='text-md font-semibold tracking-wider mb-4 text-white'>
							{props.category}
						</h3>
						{props.features.map((feature, i) => (
							<h4 className='text-2xl leading-relaxed text-white' key={i}>
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
