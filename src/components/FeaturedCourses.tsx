"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import { BookOpen, Music, AlbumIcon } from "lucide-react";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  difficulty?: string; // Allow any string for difficulty
  totalLessons?: number;
}


function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-24 bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
      {/* Animated background grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
      />

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-base text-teal-400 font-semibold tracking-wide uppercase animate-pulse shadow-glow inline-block">
            FEATURED COURSES
          </h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mt-2 text-4xl lg:text-5xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-teal-400 to-teal-500"
          >
            Learn With the Best
          </motion.p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Discover our handpicked selection of premium music courses
          </p>
        </motion.div>
      </div>

      {/* Courses Grid */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          {featuredCourses.map((course: Course) => (
            <motion.div
              key={course.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="flex justify-center"
            >
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm transform hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-teal-500/50">
                <div className="p-6 sm:p-8 flex flex-col items-center text-center flex-grow">
                  {/* Course Icon */}
                  <div className="w-16 h-16 rounded-full bg-teal-500/10 flex items-center justify-center mb-4">
                    <Music className="w-8 h-8 text-teal-500" />
                  </div>

                  {/* Course Title */}
                  <p className="text-2xl font-bold text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>

                  {/* Course Description */}
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow mb-6">
                    {course.description}
                  </p>

                  {/* Additional Course Details */}
                  <div className="flex justify-between w-full text-sm text-neutral-500 mb-4">
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      <span>{course.totalLessons || "N/A"} Lessons</span>
                    </div>
                    <div className="flex items-center">
                      <AlbumIcon className="w-4 h-4 mr-2" />
                      <span>{course.difficulty || "Mixed"}</span>
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <Link
                    href={`/courses/${course.slug}`}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300 group"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* View All Courses Button */}
      <div className="mt-20 text-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href={"/courses"}
            className="inline-flex items-center px-8 py-3 rounded-full border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 font-semibold text-lg group"
          >
            View All Courses
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
        </motion.div>
      </div>
    </div>
  );
}

export default FeaturedCourses;
