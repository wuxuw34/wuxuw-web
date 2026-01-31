"use client";
const headerRow = ["日", "一", "二", "三", "四", "五", "六"];
import { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

export default function Calendar() {
  const [Days, setDays] = useState<number[][]>([]);
  useEffect(() => {
    // 获取当前月份的天数
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
    // 获取第一天是星期几
    const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1).getDay();
    // 几个星期
    const weeks = Math.ceil((daysInMonth + firstDayOfMonth) / 7);
    // 生成日期矩阵
    const daysMatrix: number[][] = [];
    for (let i = 0; i < weeks; i++) {
      const week: number[] = [];
      for (let j = 0; j < 7; j++) {
        const day = i * 7 + j - firstDayOfMonth + 1;
        if (day > 0 && day <= daysInMonth) {
          week.push(day);
        } else {
          week.push(0);
        }
      }
      daysMatrix.push(week);
    }
    const updateDays = () => {
      setDays(daysMatrix);
    };
    updateDays();
  }, []);

  return (
    <div className="card flex flex-col gap-3">
      <div className="flex flex-row gap-1 items-center">
        <FaCalendarAlt />
        {new Date().getFullYear()}年{new Date().getMonth() + 1}月
      </div>
      <div className="mini-card">
        <table className="border-none w-full">
          <thead>
            <tr>
              {headerRow.map((item) => (
                <th
                  className="w-[28px] h-[28px]"
                  key={item}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Days.map((week, index) => (
              <tr key={index}>
                {week.map((day) => (
                  <td
                    key={day}
                    style={{
                      opacity: day === 0 ? 0 : 1,
                      boxShadow:
                        day === new Date().getDate()
                          ? "0px 0px 3px 1px var(--color-blue-400)"
                          : "none",
                    }}
                    className="text-center w-[28px] h-[28px] rounded-sm"
                  >
                    {day}
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
