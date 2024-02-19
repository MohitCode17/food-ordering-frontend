import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import UserMenu from "./UserMenu";
import { useAuth0 } from "@auth0/auth0-react";

const DesktopNav = () => {
  const isAuthenticated = false;
  const { loginWithRedirect } = useAuth0();

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
          className="bg-primaryColor hover:bg-red-500 text-white hover:text-white font-bold"
          onClick={async () => await loginWithRedirect()}
        >
          Sign In
        </Button>
      )}
    </span>
  );
};

export default DesktopNav;
