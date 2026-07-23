"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosWarning } from "react-icons/io";
import { staticImagesConfig } from "@/config/common.config";
import FloatingMenu from "@/components/ui/floating/floating.menu";
import BackButton from "@/components/ui/buttons/back.button";

const NotFound = () => {
  const [isBackAvailable, setIsBackAvailable] = useState<boolean>(false);

  useEffect(() => {
    if (window && window?.history?.length > 1) {
      setIsBackAvailable(true);
    } else {
      setIsBackAvailable(false);
    }
  }, []);

  return (
    <div className="flex flex-col bg-amber-100 w-full h-dvh overflow-hidden text-slate-900">
      <FloatingMenu />

      <main className="relative flex flex-1 overflow-hidden">
        <div className="relative flex flex-col flex-1 justify-center items-center gap-4 p-2 pb-20 md:pb-6 overflow-hidden">
          <div className="relative flex justify-center w-full overflow-hidden">
            <Image
              src={staticImagesConfig.notFoundError.src}
              alt={staticImagesConfig.notFoundError.alt}
              width={staticImagesConfig.notFoundError.width}
              height={staticImagesConfig.notFoundError.height}
              loading={staticImagesConfig.notFoundError.loading}
              className="object-contain select-none"
            />
          </div>

          <div className="flex justify-center items-center gap-2 mx-auto">
            <IoIosWarning className="text-amber-600 text-2xl md:text-5xl" />
            <h3 className="text-amber-700 text-lg md:text-3xl">
              The requested page does not exist!
            </h3>
          </div>

          <BackButton back={isBackAvailable} />
        </div>
      </main>
    </div>
  );
};

export default NotFound;
