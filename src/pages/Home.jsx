import Landing from "../components/Landing";
import Partner from "../components/Partner";

const Home = () => {
  return (
    <div>
      <Landing />
      <h1 className=" md:text-4xl text-3xl font-extrabold py-5 uppercase text-center">
        Official-Partners
      </h1>
      <Partner />
    </div>
  );
};

export default Home;
