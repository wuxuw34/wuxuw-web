"use client";
import Apis from "@/apis";
import { useEffect, useState } from "react";

export default function WakaTimeSection() {
  const [languages, setLanguages] = useState<WakaTimeLanguage[]>([]);

  useEffect(() => {
    Apis.wakatime.getLanguages().then((data) => {
      setLanguages(data.data);
    });
  }, []);

  useEffect(() => {
    Apis.wakatime.getCodingActivity().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="card">
      <div>
        <div>常用语言</div>
        <ul className="flex flex-col gap-2">
          {languages.slice(0, 4).map((language) => (
            <li
              key={language.name}
              className="flex flex-col gap-2 card"
            >
              <div className="flex flex-row gap-1 items-center">
                <span
                  className="w-[10px] h-[10px] rounded-full mr-2"
                  style={{
                    backgroundColor: language.color,
                  }}
                ></span>
                <span>{language.name}</span>
                <span className="text-secondary">{language.percent}%</span>
              </div>
              <div className="w-full bg-[rgba(255,255,255,0.1)] h-[6px] rounded-full">
                <span
                  className=" h-full block rounded-full bg-[rgba(255,255,255,0.5)]"
                  style={{
                    width: `${language.percent}%`,
                    backgroundColor: language.color,
                  }}
                ></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
