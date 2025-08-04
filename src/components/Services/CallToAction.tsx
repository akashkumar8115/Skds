// File: src/components/Services/CallToAction.tsx
"use client";

import { ArrowRight, Rocket } from 'lucide-react';

export default function CallToAction(): JSX.Element {
    return (
        <section className="relative py-20">
            <div className="container mx-auto px-4">
                {/* CTA Card */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Background Elements */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full animate-pulse-glow"></div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full animate-float"></div>

                    {/* Main CTA Card */}
                    <div className="relative card-cosmic p-8 md:p-12 text-center overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            <div
                                className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse"
                                style={{ animationDelay: '1s' }}
                            ></div>
                            <div
                                className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"
                                style={{ animationDelay: '2s' }}
                            ></div>
                        </div>

                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 animate-float">
                                <Rocket className="w-8 h-8 text-primary-foreground" />
                            </div>

                            {/* Content */}
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                <span className="text-gradient-cosmic">Let's Build Something</span>
                                <br />
                                <span className="text-foreground">That Speaks for Itself</span>
                            </h2>

                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                                Your vision deserves more than just execution—it needs thoughtful strategy, creative passion, and technical
                                excellence. Partner with us to craft digital experiences that connect, convert, and captivate.
                            </p>

                            {/* CTA Button */}
                            <button className="group btn-cosmic inline-flex items-center space-x-3 text-lg">
                                <span>Start Your Project</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>

                            {/* Additional Info */}
                            <div className="mt-8 pt-8 border-t border-border/50">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-gradient-star mb-1">500+</div>
                                        <div className="text-sm text-muted-foreground">Projects Delivered</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gradient-star mb-1">98%</div>
                                        <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gradient-star mb-1">24/7</div>
                                        <div className="text-sm text-muted-foreground">Support Available</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}