import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function ItechArt() {
  const tasks = [
    {
      text: "Technologies: JavaScript, jQuery, API Development, Web Hosting, CSS3, HTML5, Search Engine Optimization (SEO), WordPress, Sass, Gulp, Node.js",
      keywords: ["About Company"],
    },
    {
      text: "Built the company's time tracking system in which 100+ employees would use on a biweekly basis using Google API.",
      keywords: ["VivaTech2022 event"],
    },
    {
      text: "Designed and developed the company's intranet system, which incorporated the original time tracker I built. This was built with Node.js, React, Google, MongoDB, and more",
      keywords: ["blockchain & Smart Contracts"],
    },
    {
      text: "Led and put together a team of developers to work on the company's intranet system.",
      keywords: ["blockchain & Smart Contracts"],
    },
    {
      text: "Collaborated with several teams to design and develop tools to help them.",
      keywords: ["blockchain & Smart Contracts"],
    },
    {
      text: "- Designed custom email templates.",
      keywords: ["blockchain & Smart Contracts"],
    },
    {
      text: "- Created a shopify custom template for their e-commerce business for selling their custom apparel",
      keywords: ["blockchain & Smart Contracts"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Senior Full Stack Developer <span className="text-AAsecondary">@ ROBOTS & PENCILS</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Jan 2020 - Aug 2022
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
