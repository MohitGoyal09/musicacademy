import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center animate-fade-in">
        <div className="text-center mb-8">
          <h2 className="text-lg md:text-xl font-medium text-teal-400 uppercase tracking-wider animate-pulse shadow-glow inline-block">
            Welcome to
          </h2>
          <h1 className="text-3xl md:text-6xl font-bold text-white my-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-teal-400 to-teal-500 animate-slide-up">
            Misra Music Academy
          </h1>
        </div>
        <h2 className="mt-8 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Master the art of music
        </h2>
        <p className="mt-6 font-normal text-base md:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.4s" }}>
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you&apos;re a beginner or looking to refine
          your skills, join us to unlock your true potential.
        </p>
        <div className="mt-8">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-semibold text-lg px-8 py-4 hover:scale-105 transition-transform duration-200"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;