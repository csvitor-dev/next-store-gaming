import React from "react";

const TopUpForm = () => {
  return (
    <form action="./checkout.html" method="POST">
      <div className="pt-md-50 pt-30">
        <label
          htmlFor="ID"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Verify ID
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="ID"
          name="ID"
          placeholder="Enter your ID"
        />
      </div>

      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>

        <div className="row justify-content-between">
          {[
            { id: "topup1", amount: 125 },
            { id: "topup2", amount: 225 },
            { id: "topup3", amount: 350 },
            { id: "topup4", amount: 550 },
            { id: "topup5", amount: 750 },
          ].map(({ id, amount }) => (
            <label
              key={id}
              htmlFor={id}
              className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
            >
              <span className="visually-hidden">
                Select {amount} Gold Top Up
              </span>

              <input
                className="d-none"
                type="radio"
                id={id}
                name="topup"
                value={id}
              />

              <div className="detail-card">
                <div className="d-flex justify-content-between">
                  <p className="text-3xl color-palette-1 m-0">
                    <span className="fw-medium">{amount}</span>{" "}
                    Gold
                  </p>
                </div>
                <p className="text-lg color-palette-1 m-0">
                  Rp 3.250.000
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>

        <fieldset>
          <div className="row justify-content-between">
            {[
              { id: "transfer", label: "Transfer", desc: "Worldwide Available" },
              { id: "visa", label: "VISA", desc: "Credit Card" },
            ].map(({ id, label, desc }) => (
              <label
                key={id}
                htmlFor={id}
                className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
              >
                <span className="visually-hidden">
                  Select payment method {label}
                </span>

                <input
                  className="d-none"
                  type="radio"
                  id={id}
                  name="paymentMethod"
                  value={id}
                />

                <div className="detail-card">
                  <p className="text-3xl color-palette-1 fw-medium m-0">
                    {label}
                  </p>
                  <p className="text-lg color-palette-1 m-0">{desc}</p>
                </div>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="pb-50">
        <label
          htmlFor="bankAccount"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          placeholder="Enter your Bank Account Name"
        />
      </div>

      <div className="d-sm-block d-flex flex-column w-100">
        <button
          type="submit"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default TopUpForm;
