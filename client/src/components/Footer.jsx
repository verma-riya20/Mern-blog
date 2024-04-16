import React from 'react'
import { Footer, FooterDivider, FooterIcon } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BsInstagram, BsTwitter,BsGithub} from 'react-icons/bs'

function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="">
                <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Sahand's</span> Blog
                </Link>
                </div>
                <div className="grid grid-cols-2 gap-3 sm: mt-4 sm:grid-cols-3 sm:gap-6">
                <Footer.Title title='About'/>
                <Footer.LinkGroup col>
                <Footer.Link
                
                href='https://www.100jsprojects.com'
                terget='_blank'
                rel='noopener noreferrer'>
                  100 JS Projrcts
                 
                </Footer.Link>

                <Footer.Link
                href='/about'
                terget='_blank'
                rel='noopener noreferrer'>
                  Sahand's Blog
                 </Footer.Link>
              </Footer.LinkGroup>
            
          </div>

          <div className="grid grid-cols-2 gap-3 sm: mt-4 sm:grid-cols-3 sm:gap-6">
            <Footer.Title title='Follow us'/>
              <Footer.LinkGroup col>
                <Footer.Link
                
                href='https://www.100jsprojects.com'
                terget='_blank'
                rel='noopener noreferrer'>
                  Github
                 
                </Footer.Link>

                <Footer.Link
                href='/about'
                terget='_blank'
                rel='noopener noreferrer'>
                  Linkedin
                 </Footer.Link>
              </Footer.LinkGroup>
            
          </div>

          <div className="grid grid-cols-2 gap-3 sm: mt-4 sm:grid-cols-3 sm:gap-6">
            <Footer.Title title='Legal'/>
              <Footer.LinkGroup col>
                <Footer.Link
                
                href='#'
                >
                Privacy Policy
                 
                </Footer.Link>

                <Footer.Link
                href='#'
                >
                Terms and Conditions
                 </Footer.Link>
              </Footer.LinkGroup>
            
          </div>
            </div>
            <Footer.Divider/>
            <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href='#' by="Sahand's Blog" year={new Date().getFullYear()}></Footer.Copyright>
            </div>
            <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                
                </div>
                <div>
                <Footer.Icon href='#' icon={BsInstagram}></Footer.Icon>
                <Footer.Icon href='#' icon={BsTwitter}></Footer.Icon>
                <Footer.Icon href='#' icon={BsGithub}></Footer.Icon>
            
            </div>
        </div>
    </Footer>
  )
}

export default FooterCom