import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="lg:me-48 me-0">
      <Link to="/">
        <img
          className="w-[103px] md:w-[200px] md:h-24 "
          src="https://i.ibb.co/WWNw9nd/logo.jpg"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Logo;
