import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function StoryMkrs() {
  const tasks = [
    {
      text: "Technologies: CSS3, C#, Sass, jQuery, API Development, JavaScript, HTML5, Adobe CS6,Mercurial, .NET, Micro Service, AWS, PostgreSQL",
      keywords: ["ReactJS", "TailwindCSS v1", "TypeScript"],
    },
    {
      text: "Collaborated with UI/UX designers, designers, and a team of Java back-end developers.",
      keywords: ["Next.js"],
    },
    {
      text: "Followed an iterative and incremental Agile software development framework for managing software projects and applications.",
      keywords: [],
    },
    {
      text: "Organized and helped maintain SASS files.",
      keywords: [],
    },
    {
      text: "Maintained and added new features to Yext's custom client platform that allowed company information to stay consistent on all social media platforms.",
      keywords: [],
    },
    {
      text: " Created a custom Yext application for Sears that used Google API.",
      keywords: [],
    },
    {
      text: "Rotated every two weeks to a new team to work as the sole fullstack developer, since I was one of two of the fullstack developers on the engineering team. ",
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
