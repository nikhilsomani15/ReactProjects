import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email({ message: "Please enter valid email address" }),
  password: z.string().min(8, {
    message: "Password must be of 8 character",
  }),
});

import "./LoginPage.css";
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });
  const onSubmits = (formData) => console.log(formData);

  return (
    <section className="align_center form_page">
      <form
        className="authentication_form"
        onSubmit={handleSubmit(onSubmits)}
        noValidate
      >
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form_text_input"
              placeholder="Enter your email address"
              {...register("email")}
            />
            {console.log(errors)}
            {errors.email && (
              <em className="form_error">{errors.email.message}</em>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form_text_input"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <em className="form_error">{errors.password.message}</em>
            )}
            <button type="button">Hide PassWord</button>
            <button type="button">Show PassWord</button>
          </div>

          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
export default LoginPage;
