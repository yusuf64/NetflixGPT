import { HEADER_LOGO } from "../utils/constant";

const Header = () => {
  return (
    <div className="main-wrapper">
      <div className="container">
        <div className="navbar">
          <img src={HEADER_LOGO} alt="" className="w-32" />
        </div>
      </div>
    </div>
  );
};

export default Header;
