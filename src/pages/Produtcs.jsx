import { useEffect, useState } from "react";
import ProductsCards from "../components/ProductsCards";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchProd, setSearchProd] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.Product_Name.toLowerCase().includes(searchProd.toLowerCase())
  );

  return (
    <div className="bg-pink-50 min-h-screen">
      <div className="flex justify-end container mx-auto py-4">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow focus:outline-none"
            placeholder="Search"
            value={searchProd}
            onChange={(e) => setSearchProd(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      {loading ? (
        <div className=" h-[700px]">
          <div className="text-center py-10">
            <span className="loading loading-infinity loading-lg scale-[7] mt-10"></span>
          </div>
          <h1 className=" text-2xl font-bold text-center">
            Your Data is Loading{" "}
          </h1>
          <p className=" text-center font-semibold">Please wait sometime..</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-5 md:py-7 container mx-auto p-2">
          {filteredProducts.map((product, index) => (
            <ProductsCards key={index} products={product}></ProductsCards>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
