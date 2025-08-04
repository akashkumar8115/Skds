import { ChevronRight, Home } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative z-10 pt-8 pb-4">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Home className="w-4 h-4" />
          <span>Home</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">Services</span>
        </nav>
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-accent font-medium mb-4 tracking-wide uppercase">
            Explore Our Expertise
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient-cosmic">Crafting Excellence,</span>
            <br />
            <span className="text-foreground">One Pixel & Line at a Time.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From intuitive interfaces to powerful digital products our offerings are crafted to 
            drive impact, growth and delight. Explore the breadth of services that turn your 
            ideas into timeless solutions.
          </p>
        </div>
      </div>
    </header>
  );
}