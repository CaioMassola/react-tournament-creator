
"use client";

import { TranslateText } from "@/Utils/i18n"

export default function Home() {
  
  return (
      <div>
        <p>{TranslateText("hello", "home")}</p>
      </div>
  );
}