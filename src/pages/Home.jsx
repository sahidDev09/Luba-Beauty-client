import { useEffect, useState } from "react";
import Landing from "../components/Landing";
import Partner from "../components/Partner";
import ProductsCards from "../components/ProductsCards";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Landing />
      <h1 className=" md:text-4xl text-3xl font-extrabold py-5 uppercase text-center">
        Official-Partners
      </h1>
      <Partner />
      <h1 className=" md:text-4xl text-3xl font-extrabold py-5 uppercase text-center">
        Products
      </h1>
      {loading ? (
        <div className=" h-full">
          <div className="text-center py-10">
            <span className="loading loading-infinity loading-lg scale-[7] mt-10"></span>
          </div>
          <h1 className=" text-2xl font-bold text-center">
            Your Data is Loading{" "}
          </h1>
          <p className=" text-center font-semibold">Please wait sometime..</p>
        </div>
      ) : (
        <div className=" container mx-auto grid grid-cols-3 gap-5 my-4">
          {products.slice(0, 3).map((product, index) => (
            <ProductsCards key={index} products={product}></ProductsCards>
          ))}
        </div>
      )}
      <NavLink to="/products">
        <button className=" btn bg-[#E58C89] text-white flex mx-auto my-5">
          See More
        </button>
      </NavLink>
    </div>
  );
};

export default Home;
