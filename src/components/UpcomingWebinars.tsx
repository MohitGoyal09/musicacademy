"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "The Art of Songwriting",
      description:
        "Learn the craft of songwriting from experienced musicians and songwriters.",
      slug: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Mastering Your Instrument",
      description:
        "Advanced techniques to master your musical instrument of choice.",
      slug: "mastering-your-instrument",
      isFeatured: true,
    },
    {
      title: "Music Production Essentials",
      description:
        "Get started with music production with this comprehensive overview.",
      slug: "music-production-essentials",
      isFeatured: true,
    },
    {
      title: "Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies.",
      slug: "live-performance-techniques",
      isFeatured: true,
    },
    {
      title: "Digital Music Marketing",
      description:
        "Learn how to promote your music effectively in the digital age.",
      slug: "digital-music-marketing",
      isFeatured: true,
    },
  ];

  return (
    <div className="py-24 bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-400 font-semibold tracking-wide uppercase animate-pulse">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-4xl lg:text-5xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-teal-400 to-teal-500">
            Enhance Your Musical Journey
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Join our expert-led webinars and take your music skills to the next
            level
          </p>
        </div>

        <div className="mt-16">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: `webinars/${webinar.slug}`,
            }))}
          />
        </div>

        <div className="mt-20 text-center">
          <Link
            href={"/webinars"}
            className="inline-flex items-center px-8 py-3 rounded-full border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 font-semibold text-lg"
          >
            View All Webinars
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
