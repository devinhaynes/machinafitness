"use client";

import {
  MdOutlineAccountCircle,
  MdSettings,
  MdOutlineAddCircleOutline,
  MdOutlinePlayCircle,
  MdOutlineAnalytics,
  MdOutlineBallot,
} from "react-icons/md";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { IconType } from "react-icons";

export const Sidebar = () => {
  // Determine the current route
  const pathname = usePathname();

  return (
    <div className="relative card my-12 ml-4 !p-4 | before:w-4 before:absolute before:left-[calc(100%+2px)] before:top-8 before:h-[1px] before:bg-theme | after:w-4 after:absolute after:left-[calc(100%+2px)] after:bottom-8 after:h-[1px] after:bg-theme">
      <div className="flex flex-col justify-between h-full">
        <ul className="grid grid-cols-[1fr,auto] gap-2">
          <SidebarLink
            text="Start Workout"
            link="/dashboard/workout"
            Icon={MdOutlinePlayCircle}
            active={pathname === "/dashboard/workout"}
          />
          <SidebarLink
            text="Add Workout"
            link="/dashboard/workout/add"
            Icon={MdOutlineAddCircleOutline}
            active={pathname === "/dashboard/workout/add"}
          />
          <SidebarLink
            text="Exercise Manager"
            link="/dashboard/exercise"
            Icon={MdOutlineBallot}
            active={pathname === "/dashboard/exercise"}
          />
          <SidebarLink
            text="Stats"
            link="/dashboard/stats"
            Icon={MdOutlineAnalytics}
            active={pathname === "/dashboard/stats"}
          />
          <SidebarLink
            text="Profile"
            link="/dashboard/profile"
            Icon={MdOutlineAccountCircle}
            active={pathname === "/dashboard/profile"}
          />
          <SidebarLink
            text="Settings"
            link="/dashboard/settings"
            Icon={MdSettings}
            active={pathname === "/dashboard/settings"}
          />
        </ul>
      </div>
    </div>
  );
};

type SidebarLinkProps = {
  text: string;
  link: string;
  Icon: IconType;
  active: boolean;
};

const SidebarLink = ({ text, link, Icon, active }: SidebarLinkProps) => {
  return (
    <li
      data-sidebar-link-active={active}
      className="grid grid-cols-subgrid items-center col-span-2 gap-2 hover:bg-gray-800 rounded-lg"
    >
      <Link className="grid grid-cols-subgrid col-span-2 p-2" href={link}>
        <Icon className="text-2xl " />
        <span className="text-sm text-nowrap">{text}</span>
      </Link>
    </li>
  );
};
