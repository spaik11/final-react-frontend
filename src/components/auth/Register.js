import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    if (Object.keys(errors).length === 0 && isSubmitting) {
      axios.post("/register", values, axiosConfig).then(({ data: json }) => {
        console.log("POST USER", json);

        if (json.error) {
          setIsSubmitting(false);
          setValues({
            name: "",
            email: "",
            password: "",
            owId: "",
          });

          return toast.error("🦄 User Already Exists", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          setIsSubmitting(false);
          setValues({
            name: "",
            email: "",
            password: "",
            owId: "",
          });

          return toast.success("🦄 User Successfully Created", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
    }
  }, [errors, isSubmitting, values]);

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
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div>
        <TextField
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
          label='Password'
          name='password'
          type='password'
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
      </div>
      <br />
      <div>
        <TextField
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
