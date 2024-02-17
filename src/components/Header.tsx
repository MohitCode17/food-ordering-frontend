import { Link } from "react-router-dom";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="border-b border-b-[#c9161c] py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"} className="text-2xl sm:text-3xl font-bold">
          <span className="text-[#c9162c]">Flavor</span>
          Bite
        </Link>

        <div className="hidden md:block">
          <DesktopNav />
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;

// c9161c
