import React from "react";

const CompleteCheckout = () => {
  return (
    <section className="complete-checkout mx-auto pt-lg-145 pb-lg-145 pt-100 pb-80">
      <div className="container-fluid">
        <div className="text-center">
          <svg
            className="img-fluid"
            width="343"
            height="300"
            viewBox="0 0 343 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M263.96 271.587C264.986 271.07 265.5 270.554 266.525 270.037"
                stroke="#FF78B7"
                strokeWidth="0.6123"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M276.786 262.804C284.994 256.605 293.202 250.406 299.873 242.657C310.132 231.292 317.827 216.31 317.315 200.812C317.315 189.963 313.211 179.631 309.107 169.299C305.001 159.484 300.385 149.152 298.845 138.303C297.306 127.454 298.845 115.572 306.541 107.823C311.159 102.657 319.367 100.074 325.523 105.24C327.574 107.307 329.114 109.89 330.141 112.99C339.374 143.469 298.333 162.584 273.708 156.901C261.908 153.801 250.622 147.085 241.387 139.336C221.892 123.321 208.04 108.857 199.832 84.5764C192.65 63.9121 188.032 41.1817 172.642 24.1337C121.339 -32.6927 20.2732 34.9825 19.7601 100.591C19.7601 137.787 42.8462 174.982 77.7319 185.83C94.6618 190.997 113.131 189.963 131.087 188.93C139.808 188.414 148.529 187.897 157.764 187.38"
                stroke="#FF78B7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="1.22 4"
              />
              <defs>
                <linearGradient id="paint0_linear">
                  <stop offset="0.00289017" stopColor="#E6ECF5" />
                  <stop offset="1" stopColor="#CED7E2" />
                </linearGradient>
                <linearGradient id="paint1_linear">
                  <stop stopColor="#FF66A9" />
                  <stop offset="1" stopColor="#F53689" />
                </linearGradient>
                <linearGradient id="paint7_linear">
                  <stop offset="0.00289017" stopColor="#606673" stopOpacity="0" />
                  <stop offset="1" stopColor="#373C47" />
                </linearGradient>
              </defs>
            </g>
          </svg>
        </div>

        <div className="pt-70 pb-50">
          <h2 className="text-4xl fw-bold text-center color-palette-1 mb-10">
            Checkout Completed
          </h2>
          <p className="text-lg text-center color-palette-1 m-0">
            Kami akan periksa pembayaran Anda
            <br className="d-sm-block d-none" /> dan menghubungi via WhatsApp
          </p>
        </div>

        <div className="button-group d-flex flex-column mx-auto">
          <a
            href="/member/overview"
            className="btn btn-dashboard fw-medium text-lg text-white rounded-pill mb-16"
          >
            My Dashboard
          </a>

          <button
            type="button"
            className="btn btn-whatsapp fw-medium text-lg color-palette-1 rounded-pill"
          >
            WhatsApp ke Admin
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompleteCheckout;
