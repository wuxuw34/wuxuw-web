import Apis from "@/apis";
import { useEffect } from "react";

export default function WakaTimeSection() {
  useEffect(() => {
    Apis.wakatime.getCodingActivity();
  }, []);

  return <div></div>;
}
