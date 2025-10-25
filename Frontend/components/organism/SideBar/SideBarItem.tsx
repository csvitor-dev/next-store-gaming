import React from "react";
import cx from "classnames";
import Link from "next/link";

interface SideBarItemProps {
  title: string;
  icon:
    | "/assets/icon/ic-overview.svg"
    | "/assets/icon/ic-transaction.svg"
    | "/assets/icon/ic-messages.svg"
    | "/assets/icon/ic-card.svg"
    | "/assets/icon/ic-rewards.svg"
    | "/assets/icon/ic-settings.svg"
    | "/assets/icon/ic-logout.svg";
  active?: boolean;
  href: string;
}

const SideBarItem = ({
  title,
  icon,
  active,
  href,
}: SideBarItemProps) => {
  const classItem = cx({
    item: true,
    "mb-30": true,
    active: active,
  });

  return (
    <div className={classItem}>
      <img className="icon me-3" src={icon} width={25} height={25} />
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
};

export default SideBarItem;
