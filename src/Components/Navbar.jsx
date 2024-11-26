import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
              <div className="text-center mt-28 flex justify-center items-center gap-5">
      <NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? "text-red-500" : "text-black"
  }
>
  Home
</NavLink>
<NavLink
  to="users"
  className={({ isActive }) =>
    isActive ? "text-red-500" : "text-black"
  }
>
  Users
</NavLink>
<NavLink
  to="/update"
  className={({ isActive }) =>
    isActive ? "text-red-500" : "text-black"
  }
>
  Update User
</NavLink>
      </div>
        </div>
    );
};

export default Navbar;