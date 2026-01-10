import React from "react";
import cx from "classnames";
import Link from "next/link";

interface MenuProps {
  // title?: String untuk props yang tidak wajib nama propsnya diberkan tanda ?
  title: string;
  active?: boolean;
  href: string;
}

const Menu = (props: Partial<MenuProps>) => {
  const { title, active, href = '/' } = props;

  const classTitle = cx({
    "nav-link": true,
    active: active,
  });

  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classTitle} aria-current="page" href={href}>
          {title}
        </a>
      </Link>
    </li>
  );
};

export default Menu;
