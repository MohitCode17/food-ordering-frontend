import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import UserMenu from "./UserMenu";

const DesktopNav = () => {
  const isAuthenticated = false;

  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <>
          <Link to={"/order-status"}>Order Status</Link>
          {/* LoggedIn User Menu */}
          <UserMenu />
        </>
      ) : (
        <Button
          variant={"ghost"}
          className="bg-[#c9161c] hover:bg-red-500 text-white hover:text-white font-bold"
        >
          Sign In
        </Button>
      )}
    </span>
  );
};

export default DesktopNav;
