// import logo from '../img/logo-14 new 1.png';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { signupvalidationSchema, loginvalidationSchema } from '../validation/authvalidation';

import './auth.scss';
import FormField from '../components/Input';
import { signIn, signUp } from '../api/request';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import useAuthStore from "../store/Authstore";

const Auth = () => {
  const [isSignup, setIssignUp] = useState(false)
  const navigate = useNavigate()
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);
  const changForm = () => {
    setIssignUp(!isSignup)
    reset()
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(isSignup ? signupvalidationSchema : loginvalidationSchema),
    mode: "onBlur"
  });

  const handlesub = (data) => {
    if (isSignup) {
      signUp(data).then(() => {
        toast.success('Successfully created!', { duration: 4000 });
        setIssignUp(false)
      }).catch(() => {
        toast.error('some thing went wrong', { duration: 4000 });
      })
    } else (
      signIn(data).then((res) => {
        localStorage.setItem('token', res.data);
        setAuthenticated(true);
        navigate('/')
      }).catch(() => {
        toast.error('email or password is wrong', { duration: 4000 });
      })
    )
    reset()
  };

  return (
    <div className="auth">
      <div className="box-login">
        <div>
          {/* <img src={logo} alt="logo" /> */}
        </div>
        <h2 className="forgothead"> {isSignup ? "Welcome to Futurelk !" : "Welcome back to Futurelk !"} </h2>
        <p style={{ textAlign: 'center' }} >{isSignup ? "Create a account to continue." : "Login with your email and password."}</p>
        <form className="form" onSubmit={handleSubmit(handlesub)}>
          {isSignup && (
            <FormField
              label="Full Name"
              type="text"
              name="fullname"
              placeholder="Enter your name"
              register={register}
              errors={errors}
            />
          )}
          <FormField
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            register={register}
            errors={errors}
          />
          <FormField
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            register={register}
            errors={errors}
          />

          <button className="button" type="submit">
            Submit
          </button>
        </form>
        {isSignup ? (<p style={{ margin: "20px 20px", textAlign: "center" }} onClick={changForm}>Already have an account Login</p>) :
          (<p style={{ margin: "20px 20px", textAlign: "center" }} onClick={changForm}>Dont have an account Create.</p>)}

      </div>
    </div>
  );
};

export default Auth;
