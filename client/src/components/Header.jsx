import { Button, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar,NavbarCollapse,TextInput } from 'flowbite-react'
import { Link ,useLocation} from 'react-router-dom'
import { FaMoon,FaSun } from 'react-icons/fa'
import {  useSelector,useDispatch } from 'react-redux'
import { toggleTheme } from '../redux/theme/themeSlice'
import { AiOutlineSearch} from 'react-icons/ai'
import React from 'react'
import { signoutSuccess } from '../redux/user/userSlice'

function Header() {
    const dispatch=useDispatch();
    const {currentUser}=useSelector(state=>state.user)
    const path=useLocation.pathname;
    const {theme}=useSelector((state)=>state.theme)
    
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if (searchTermFromUrl) {
          setSearchTerm(searchTermFromUrl);
        }
      }, [location.search]);
    
    
    
    const handleSignOut=async()=>{
        try{
          const res=await fetch('/api/user/signout',{
            method:'POST',
          })
          const data=await res.json()
          if(!res.ok){
            console.log(data.message)
          }else{
            dispatch(signoutSuccess())
    
          }
    
        }catch(error){
          console.log(error.message)
        }
      }
    
    
  
  
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
        <Button className='w=12 h=10 hidden sm:inline' color='gray' pill onClick={()=>dispatch(toggleTheme())}>
            {theme==='light' ? <FaSun/> :<FaMoon/>}
        </Button>
        {currentUser ?(
            <Dropdown>
                arrowIcon={false}
                inline
                 label={
                    <Avatar
                    alt='user'
                    img={currentUser.profilePicture}
                    rounded
                    />
                 }
                 <Dropdown.Header>
                    <span className='block text-sm' >@{currentUser.username}</span>
                    <span className='block text-sm font-medium truncate' >{currentUser.email}</span>
                 </Dropdown.Header>
                <Link to={'/dashboard?tab=profile'}>
                    <Dropdown.Item>Profile</Dropdown.Item>

                </Link>
                <Dropdown.Divider/>
                <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
            </Dropdown>
            ):
            (
            <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
            Sign In
            </Button>
            </Link>

        )}
        
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