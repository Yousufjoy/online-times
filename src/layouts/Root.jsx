import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto font-sans ">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
