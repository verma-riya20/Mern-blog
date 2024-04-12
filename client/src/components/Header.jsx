import { Button, Navbar,NavbarCollapse,TextInput } from 'flowbite-react'
import { Link ,useLocation} from 'react-router-dom'
import { FaMoon } from 'react-icons/fa'

import { AiOutlineSearch} from 'react-icons/ai'
import React from 'react'

function Header() {
    const path=useLocation.pathname;
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px=2 py=1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            rouned-lg text-white'>Sahand's</span>
            Blog
        </Link>
        <form>
            <TextInput
            type="text"
            placeholder="search..."
            className="hidden lg:inline"
            rightIcon={AiOutlineSearch}
           />
       </form>
       <Button className='w=12 h=10 lg:hidden' color='gray' pill>
        <AiOutlineSearch></AiOutlineSearch>
    </Button>

    <div className="flex gap=2 md:order=2">
        <Button className='w=12 h=10 hidden sm:inline' color='gray' pill>
            <FaMoon/>
        </Button>
        <Link to='/sign-in'>
        <Button gradientDuoTone='purpleToBlue' outline>
        Sign In
        </Button>
        </Link>
        <Navbar.Toggle></Navbar.Toggle>
        </div>
        <Navbar.Collapse>
            <Navbar.Link active={path==="/"} as={'div'}>
                <Link to='/'>
                    Home
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path==="/"} as={'div'}>
                <Link to='/about'>
                    About
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path==="/"} as={'div'}>
                <Link to='/projects'>
                    Projects
                </Link>
            </Navbar.Link>

        </Navbar.Collapse>
    
    

    </Navbar>
  
  
    )
}

export default Header