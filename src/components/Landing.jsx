import { Link } from "react-router-dom";
import women from "../assest/image/woment2.png";

const Landing = () => {
  return (
    <div className="mainHero h-[85vh] bg-cover bg-center bg-no-repeat p-5 md:p-0">
      <div className=" container mx-auto grid md:grid-cols-2 items-center h-full">
        <div className=" flex flex-col gap-3">
          <img
            className=" w-96"
            src="https://i.ibb.co/58dnSPv/COSMETICS-1.png"
            alt="logg"
          />
          <p>
            Welcome to Luba Beauty, where elegance meets everyday essentials.
            Discover our curated selection of cosmetics and self-care products
            designed to bring out your natural glow. Unveil your beauty with us!
          </p>
          <Link>
            <button className=" btn">New Arrival</button>
          </Link>
        </div>
        <div className="h-full md:inline hidden">
          <img className=" min-h-full" src={women} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
