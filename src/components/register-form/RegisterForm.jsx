import React from 'react';
import useStyles from './styles';
import { Button, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function RegisterForm() {
   const classes = useStyles();
   const name_pattern = /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/i;
   const phone_pattern = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/i;
   const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
   const password_pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*?]).{8,}$/i;
   const lowercase_pattern = /^(?=.*[a-z])/g;
   const uppercase_pattern = /^(?=.*[A-Z])/g;
   const digit_pattern = /^(?=.*\d{1,})/g;
   const special_pattern = /(?=.*[-+_!@#$%^&*?])/g;


   const initialValues = {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
   }
   return (
      <Grid className={classes.registerForm}>
         <Paper elevation={20} className={classes.registerForm__paperStyle}>
            <Grid className={classes.registerForm__heading}>
               <h1 className={classes.registerForm__headingTitle}>Register Form</h1>
               <Typography className={classes.registerForm__caption} variant='caption'>
                  To create an account, complete this form!
               </Typography>
            </Grid>
            <Formik >
               <Form>
                  <Grid className={classes.registerForm__textFieldContainer}>
                     <AccountCircleIcon className={classes.registerForm__textFieldIcon} />
                     <Field as={TextField} name='name' label='Name' fullWidth />
                     <ErrorMessage
                        className={classes.registerForm__errorMessage}
                        name='name'
                        component='span'
                     />
                  </Grid>
                  <Grid className={classes.registerForm__textFieldContainer}>
                     <PhoneIcon className={classes.registerForm__textFieldIcon} />
                     <Field as={TextField} name='phone' label='Phone' fullWidth />
                     <ErrorMessage
                        className={classes.registerForm__errorMessage}
                        name='phone'
                        component='span'
                     />
                  </Grid>
                  <Grid className={classes.registerForm__textFieldContainer}>
                     <EmailIcon className={classes.registerForm__textFieldIcon} />
                     <Field as={TextField} name='email' label='Email' fullWidth />
                     <ErrorMessage
                        className={classes.registerForm__errorMessage}
                        name='email'
                        component='span' />
                  </Grid>
                  <Grid className={classes.registerForm__textFieldContainer}>
                     <LockIcon className={classes.registerForm__textFieldIcon} />
                     <Field as={TextField} name='password' label='Password' fullWidth />
                     <ErrorMessage
                        className={classes.registerForm__errorMessage}
                        name='password'
                        component='span'
                     />
                  </Grid>
                  <Grid className={classes.registerForm__textFieldContainer}>
                     <LockOpenIcon className={classes.registerForm__textFieldIcon} />
                     <Field as={TextField} name='confirmPassword' label='Confirm Password' fullWidth />
                     <ErrorMessage
                        className={classes.registerForm__errorMessage}
                        name='confirmPassword'
                        component='span'
                     />
                  </Grid>
                  <Button
                     className={classes.registerForm__buttonStyle}
                     type='submit'
                     fullWidth
                     variant='contained'
                  >
                     Submit
            </Button>
               </Form>
            </Formik>
            <Typography className={classes.registerForm__linkStyle} >
               <Link className={classes.registerForm__link} href="#" >
                  Terms and Conditions
                  </Link>
            </Typography>
         </Paper>
      </Grid>
   );
};
