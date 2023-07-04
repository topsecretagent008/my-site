import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TrustToken() {
  const tasks = [
    {
      text: "Technologies: Node.js, Grunt, Bootstrap, Optimization, JavaScript, jQuery, API Development, CSS, HTML5, React, Sass",
      keywords: ["Apache POI"],
    },
    {
      text: "Supported and worked on several ad campaigns, including Apple to integrate into style.com.",
      keywords: ["scripts"],
    },
    {
      text: "- Contributed to the redesign and redevelopment team for style.com. Specifically developed the CMS for the editors, including the wireframes and design.",
      keywords: ["non-developers"],
    },
    {
      text: "On the redesign of style.com, I worked with a team of Java developers to ensure the CMS was connected to the custom API. ",
      keywords: ["non-developers"],
    },
    {
      text: "Designed the CMS with Bootstrap and developed custom functionality in JavaScript and jQuery.",
      keywords: ["non-developers"],
    },
    {
      text: "Before working on the redesign team, I worked to maintain and add small features such as custom sliders to the original style.com custom WordPress theme",
      keywords: ["non-developers"],
    },
    {
      text: " Researched and integrated new technologies such as React to the new site. ",
      keywords: ["non-developers"],
    },
    {
      text: "Optimized speed of the site.",
      keywords: ["non-developers"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Senior Full Stack Developer{" "}
            <span className="text-AAsecondary">@ DEVFORTRESS</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Sept 2013 - May 2015
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
