"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    // Simple canvas animation for a gaming-style effect
    const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
    const ctx = canvas?.getContext("2d");
    if (ctx) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = [];
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 2,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
        });
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        particles.forEach((particle) => {
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        });
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <canvas id="gameCanvas" className="absolute inset-0 z-0" />
      <div className="relative z-10 text-center">
        <h1 className="text-9xl font-bold animate-pulse">404</h1>
        <p className="mt-4 text-2xl font-semibold">
          Oops! This Page Got Lost in the Design Studio
        </p>
        <p className="mt-2 text-lg">
          It seems we couldn’t find the page you’re looking for. Let’s get you back to creativity!
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-indigo-600 px-6 py-3 text-lg font-medium text-white hover:bg-indigo-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}