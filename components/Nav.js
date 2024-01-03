import { useState, useRef } from 'react'
import { useCycle, motion } from 'framer-motion'
import { MenuToggle } from '@components/MenuToggle'
import {Menu} from '@components/Menu'
import { NavInfo } from '@components/NavInfo'
import { NavPhoto } from '@components/NavPhoto'

export default function Nav() {
	const [isOpen, toggleOpen] = useCycle(false, true)
	const containerRef = useRef(null)
	return (
		<>
			<motion.nav
				className='w-screen z-50 fixed'
				initial={'closed'}
				animate={isOpen ? 'open' : 'closed'}
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
