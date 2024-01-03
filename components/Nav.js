import { useState, useRef } from 'react'
import { useCycle, motion } from 'framer-motion'
import { MenuToggle } from '@components/MenuToggle'
import {Menu} from '@components/Menu'
import { NavInfo } from '@components/NavInfo'
import { NavPhoto } from '@components/NavPhoto'

const menu = {
	closed: {
		clipPath: 'circle(30px at 30px 30px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
	open: {
		clipPath: `circle(50px at 26px 26px)`,
		transition: {
			type: 'spring',
			stiffness: 200,
			restDelta: 2,
		},
	},
}

export default function Nav() {
	const [isOpen, toggleOpen] = useCycle(false, true)
	const containerRef = useRef(null)
	return (
		<>
			<motion.nav
				className='w-screen z-50 fixed'
				// initial={false}
				animate={isOpen ? 'open' : 'closed'}
				// custom={height}
				ref={containerRef}>
				<div className='absolute right-0'>
					<MenuToggle toggle={() => toggleOpen()} />
                    <Menu toggle={() => toggleOpen()} />
                    <NavInfo toggle={() => toggleOpen()} />
                    <NavPhoto toggle={() => toggleOpen()} />
				</div>
			</motion.nav>
		</>
	)
}
