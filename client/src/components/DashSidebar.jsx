import React from 'react'
import { Sidebar,  SidebarItemGroup } from 'flowbite-react'
import{HiUser,HiArrowSmRight} from 'react-icons/hi'
import { useEffect,useState } from 'react'
import { Link,useLocation } from 'react-router-dom'
import { signoutSuccess } from '../redux/user/userSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


export default function DashSidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
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
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <SidebarItemGroup>
                <Link to='/dashboard?tab=profile'>
                <Sidebar.Item active icon={HiUser} label={"User"} labelColor='dark' as='div'>
                    Profile
                    </Sidebar.Item> 
                    </Link>

                    {currentUser.isAdmin && (
            <Link to='/dashboard?tab=posts'>
              <Sidebar.Item
                active={tab === 'posts'}
                icon={HiDocumentText}
                as='div'
              >
                Posts
              </Sidebar.Item>
            </Link>
          )}
          {currentUser.isAdmin && (
            <>
              <Link to='/dashboard?tab=users'>
                <Sidebar.Item
                  active={tab === 'users'}
                  icon={HiOutlineUserGroup}
                  as='div'
                >
                  Users
                </Sidebar.Item>
              </Link>
              <Link to='/dashboard?tab=comments'>
                <Sidebar.Item
                  active={tab === 'comments'}
                  icon={HiAnnotation}
                  as='div'
                >
                  Comments
                </Sidebar.Item>
              </Link>
            </>
          )}
                     <Sidebar.Item active icon={HiArrowSmRight} className='cursor-pointer'>         
                    Sign Out
                    </Sidebar.Item>
                    
                  </SidebarItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
