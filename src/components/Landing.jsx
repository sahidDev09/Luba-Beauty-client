import { NavLink } from "react-router-dom";
import women from "../assest/image/woment2.png";

const Landing = () => {
  return (
    <div className="mainHero ">
      <div className="overflow-hidden w-full md:h-[650px] grid md:grid-cols-2 items-center container mx-auto p-10 md:p-0">
        <div className=" flex flex-col gap-3">
          <img
            className=" w-96"
            src="https://i.ibb.co/58dnSPv/COSMETICS-1.png"
            alt="hero logo"
          />
          <h1>
            Welcome to Luba Beauty, where elegance meets everyday essentials.
            Discover our curated selection of cosmetics and self-care products
            designed to bring out your natural glow. Unveil your beauty with us!
          </h1>
          <NavLink to="/products">
            <button className=" btn">New Arrival</button>
          </NavLink>
        </div>
        <div className="w-full h-full">
          <img
            className=" object-cover w-full h-full hidden md:inline"
            src={women}
            alt="women"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
