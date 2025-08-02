import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";

const info: {
    icon: string;
    title: string;
    text: string;
    space: string;
}[] = [
        {
            icon: "/images/perks/icon-support.svg",
            title: "E-mail",
            text: "shri.k.designs@gmail.com <br /> iam.eeshaan24@gmail.com",
            space: "lg:mt-8",
        },
        {
            icon: "/images/perks/icon-community.svg",
            title: "Address",
            text: "Himachal Pradesh <br /> India",
            space: "lg:mt-14",
        },
        {
            icon: "/images/perks/icon-academy.svg",
            title: "Phone Number",
            text: "+91 70186 71028 <br /> +91 98821 58587",
            space: "lg:mt-4",
        },
    ];


const Contact = () => {
    return (
        <section className="pt-40 pb-28 relative">
            <div className="container mx-auto lg:max-w-screen-xl px-4">
                <div className="text-center">
                    <p className="text-muted sm:text-28 text-18 mb-4 pb-6 relative after:content-[''] after:w-8 after:h-0.5 after:bg-primary after:absolute after:bottom-0 after:left-1/2">
                        Contact <span className="text-primary">Info</span>
                    </p>
                    <h2 className="text-white sm:text-36 text-27 font-medium">
                        Let’s Build Something Extraordinary – Together
                    </h2>
                    <div className="mt-16 border border-border grid lg:grid-cols-3 sm:grid-cols-2 border-opacity-20 py-16 gap-10 px-20 rounded-3xl sm:bg-perk bg-dark_grey bg-opacity-35 lg:bg-bottom bg-center bg-no-repeat">
                        {info.map((item, index) => (
                            <div
                                key={index}
                                className="text-center flex items-center justify-end flex-col"
                            >
                                <div className="bg-primary bg-opacity-25 backdrop-blur-sm p-4 rounded-full w-fit">
                                    <Image
                                        src={`${getImagePrefix()}${item.icon}`}
                                        alt={item.title}
                                        width={44}
                                        height={44}
                                    />
                                </div>
                                <h4 className={`text-white text-28 mb-4 ${item.space}`}>
                                    {item.title}
                                </h4>
                                <div
                                    className="text-muted text-opacity-60"
                                    dangerouslySetInnerHTML={{ __html: item.text }}
                                />
                            </div>
                        ))}
                    </div>
                    {/* Contact Form Box */}
                    <div className="mt-16 p-8 rounded-2xl bg-dark_grey bg-opacity-50 border border-border border-opacity-20 w-full max-w-3xl mx-auto">
                        <h3 className="text-white text-2xl font-semibold mb-6 text-center">Contact Us</h3>
                        <form className="flex flex-col gap-5">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="px-4 py-3 rounded-md bg-transparent border border-border text-white placeholder:text-muted focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="px-4 py-3 rounded-md bg-transparent border border-border text-white placeholder:text-muted focus:outline-none"
                            />
                            <textarea
                                placeholder="Your Message"
                                className="px-4 py-3 rounded-md bg-transparent border border-border text-white placeholder:text-muted focus:outline-none h-36 resize-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="mt-2 py-3 px-6 bg-primary text-black rounded-md font-semibold hover:bg-opacity-80 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60"></div>
        </section>
    );
};

export default Contact;
