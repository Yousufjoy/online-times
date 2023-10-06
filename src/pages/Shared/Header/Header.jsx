import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div>
      <img src={logo} alt="" />
      <p>Journalism without fear or Favor</p>
      <p className=" text-xl">
        {moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}{" "}
      </p>
    </div>
  );
};

export default Header;
