import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className=" text-center text-3xl my-10"> Please Register</h2>
        <form onSubmit={handleRegister} className=" lg:w-1/2 md:w-3 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="Name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="name"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className=" text-center mt-4 ">
          Already have an account?
          <Link className="font-bold  text-blue-600" to="/login">
            Login?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
