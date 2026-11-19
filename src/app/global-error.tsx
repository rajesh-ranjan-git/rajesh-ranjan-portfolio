"use client";

import "@/app/globals.css";
import { useEffect } from "react";
import Image from "next/image";
import { MdError } from "react-icons/md";
import { staticImagesConfig } from "@/config/common.config";
import { alkatra, arima, poppins, allura } from "@/config/font.config";
import logger from "@/services/logger/logger";
import Orb from "@/components/ui/background/orb";
import ReloadButton from "@/components/ui/buttons/reload.button";

const GlobalError = ({ error }: { error: Error & { digest?: string } }) => {
  useEffect(() => {
    logger.error("❌ [GLOBAL ERROR] Unhandled application error:", {
      message: error.message,
      digest: error.digest,
    });
  }, [error]);

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${alkatra.variable} ${arima.variable} ${allura.variable} antialiased`}
        suppressHydrationWarning
      >
        <Orb />

        <div className="flex flex-col bg-red-100 h-dvh overflow-hidden text-slate-900">
          <main className="relative flex flex-1 overflow-hidden">
            <div className="relative flex flex-col flex-1 justify-center items-center gap-4 p-2 pb-20 md:pb-6 overflow-hidden">
              <div className="relative flex justify-center w-full overflow-hidden">
                <Image
                  src={staticImagesConfig.unexpectedError.src}
                  alt={staticImagesConfig.unexpectedError.alt}
                  width={staticImagesConfig.unexpectedError.width}
                  height={staticImagesConfig.unexpectedError.height}
                  loading={staticImagesConfig.unexpectedError.loading}
                  className="object-contain select-none"
                />
              </div>

              <div className="flex justify-center items-center gap-2 mx-auto">
                <MdError className="text-error text-2xl md:text-5xl" />
                <h1 className="font-bold text-error text-lg md:text-3xl">
                  Oops! An unexpected error occurred.
                </h1>
              </div>

              <ReloadButton />
            </div>
          </main>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
