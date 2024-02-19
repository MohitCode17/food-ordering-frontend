import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="container mx-auto">
      <div className="flex items-center justify-between flex-col md:flex-row-reverse gap-8 py-20">
        {/* Hero Image Section */}
        <div className="md:w-1/2">
          <img src={heroImg} alt="hero-banner" />
        </div>
        {/* Banner Info Section */}
        <div className="md:w-1/2 space-y-7">
          <h2 className="text-4xl md:text-5xl font-bold">
            Best Food <br /> Which Makes You{" "}
            <span className="text-primaryColor">Hungry</span>
          </h2>
          <p className="text-gray-800 text-lg">
            Exploring a world of culinary delights at your fingertips! Order a
            Symphony of flavors with a simple click.
          </p>
          <button className="bg-primaryColor text-white px-8 py-3 rounded-full font-semibold hover:bg-red-500 hover:text-white">
            Order Now
          </button>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
