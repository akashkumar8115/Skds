const CTA = () => {
  return (
    <section className="md:pt-24 sm:pt-16 pt-10 -mt-10 relative z-1">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="bg-section bg-opacity-10 px-16 py-14 rounded-3xl border-2 border-opacity-20 border-section grid grid-cols-12 items-center before:content-[''] before:absolute relative before:w-96 before:h-64 before:bg-start before:bg-no-repeat before:-bottom-11 overflow-hidden lg:before:right-48 before:-z-1 before:opacity-10 ">
          <div className="lg:col-span-10 col-span-12">
            <h2 className="text-white sm:text-40 text-30 mb-6">
              Where Intent Becomes  <span className="text-primary">Identity.</span>{" "}
            </h2>
            <p className="text-muted text-opacity-80 text-18">
              At Shri Kishori Design Studio, every project begins with meaning, not just moodboards. We decode your brand’s essence and translate it into visuals that resonate, differentiate, and endure.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60"></div>
      </div>
    </section>
  );
};

export default CTA;
