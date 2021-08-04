import Image from 'next/image'
import Link from 'next/link'

const Project = (props) => {
	return (
		<>
			<div className='flex justify-center relative'>
				
				<div className='w-1/3 flex justify-center mt-24 z-10'>
					<div className='text-left'>
                    <h2 className='text-5xl font-serif font-bold mb-8 text-[#EE9207]'>{props.title}</h2>
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
				<div className='relative w-1/3 h-[70vh] mb-36 z-20'>
					<Image
						src={props.portfolioImages[0]}
						layout='fill'
						objectFit='cover'
						placeholder='blur'
						blurDataURL={'t_placeholder' + props.portfolioImages[0] }
					/>
				</div>
			</div><div className='relative'><div className='absolute right-24 h-36 z-30 bottom[-30]'>
				<svg height='100' width='40vw'>
					<line
						x1='0'
						y1='0'
						x2='40vw'
						y2='0'
						className='stroke-[5px] stroke-current text-gray-300'
					/>
				</svg>
			</div><div className='absolute h-[100vh] bg-[#254A5A] bottom-[-70vh] w-screen z-0'></div></div>

		</>
	)
}

const ProjectFlipped = (props) => {
	return (
		<>
			<div className='flex justify-center relative mt-[20vh]'>
            
            
				<div className='relative w-1/3 h-[70vh] mb-36 z-10'>
					<Image
						src={props.portfolioImages[0]}
						layout='fill'
						objectFit='cover'
						placeholder='blur'
						blurDataURL={'t_placeholder' + props.portfolioImages[0] }
					/>
				</div>
				<div className='w-1/3 flex justify-center mt-24'>
                
					<div className='text-left'>
                    <h2 className='text-5xl font-serif font-bold mb-8 text-[#EE9207]'>{props.title}</h2>
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
			</div>			<div className='flex justify-start ml-24 h-36 '>
				<svg height='100' width='40vw'>
					<line
						x1='0'
						y1='0'
						x2='40vw'
						y2='0'
						className='stroke-[5px] stroke-current text-gray-500'
					/>
				</svg>
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
