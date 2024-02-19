import landingPage from "../assets/landing.png";
import appDownload from "../assets/appDownload.png";
import SearchBar from "@/components/SearchBar";

const Home = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-primaryColor">
          Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
        <SearchBar />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingPage} alt="" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order taken even faster!
          </span>
          <span>
            Dowload the FlavorBite App for faster ordering and personlised
            recommendations
          </span>
          <span>
            <img src={appDownload} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
