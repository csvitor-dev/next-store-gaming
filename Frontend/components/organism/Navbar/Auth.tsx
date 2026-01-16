import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AuthProps {
  isLogin?: boolean;
}

const Auth = (props: Partial<AuthProps>) => {
  const { isLogin } = props;

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>

        <div>
          <button
            className="dropdown-toggle ms-lg-40 bg-transparent border-0"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            type="button"
          >
            <Image
              src="/assets/img/avatar-1.png"
              className="rounded-circle"
              width={40}
              height={40}
              alt="User Avatar"
            />
          </button>

          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <Link
                href="/member/profile"
                className="dropdown-item text-lg color-palette-2"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                href="/member/wallet"
                className="dropdown-item text-lg color-palette-2"
              >
                Wallet
              </Link>
            </li>
            <li>
              <Link
                href="/member/edit-profile"
                className="dropdown-item text-lg color-palette-2"
              >
                Account Settings
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="dropdown-item text-lg color-palette-2"
              >
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </li>
    );
  }

  return (
    <li className="nav-item my-auto">
      <Link
        href="/sign-in"
        className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
      >
        Sign In
      </Link>
    </li>
  );
};

export default Auth;
