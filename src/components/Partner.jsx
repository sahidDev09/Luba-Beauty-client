import fedEx from "../assest/companies/fedex.png";
import garnier from "../assest/companies/garnier.png";
import nars from "../assest/companies/nars.png";
import pathao from "../assest/companies/pathao.png";
import northface from "../assest/companies/northFace.png";
import rayban from "../assest/companies/rayban.png";

const Partner = () => {
  const companies = [fedEx, garnier, nars, pathao, northface, rayban];

  return (
    <div className="flex items-center md:justify-between container mx-auto gap-4 flex-wrap m-4">
      {companies.map((company, index) => (
        <div key={index}>
          <img className=" md:w-32 w-20" src={company} alt="companiesLogo" />
        </div>
      ))}
    </div>
  );
};

export default Partner;
