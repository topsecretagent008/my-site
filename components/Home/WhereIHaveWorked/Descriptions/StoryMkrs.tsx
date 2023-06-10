import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function StoryMkrs() {
  const tasks = [
    {
      text: "Developed CMS and E-commerce platforms with PHP and JavaScript.",
      keywords: ["ReactJS", "TailwindCSS v1", "TypeScript"],
    },
    {
      text: "Developed an ecommerce analytics application using React, Laravel, and MySQL.",
      keywords: ["Next.js"],
    },
    {
      text: "Had some experience in chrome extension development.",
      keywords: [],
    },
    {
      text: "Facilitated maintenance and development of different projects.",
      keywords: [],
    },
    {
      text: "Participated in cross-functional team discussions to formulate effective development and maintenance strategies throughout all systems",
      keywords: [],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Fullstack developer{" "}
            <span className="text-AAsecondary">@ TWG</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Nov 2012 - July 2013
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
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
