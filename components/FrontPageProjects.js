import Image from 'next/image'
import Link from 'next/link'

const Project = (props) => {
	return (
		<>
			<div className='relative w-[60vw] h-[60vh] z-10 mb-36'>{console.log(props)}
				<Image src={props.heroImage} layout='fill' objectFit='cover' />
			</div>
			<div className='relative flex '>
				<h2 className='absolute bottom-52 left-[45vw] z-30 bg-[#EE9207] text-white text-6xl font-serif font-bold pb-4 pt-3 px-6'>
					{props.title}
				</h2>
			</div>
			<div className='flex justify-center'>
				<div className='w-1/3 flex justify-center mt-24'>
					<div className='text-left'>
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
				<div className='relative w-1/3 h-[70vh] mb-36'>
					<Image
						src={props.portfolioImages[0]}
						layout='fill'
						objectFit='cover'
					/>
				</div>
			</div>
			<div className='flex justify-end h-36 '>
				<svg height='100' width='500'>
					<line
						x1='0'
						y1='0'
						x2='300'
						y2='0'
						className='stroke-[5px] stroke-current text-gray-400'
					/>
				</svg>
			</div>
		</>
	)
}

const ProjectFlipped = (props) => {
	return (
		<>
			<div className='relative flex'>
				<div className='w-1/2'></div>
				<h2 className='absolute bottom-52 right-[40vw] z-30 bg-[#EE9207] text-white text-6xl font-serif font-bold pb-4 pt-3 px-6'>
					{props.title}
				</h2>

				<div className='relative w-[60vw] h-[60vh] z-10 mb-36'>
					<Image
						src={props.heroImage}
						layout='fill'
						objectFit='cover'
					/>
				</div>
			</div>
			<div className='flex justify-center'>
				<div className='relative w-1/3 h-[70vh] mb-36'>
					<Image
						src={props.portfolioImages[0]}
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='w-1/3 flex justify-center mt-24'>
					<div className='text-left'>
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
			</div>
		</>
	)
}

export const FrontPageProjects = (props) => {
	const contentRows = (props.projectList || []).slice(0, 2).map((r, i) => {
		return i % 2 === 0 ? (
			<Project key={i} {...r} />
		) : (
			<ProjectFlipped key={i} {...r} />
		)
	})
	return <div>{contentRows}</div>
}
