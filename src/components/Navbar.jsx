import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className=" ">
          <img src={userIcon} alt="" />
        </div>
        <Link className="px-5 py-2.5 bg-gray-700 text-gray-100 font-medium rounded-md shadow hover:bg-gray-600 hover:text-white hover:shadow-lg transform hover:scale-105 transition duration-200 ease-in-out" to={"/auth/login"}>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
