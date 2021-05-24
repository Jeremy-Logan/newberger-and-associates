import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'
import { useState } from 'react'



const variants = {
	open: {
        scaleX: 1,
		transition: {type: "spring", mass: 0.3, delay:0.1, staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
        scaleX: 0,
        
		transition: { delay: 0.3, staggerChildren: 0.05, delayChildren: 0 },
	},
}





export const Menu = ({ toggle }) => {
    
    
    const [menuState, setMenuState] = useState({
    activeItem: null,
    items: [{id:0, toggled:true}, {id:1, toggled:false}, {id:2, toggled:false}, {id:3, toggled:false}]
    // items: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
})

const toggleActive = (index) => {
    menuState.items[index].toggled = false;
    setMenuState({ ...menuState, activeItem: menuState.items[index]})
}

const toggleColor = (index) => {
    
    if (menuState.items[0] === menuState.activeItem || menuState.items[index].toggled) { return '#EE9207'} else {return  'transparent'}
    // if (menuState.items[index] === menuState.activeItem ) { return '#EE9207'} else {return  'transparent'}
}

	return (
	<motion.div className='relative w-screen z-40'>
		<motion.ul
			className='pt-36 absolute origin-right top-0 right-0 w-8/12 bg-[#687C8B] h-screen'
			variants={variants}
			onClick={toggle}>
			{menuState.items.map((elements, index) => ( <>
				<MenuItem i={index} key={index} color={toggleColor(index)} onClick={() => {toggleActive(index)}}/>{console.log(menuState)}</>
			))}
		</motion.ul>
	</motion.div>)
}

