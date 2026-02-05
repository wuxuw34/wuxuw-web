"use client";
import Apis from "@/apis";
import { GrGithub } from "react-icons/gr";
import { githubContributionColor } from "@/constans/color";
import { months, weeks } from "@/constans/date";
import { getFirstDayOfYear } from "@/utils/date";
import { useEffect, useState } from "react";

export default function GithubSection() {
  const [contributions, setContributions] =
    useState<(GithubContribution | null)[][]>();
  const [monthsColSpan, setMonthsColSpan] = useState<number[]>([]);
  const [firstDay, setFirstDay] = useState(getFirstDayOfYear()); // 这一年第一天是周几
  const [year, setYear] = useState(firstDay.getFullYear());

  useEffect(() => {
    // 获取github热力图
    Apis.github.fetchContributions().then((data) => {
      // 这里需要计算一下，需要分组
      const map: (GithubContribution | null)[][] = [...weeks.map(() => [])];
      const offset = firstDay.getDay();
      const monthsColSpan: number[] = [];

      for (let i = 0; i < data.contributions.length + offset; i++) {
        if (i < offset) {
          // 前面几天为null
          map[i].push(null);
        } else {
          const contribution = data.contributions[i - offset];
          const month = parseInt(contribution.date.split("-")[1]);
          if (monthsColSpan.length < month) {
            monthsColSpan.push(0);
          }
          // 获取最长的月份
          const maxColSpan = Math.max(...map.map((item) => item.length));
          const lastColSpan = monthsColSpan
            .slice(0, -1)
            .reduce((prev, cur) => prev + cur, 0);
          monthsColSpan[month - 1] = maxColSpan - lastColSpan;
          map[i % 7].push(contribution);
        }
      }
      // 需要补齐
      const maxLength = Math.max(...map.map((item) => item.length));
      map.forEach((item) => {
        while (item.length < maxLength) {
          item.push(null);
        }
      });
      setContributions(map);
      console.log(monthsColSpan);
      setMonthsColSpan(monthsColSpan);
    });
  }, [firstDay]);

  return (
    <div className="card w-full">
      <div className=" flex flex-col gap-1">
        <div className="flex flex-row items-center gap-2">
          <GrGithub className="text-lg" />
          {year}年的贡献热力图
        </div>
        <div className="text-sm text-secondary">
          {contributions?.length} contributions in {year}
        </div>
      </div>
      <div className="overflow-x-auto w-full min-w-0">
        <table
          role="grid"
          className="table-spacing w-max"
        >
          <thead>
            <tr>
              <td className="text-xs w-[28px] opacity-0">周/月</td>
              {months.map((month, index) => (
                <td
                  role="gridcell"
                  colSpan={monthsColSpan[index]}
                  key={month}
                  className="text-xs"
                >
                  {month}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {weeks.map((week, index) => (
              <tr key={week}>
                <td
                  className={`text-xs w-[28px] ${index % 2 === 0 ? "opacity-0" : ""}`}
                >
                  {week}
                </td>
                {contributions?.[index].map((contribution, index) => (
                  <td
                    key={index}
                    colSpan={1}
                  >
                    <div
                      className="w-[12px] h-[12px] rounded-xs "
                      style={{
                        backgroundColor:
                          githubContributionColor[contribution?.level || 0],
                      }}
                    ></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
