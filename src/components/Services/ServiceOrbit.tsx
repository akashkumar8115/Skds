import { Palette, Code, Smartphone, Gamepad2, TrendingUp, Brush } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'UX/UI Design',
    color: 'bg-gradient-to-br from-blue-500 to-purple-600',
    position: { top: '20%', left: '50%', transform: 'translateX(-50%)' }
  },
  {
    icon: Code,
    title: 'Web Development',
    color: 'bg-gradient-to-br from-green-500 to-teal-600',
    position: { top: '35%', right: '20%' }
  },
  {
    icon: Smartphone,
    title: 'App Development',
    color: 'bg-gradient-to-br from-orange-500 to-red-600',
    position: { bottom: '35%', right: '15%' }
  },
  {
    icon: Gamepad2,
    title: 'Game Development',
    color: 'bg-gradient-to-br from-purple-500 to-pink-600',
    position: { bottom: '20%', left: '50%', transform: 'translateX(-50%)' }
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing & SEO',
    color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
    position: { bottom: '35%', left: '15%' }
  },
  {
    icon: Brush,
    title: 'Graphic Design & Branding',
    color: 'bg-gradient-to-br from-pink-500 to-purple-600',
    position: { top: '35%', left: '20%' }
  }
];

export default function ServiceOrbit() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        {/* Central Hub */}
        <div className="relative w-96 h-96 mx-auto">
          {/* Orbital Rings */}
          <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-rotate-slow"></div>
          <div className="absolute inset-4 border border-secondary/20 rounded-full animate-rotate-medium reverse"></div>
          <div className="absolute inset-8 border border-accent/20 rounded-full animate-rotate-fast"></div>
          
          {/* Central Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 card-cosmic flex flex-col items-center justify-center text-center rounded-full">
              <h3 className="text-xl font-bold text-gradient-cosmic mb-2">
                From Vision to Execution
              </h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>UX/UI Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Web Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span>App Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span>Game Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Digital Marketing & SEO</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                  <span>Graphic Design & Branding</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Service Orbs */}
          {services.map((service, index) => (
            <div
              key={index}
              className="absolute w-16 h-16 rounded-full flex items-center justify-center animate-float cursor-pointer group"
              style={{
                ...service.position,
                animationDelay: `${index * 0.5}s`
              }}
            >
              <div className={`w-full h-full rounded-full ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-card text-card-foreground px-3 py-1 rounded-lg text-sm whitespace-nowrap shadow-lg">
                  {service.title}
                </div>
              </div>
            </div>
          ))}
          
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {services.map((_, index) => (
              <circle
                key={index}
                cx="50%"
                cy="50%"
                r={60 + index * 15}
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                strokeDasharray="5,5"
                className="animate-rotate-slow"
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}