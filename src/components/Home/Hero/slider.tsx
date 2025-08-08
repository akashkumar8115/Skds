import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const pricedeta: {
  title: string;
  price: string;
}[] = [
    {
      title: "Fresh ideas, rooted in culture.",
      price: "Innovate",
    },
    {
      title: "Every pixel with purpose.",
      price: "Refine",
    },
    {
      title: "Designs that resonate deeply.",
      price: "Connect",
    },
    {
      title: "Bringing visions into reality.",
      price: "Transform",
    },
    {
      title: "Crafting identities that endure.",
      price: "Build",
    },
    {
      title: "Where design meets strategy.",
      price: "Elevate",
    },
  ];

const CardSlider = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  return (
    <div className="lg:-mt-16 mt-16">
      <Slider {...settings}>
        {pricedeta.map((item, index) => (
          <div key={index} className="pr-6">
            <div className="px-3 py-4 bg-dark_grey bg-opacity-80 rounded-xl text-center">
              <p className="text-white text-lg font-bold">
                {item.price}
              </p>
              <p className="text-white text-base mb-2">
                {item.title}
              </p>
            </div>
          </div>
        ))}

      </Slider>
    </div>
  );
};

export default CardSlider;
