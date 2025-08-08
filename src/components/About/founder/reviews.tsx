import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { getImagePrefix } from "@/utils/utils";
import { User } from "@/icons/User";
import { JSX } from "react";

const testimonials: {
    title: string;
    short: string;
    icon: JSX.Element;
    background: string;
    body: string;
    width: number;
    height: number;
    padding: string;
}[] = [
        {
            title: "Mr. Aarav Pandey",
            short: "Product Manager",
            icon: <User />,
            background: "bg-warning bg-opacity-20",
            body: "The attention to detail in their UI work is simply unmatched. Our app not only looks stunning but feels intuitive at every touchpoint.",
            width: 18,
            height: 23,
            padding: "px-4 py-3",
        },
        {
            title: "Mrs. Sanaya Verma",
            short: "Co-Founder",
            icon: <User />,
            background: "bg-light_grey",
            body: "SK Design Studio built our website exactly how we envisioned — fast, smooth, and beautifully responsive.",
            width: 18,
            height: 23,
            padding: "px-4 py-2",
        },
        {
            title: "Mr. Rohit Mehta",
            short: "Chief Technical Officer",
            icon: <User />,
            background: "bg-warning bg-opacity-20",
            body: "Clean structure, seamless integrations, and lightning-fast delivery — their API development made our backend rock solid.",
            width: 46,
            height: 46,
            padding: "px-0 py-0",
        },
        {
            title: "Mr. Aarav Pandey",
            short: "Product Manager",
            icon: <User />,
            background: "bg-warning bg-opacity-20",
            body: "The attention to detail in their UI work is simply unmatched. Our app not only looks stunning but feels intuitive at every touchpoint.",
            width: 18,
            height: 23,
            padding: "px-4 py-3",
        },
        {
            title: "Mrs. Sanaya Verma",
            short: "Co-Founder",
            icon: <User />,
            background: "bg-light_grey",
            body: "SK Design Studio built our website exactly how we envisioned — fast, smooth, and beautifully responsive.",
            width: 18,
            height: 23,
            padding: "px-4 py-2",
        },
        {
            title: "Mr. Rohit Mehta",
            short: "Chief Technical Officer",
            icon: <User />,
            background: "bg-warning bg-opacity-20",
            body: "Clean structure, seamless integrations, and lightning-fast delivery — their API development made our backend rock solid.",
            width: 46,
            height: 46,
            padding: "px-0 py-0",
        },
    ];

const Reviews = () => {
    const settings = {
        autoplay: true,
        dots: true,
        arrows: false,
        infinite: true,
        autoplaySpeed: 4000,
        speed: 1000,
        slidesToShow: 3, // show 3 at once
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
        <section className="py-20 md:py-28 text-white">
            <div className="text-center mb-10 px-4">
                <p className="text-muted sm:text-28 text-18 mb-4 pb-6 relative after:content-[''] after:w-8 after:h-0.5 after:bg-primary after:absolute after:bottom-0 after:left-1/2">
                    Voices That <span className="text-primary">Inspire Trust</span>
                </p>
                <h2 className="text-3xl md:text-4xl font-bold italic mb-4">
                   &quot; Real stories from real clients — their words speak to the impact we&apos;ve crafted together.&quot;
                </h2>
            </div>

            <div className="container mx-auto px-4">
                <Slider {...settings}>
                    {testimonials.map((item, index) => (
                        <div key={index} className="pr-6">
                            <div className="px-5 py-6 bg-dark_grey bg-opacity-80 rounded-xl min-h-[240px]">
                                <div className="flex items-center gap-5">
                                    <div className="w-16 h-16 rounded-full bg-light_grey bg-opacity-45 backdrop-blur-sm flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>
                                    <p className="text-white text-xs font-normal">
                                        <span className="text-[18px] font-bold block mb-1">{item.title}</span>
                                        <span className="block">{item.short}</span>
                                    </p>
                                </div>
                                <div className="flex justify-between mt-7 px-[1px]">
                                    <p className="text-[20px] font-semibold italic text-white mb-0 leading-none">
                                        {item.body}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Reviews;
