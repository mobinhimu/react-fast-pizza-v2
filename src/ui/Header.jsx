import { Link } from "react-router-dom";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <div className="bg-yellow-500 p-3 md:text-lg flex items-center justify-between font-semibold tracking-widest uppercase">
      <Link to="/" className="font-normal">
        Fast Pizza Co.
      </Link>
      <UserName />
    </div>
  );
}

export default Header;
