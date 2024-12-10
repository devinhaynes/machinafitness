import Link from "next/link";
import { LuBicepsFlexed } from "react-icons/lu";

export const Header = () => {
  return (
    <header className="fixed top-8 w-full">
      <div className="flex items-center justify-between px-4 py-1 max-w-page-container mx-auto">
        <Link href="/" className="p-2 rounded-full border-2 border-theme">
          <LuBicepsFlexed className="text-2xl text-theme" />
        </Link>
        <nav className="nav">
          <ul className="flex gap-2">
            <li>
              <Link className="action-button" href="/account">
                Account
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
