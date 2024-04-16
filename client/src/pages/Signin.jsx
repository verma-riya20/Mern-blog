import React, { useState } from 'react';
import { Label, TextInput, Button,Alert, Spinner } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
//import OAuth from '../components/OAuth';
import { signinStart,signinSuccess,signinFailure } from '../redux/user/userSlice';
import { useDispatch,useSelector } from 'react-redux';
import OAuth from '../components/OAuth';

function Signin() {
  const navigate= useNavigate()
  const dispatch=useDispatch()
  const [formData, setFormData] = useState({});
  //const [errorMessage,setErrorMesssge]=useState(null)
  const {loading, error: errorMessage}=useSelector(state=>state.user);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if( !formData.email || !formData.password){
      return dispatch(signinFailure('Please fill out all the fields'))
    }   try{
     dispatch(signinStart())
      const res=await fetch ('/api/auth/signup',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(formData),
      })
      const data=await res.json();
      if(data.success===false){
        dispatch(signinFailure(data.message))
      }
      
      if(res.ok){
        dispatch(signinSuccess(data))
        navigate('/')
          
      }
    }catch(error){
      setErrorMesssge(error.message)
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className=''>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='font-bold dark:text-white text-4xl'>Sahand's</span> Blog
          </Link>
          <p className='text-sm mt-5'>This is a demo project.</p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4'onSubmit={handleSubmit} >
            
            <div>
              <Label value='Your email' />
              <TextInput type='email' placeholder='Email' id='email' onChange={handleChange} />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='*******'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button 
            gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                  <Spinner size='sm'/>
                   <span>Loading...</span>
                   </>
                ): (
                  'Sign In'
              )}
            </Button>
            <OAuth/>
            
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span> Don't Have an account?</span>
            <Link to='/' className='text-blue-500'>
              Sign Up
            </Link>
          </div>
          {
            errorMessage&& (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Signin;