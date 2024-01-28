import { HEADER_LOGO } from "../utils/constant";

const Header = () => {
  return (
    <div className="main-wrapper absolute z-10 px-12 py-2 bg-gradient-to-b from-black w-full">
      <div className="container">
        <div className="navbar">
          <img src={HEADER_LOGO} alt="" className="w-44" />
        </div>
      </div>
    </div>
  );
};

export default Header;
