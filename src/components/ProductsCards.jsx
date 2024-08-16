/* eslint-disable react/prop-types */
const ProductsCards = ({ products }) => {
  const creationDate = new Date(products.Creation_date_time);
  const FormatDate = creationDate.toLocaleDateString("en-CA");
  const FormatTime = creationDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div>
      <div
        className="card bg-[`${products.card_bg}`] w-full shadow-xl text-white"
        style={{ backgroundColor: products.card_bg }}>
        <div className="flex items-center justify-between mt-3 mx-3">
          <p
            className="bg-pink-100 w-fit p-2 rounded-full text-sm"
            style={{ color: products.card_bg }}>
            {products.Category}
          </p>
          <div>
            <h1 className=" text-sm text-gray-300">{`${FormatDate}, ${FormatTime}`}</h1>
          </div>
        </div>
        <figure className="px-10 pt-10">
          <img
            src={products.Product_Image}
            alt="products"
            className="rounded-xl w-52 bg-contain scale-110 hover:scale-100 transition-all"
          />
        </figure>

        <div className="card-body items-center text-center">
          <div className=" flex text-sm gap-3 text-gray-300">
            <h1>Rating: {products.Ratings}/5</h1>
            <h1>Brand: {products.Brand}</h1>
          </div>
          <h2 className="card-title">{products.Product_Name}</h2>
          <p>{products.Description.slice(0, 40)}...</p>
          <div>
            <div className="flex items-center gap-5 justify-between w-full">
              <h1 className=" text-3xl font-extrabold uppercase">
                $<span>{products.Price}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCards;
