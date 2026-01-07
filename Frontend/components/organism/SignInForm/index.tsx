import React from "react";
import Image from "next/image";
import Link from "next/link";

const SignInForm = () => {
  return (
    <form>
      <div className="container mx-auto">
        <div className="pb-50">
          <Link href="/" className="navbar-brand">
            <Image
              src="/assets/icon/logo.svg"
              width={60}
              height={60}
              alt="logo"
            />
          </Link>
        </div>

        <h2 className="text-4xl fw-bold color-palette-1 mb-10">
          Sign In
        </h2>
        <p className="text-lg color-palette-1 m-0">
          Masuk untuk melakukan proses top up
        </p>

        <div className="pt-50">
          <label
            htmlFor="email"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Email Address
          </label>
          <input
            type="email"
            className="form-control rounded-pill text-lg"
            id="email"
            name="email"
            placeholder="Enter your email address"
          />
        </div>

        <div className="pt-30">
          <label
            htmlFor="password"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control rounded-pill text-lg"
            id="password"
            name="password"
            placeholder="Your password"
          />
        </div>

        <div className="button-group d-flex flex-column mx-auto pt-50">
          <button
            type="submit"
            className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
          >
            Continue to Sign In
          </button>

          <Link
            href="/sign-up"
            className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill text-center"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
