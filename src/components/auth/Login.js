import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Register.module.css";
import { UserContext } from "../UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { setUserStatus, setUserInfo } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value.toLowerCase().trim(),
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
      axios
        .post("/login", values, axiosConfig)
        .then(({ data: { success, token, user } }) => {
          if (!success) {
            setIsSubmitting(false);
            return toast.error("😲 Please check email or password", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            setUserStatus(true);
            setUserInfo({ ...user });

            setIsSubmitting(false);
            setValues({
              email: "",
              password: "",
            });

            return toast.success(
              `👌 You're now logged in ${
                user.slice(0, 1).toUpperCase() + user.slice(1)
              }!`,
              {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
          }
        });
    }
  }, [isSubmitting, errors, values, setUserInfo, setUserStatus]);

  const validate = (values) => {
    let errors = {};

    if (!values.email) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div>
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
      </div>
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

export default Login;
