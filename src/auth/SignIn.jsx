import React, { useEffect, useState } from "react";
import jazzylogo from "../assets/jazzylogo.svg";
import "../styles/SignIn.css";
import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const Signin = () => {
  const [isReveal, setIsReveal] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  function handleToggle (){
    !isReveal ? setIsReveal(true) : setIsReveal(false)
  }
  useEffect(() => {
    document.title = "Login | Page";
  });
  return (
    <>
      <main className="container vh-50 d-flex flex-column my-3">
        <div className="">
          <div className="text-center">
            <Link to="/">
              <img src={jazzylogo} alt="Jazzy-Logo" />
            </Link>
          </div>
          <h2 className="fs-3 fw-bold my-4 text-center w-75 m-auto">
            SIGN IN TO YOUR ACCOUNT
          </h2>

          {/* FORM */}
          <Form className="w-75 m-auto" onSubmit={handleSubmit(onSubmit)}>
            {/* input for email */}
            <Form.Label className="fs-6 text-secondary"> Email </Form.Label>
            {/* <FloatingLabel
              controlId="floatingInput"
              label="example@mail.com"
              className="mb-3"
            >
            </FloatingLabel> */}
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className="border border-3 rounded-3"
                {...register("email",{ required: true })}
                />
                {errors.email && <span className="text-danger fw-bold">This field is required</span>}

            {/* input for password */}
            <Form.Label className="fs-6 text-secondary"> Password </Form.Label>
            <FloatingLabel controlId="floatingPassword" label="Password">

              <Form.Control
                type={isReveal ? "text" : "password"}
                placeholder="Password"
                className="border border-3 rounded-3 position-relative"
                {...register("password",{ required: true })}
              />
              {errors.password && <span className="text-danger fw-bold">This field is required</span>}
              <p className="position-absolute end-0 top-0 mt-3 me-2" role="button" onClick={handleToggle}>{isReveal ? <FaRegEyeSlash /> : <FaRegEye />} </p>
            </FloatingLabel>

            {/* below for check box */}
            <div className="d-flex justify-content-between mt-3 fw-bold">
            {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={"keep me signed in"}
            className="fs-6 fw-bold"
          />
        </div>
      ))}
      <Link to='#' className="text-decoration-none">Reset Password</Link>

            </div>
            <button className="btn btn-danger text-white fs-3 w-100">Sign In</button>
            <p className="text-center mt-3 fw-bold">Don't have an account? <Link to="/SignUp" className="text-primary text-decoration-none">Create one</Link> </p>
          </Form>
        </div>
      </main>
    </>
  );
};

export default Signin;
