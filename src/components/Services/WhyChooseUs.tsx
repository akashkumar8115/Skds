import { CheckCircle, Target, Users, Lightbulb } from 'lucide-react';

const features = [
    {
        icon: Target,
        title: 'Four Pillars of Our Promise',
        description: 'Excellence in every pixel, innovation in every solution.'
    },
    {
        icon: CheckCircle,
        title: 'Innovations-First, User for Future',
        description: 'Pioneering tomorrow\'s technology today.'
    },
    {
        icon: Users,
        title: 'Our Team. Many Hats',
        description: 'Diverse expertise, unified vision.'
    },
    {
        icon: Lightbulb,
        title: 'Forward Thinking Underpinned',
        description: 'Strategic thinking meets creative execution.'
    }
];

export default function WhyChooseUs() {
    return (
        <section className="relative py-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            <span className="text-muted-foreground">Why Choose Us</span>
                        </h2>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-4 group">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <feature.icon className="w-4 h-4 text-primary-foreground" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                What Sets <span className="text-gradient-star">Shri Kishori Design Studio</span> Apart
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                In a universe where technology drives into limitless digital artistry. Blending rich cultural
                                aesthetics with forward-thinking creativity, we create standout experiences that connect, inspire,
                                and grow with your brand.
                            </p>
                        </div>

                        {/* Decorative Elements */}
                        <div className="relative">
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full animate-pulse-glow"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full animate-float"></div>

                            <div className="card-cosmic p-8 text-center">
                                <div className="text-accent text-sm font-medium mb-2">Ready to Transform?</div>
                                <h4 className="text-xl font-bold text-gradient-cosmic mb-4">
                                    Let's Create Something Extraordinary
                                </h4>
                                <p className="text-muted-foreground text-sm">
                                    Join hundreds of satisfied clients who've elevated their digital presence with us.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}