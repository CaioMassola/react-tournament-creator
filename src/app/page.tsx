
"use client";

import { TranslateText } from "@/app/Utils/i18n"

export default function Home() {
  
  return (
      <div>
        <p>{TranslateText("hello", "home")}</p>
      </div>
  );
}