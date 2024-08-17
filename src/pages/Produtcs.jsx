/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ProductsCards from "../components/ProductsCards";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState("priceAsc");
  const productsPerPage = 6;

  const fetchProducts = (page = 1) => {
    fetch(
      `http://localhost:8000/products?page=${page}&limit=${productsPerPage}&search=${searchQuery}&category=${selectedCategory}&brand=${selectedBrand}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortBy=${sortBy}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setTotalPages(data.totalPages || 1);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [
    currentPage,
    searchQuery,
    selectedCategory,
    selectedBrand,
    minPrice,
    maxPrice,
    sortBy,
  ]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
    setCurrentPage(1);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="bg-pink-50 min-h-screen">
      <div className="container mx-auto py-4">
        <div className="md:flex items-center justify-between ">
          {/* Category Filter && brand */}
          <div className=" flex items-center gap-4  w-fit mx-auto">
            <div>
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="select select-bordered">
                <option value="all">All Categories</option>
                <option value="Skincare">Skincare</option>
                <option value="Boys Skincare">Boys Skincare</option>
                <option value="Hair Treatment">Hair Treatment</option>
                <option value="Makeup">Makeup</option>
                <option value="Body Wash">Body Wash</option>
                <option value="Earrings">Earrings</option>
                <option value="Necklace">Necklace</option>
              </select>
            </div>

            <div>
              <select
                value={selectedBrand}
                onChange={handleBrandChange}
                className="select select-bordered">
                <option value="all">All Brands</option>
                <option value="GlowSkin">GlowSkin</option>
                <option value="LipCharm">LipCharm</option>
                <option value="ManCare">ManCare</option>
                <option value="AquaClean">AquaClean</option>
                <option value="HairGlow">HairGlow</option>
                <option value="EleganceJewels">EleganceJewels</option>
                <option value="LuxeGems">LuxeGems</option>
                <option value="ScrubFresh">ScrubFresh</option>
              </select>
            </div>
          </div>

          {/* Price Range */}
          <div className="flex gap-3 items-center w-fit mx-auto my-2">
            <div className="flex items-center gap-1">
              <label htmlFor="">Min</label>
              <input
                type="number"
                placeholder="$0"
                value={minPrice}
                onChange={handleMinPriceChange}
                className="select select-bordered w-[120px] focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="">Max</label>
              <input
                type="number"
                placeholder="$500"
                value={maxPrice}
                onChange={handleMaxPriceChange}
                className="select select-bordered w-[120px] focus:outline-none"
              />
            </div>
          </div>

          {/* Sorting && serach */}
          <div className="md:flex gap-4 items-center w-fit mx-auto">
            <div className="flex items-center gap-2 my-2">
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="select select-bordered bg-green-50 focus:outline-none">
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="dateAdded">Date Added: Newest First</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                className="input input-bordered focus:outline-none"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
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
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="h-[700px]">
          <div className="text-center py-10">
            <span className="loading loading-infinity loading-lg scale-[3] mt-10"></span>
          </div>
          <h1 className="text-2xl font-bold text-center">
            Your Data is Loading
          </h1>
          <p className="text-center font-semibold">Please wait sometime...</p>
        </div>
      ) : (
        <div>
          <div className="grid md:grid-cols-3 gap-5 md:py-7 container mx-auto p-2">
            {products.map((product, index) => (
              <ProductsCards key={index} products={product} />
            ))}
          </div>
          {/* Pagination Controls */}
          <div className="flex justify-center py-4">
            <button
              className="btn bg-[#e58c8a] text-white"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}>
              Previous
            </button>
            <span className="px-4 py-2">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="btn bg-[#e58c8a] text-white"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
