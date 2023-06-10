import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Totle() {
  const tasks = [
    {
      text: "Totle aggregates decentralized exchanges and synthetic asset providers into a suite of tools that makes it easy to access deep liquidity for DeFi assets at the best price. products using Google Assistant, Alexa, Siri and Cortana.",
      keywords: ["About Company"],
    },
    {
      text: "Developed decentralized token with Solidity, Web3 and Front-End based on React , Typescript",
      keywords: ["Next.js/React", "AWS", "Vercel"],
    },
    {
      text: "Developed decentralized token with Solidity, Web3 and Front-End based on React , Typescript",
      keywords: [],
    },
    {
      text: "Introduced COMP token",
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
            Feb 2019 - Nov 2022
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
