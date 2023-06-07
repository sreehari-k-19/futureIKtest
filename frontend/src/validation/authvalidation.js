import * as Yup from 'yup';

export const signupvalidationSchema = Yup.object().shape({
  fullname: Yup.string()
    .required('full name is required')
    .min(3, 'full name must be at least 6 characters')
    .max(20, 'full name must not exceed 20 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(3, 'Password must be at least 3 characters')
    .max(40, 'Password must not exceed 40 characters'),
});
export const loginvalidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(3, 'Password must be at least 3 characters')
    .max(40, 'Password must not exceed 40 characters'),
});