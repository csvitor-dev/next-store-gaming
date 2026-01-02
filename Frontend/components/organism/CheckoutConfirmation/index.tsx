import React from "react";
import { useRouter } from "next/router";

const CheckoutConfirmation = () => {
  const router = useRouter();

  const handleConfirm = () => {
    router.push("/complete-checkout");
  };

  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>

      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          type="button"
          onClick={handleConfirm}
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
};

export default CheckoutConfirmation;
