import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className=" flex">
      <button className=" btn btn-secondary"> Breaking news</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className=" mr-12" to="/">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci hic
          odit cum mollitia quos labore reiciendis et sint consectetur itaque.
        </Link>
        <Link className=" mr-12" to="/">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci hic
          odit cum mollitia quos labore reiciendis et sint consectetur itaque.
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
