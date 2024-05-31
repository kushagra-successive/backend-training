import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const data = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove("token");
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 py-4 px-8 flex items-center justify-between fixed w-full z-50 ">
      <div className="flex items-center gap-4">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/blogging-website-4af2d.appspot.com/o/Profile%2Fimages.png?alt=media&token=dc63bc06-77e1-495b-8ff0-397cb4751d27"
          alt="User"
          className="w-12 aspect-square rounded-full"
        />
        <h2 className="text-3xl font-bold tracking-wider text-gray-400">
          {data?.name}
        </h2>
      </div>
      <div className="flex justify-end py-0">
        <ul className="flex items-center gap-4">
          <li className="mr-8">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li className="mr-8">
            <Link to="/profile" className="text-white hover:text-gray-300">
              Profile
            </Link>
          </li>
          <li className="mr-8">
            <Link to="/blogs" className="text-white hover:text-gray-300">
              MyBlogs
            </Link>
          </li>

          <li>
            <button onClick={logout} className="text-white hover:text-gray-300">
              Logout
            </button>
          </li>
          <li className="ml-10">
            <Link
              to="/addblog"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Create Blog +
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
