import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import styles from "./Register.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    owId: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log("Submitted without errors");
    }
  }, [errors]);

  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 5) {
      errors.password = "Password needs to be more than 5 characters";
    }

    return errors;
  };

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div>
        <TextField
          id='standard-basic'
          label='Name'
          name='name'
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
      </div>
      <br />
      <div>
        <TextField
          id='standard-basic'
          label='Email'
          name='email'
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
      </div>
      <br />
      <div>
        <TextField
          id='standard-basic'
          label='Password'
          name='password'
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
      </div>
      <br />
      <div>
        <TextField
          id='standard-basic'
          label='Overwatch ID'
          name='owId'
          value={values.owId}
          onChange={handleChange}
        />
      </div>
      <Button
        onClick={handleSubmit}
        variant='contained'
        color='primary'
        type='submit'>
        Submit
      </Button>
    </form>
  );
};

export default Register;
