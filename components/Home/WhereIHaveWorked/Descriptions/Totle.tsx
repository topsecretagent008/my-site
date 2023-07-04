import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Totle() {
  const tasks = [
    {
      text: "Technologies: Sketch, ACF, Webpack, Gulp, HTML, Shopify, Node.js, SCSS, CSS, WordPress, PHP, JavaScript",
      keywords: ["About Company"],
    },
    {
      text: "Worked on their main client Cosmos clinic",
      keywords: ["Next.js/React", "AWS", "Vercel"],
    },
    {
      text: "Worked to maintain cosmos clinic WordPress custom theme.",
      keywords: [],
    },
    {
      text: "Implemented multiple WordPress templates.",
      keywords: [],
    },
    {
      text: "Maintained Shopify sites and implemented custom features for a couple of clients.",
      keywords: [],
    },
    {
      text: "Designed multiple templates for clients using Sketch.",
      keywords: [],
    },
    {
      text: "- Worked with multiple WordPress themes to debug issues, implement new features and develop new templates.",
      keywords: [],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Senior Full Stack Developer
            <span className="text-AAsecondary"> @ SEYA GROUP</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Sep 2022 - May 2023
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
