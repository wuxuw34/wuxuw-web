"use client";
import Apis from "@/apis";
import { secondsToTime } from "@/utils/date";
import { useEffect, useState } from "react";

export default function WakaTimeSection() {
  const [languages, setLanguages] = useState<WakaTimeLanguage[]>([]);
  const [codingActivity, setCodingActivity] = useState<WakaTimeCodingActivity>(
    {} as WakaTimeCodingActivity,
  );

  useEffect(() => {
    Apis.wakatime.getLanguages().then((data) => {
      setLanguages(data.data);
    });
    Apis.wakatime.getCodingActivity().then((data) => {
      console.log(data);
      setCodingActivity(data);
    });
  }, []);

  return (
    <div className="card flex flex-col gap-2">
      <div>
        <div className="flex flex-col">
          <span>编码统计</span>
          <span className="text-secondary text-xs">所有时间 · All Time</span>
        </div>
        <div className="flex flex-row">
          <div className="mini-card flex flex-col items-center justify-center px-6 py-4">
            <span>
              {codingActivity?.data?.grand_total?.total_seconds
                ? secondsToTime(
                    codingActivity?.data?.grand_total?.total_seconds || 0,
                  )
                : "N/A"}
            </span>
            <span className="text-secondary text-sm">总时间</span>
          </div>
        </div>
      </div>
      <div>
        <div>常用语言</div>
        <ul className="flex flex-col gap-2">
          {languages.slice(0, 4).map((language) => (
            <li
              key={language.name}
              className="flex shadow flex-col gap-2 card"
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
