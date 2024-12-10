"use client";

import { PiWarningDiamondFill } from "react-icons/pi";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen grid place-content-center gap-4">
      <div className="card flex flex-col gap-8 items-center relative">
        <PiWarningDiamondFill className="absolute -top-0 -translate-y-[calc(100%-1rem)] text-9xl text-theme" />
        <p className="text-lg">Apologies.. Something has gone wrong</p>
        <div className="flex gap-2">
          <button onClick={() => router.back()} className="action-button">
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
