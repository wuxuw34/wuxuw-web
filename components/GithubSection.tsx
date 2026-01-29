"use client";
import Apis from "@/apis";
import { months, weeks } from "@/constans/date";
import { getFirstDayOfYear } from "@/utils/date";
import { useEffect, useState } from "react";

export default function GithubSection() {
  const [contributions, setContributions] =
    useState<(GithubContribution | null)[][]>();
  const [monthData, setMonthData] = useState<
    {
      month: string;
      colSpan: number;
    }[]
  >([]);
  const [firstDay, setFirstDay] = useState(getFirstDayOfYear()); // 这一年第一天是周几

  useEffect(() => {
    // 获取github热力图
    Apis.github.fetchContributions().then((data) => {
      // 这里需要计算一下，需要分组
      const map: (GithubContribution | null)[][] = [...weeks.map(() => [])];
      const offset = firstDay.getDay();
      let flag = 0; // 记录当前月份
      const monthData: {
        month: string;
        colSpan: number;
      }[] = [];
      for (let i = 0; i < data.contributions.length + offset; i++) {
        if (i < offset) {
          // 前面几天为null
          map[i].push(null);
        } else {
          const contribution = data.contributions[i - offset];
          const month = parseInt(contribution.date.split("-")[1]);
          console.log("月份", month, flag);
          if (month !== flag) {
            const maxColSpan = Math.max(...map.map((item) => item.length));
            const lastColSpan =
              flag <= monthData.length ? monthData[flag].colSpan : 0;
            monthData.push({
              month: months[month - 1],
              colSpan: maxColSpan - lastColSpan,
            });
            flag = month;
          }
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
      setMonthData(monthData);
    });
  }, [firstDay]);

  return (
    <div className="card flex flex-row flex-nowrap">
      <table
        role="grid"
        className="w-full"
      >
        <thead>
          <tr>
            <td className="text-xs w-[28px] opacity-0">周/月</td>
            {months.map((month) => (
              <td
                role="gridcell"
                colSpan={4}
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
                  {contribution?.level}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
