import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          className="w-[103px]"
          src="https://i.ibb.co/zmW2Yp7/logo.jpg"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Logo;
