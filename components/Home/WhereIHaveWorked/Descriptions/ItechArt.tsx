import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function ItechArt() {
  const tasks = [
    {
      text: "ITechArt is a top-tier, one-stop custom software development company with a talent pool of 3500֡ experienced engineers. It help VC-backed startups and fast-growing tech companies build successful, scalable products that users love",
      keywords: ["About Company"],
    },
    {
      text: "Implemented a taxonomy types for risk controls",
      keywords: ["VivaTech2022 event"],
    },
    {
      text: "Improved access control system",
      keywords: ["blockchain & Smart Contracts"],
    },
    {
      text: "Developed features related with risks and risk controls",
      keywords: ["blockchain & Smart Contracts"],
    },
    {
      text: "Data migrations, data model tranformations",
      keywords: ["blockchain & Smart Contracts"],
    },
    {
      text: "Cover logic changes and migrations with tests",
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
            July 2016 - Dec 2018
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
