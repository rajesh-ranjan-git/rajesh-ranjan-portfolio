"use client";

import "@/app/globals.css";
import "@/services/logger/logger";
import Image from "next/image";
import { MdError } from "react-icons/md";
import { staticImagesConfig } from "@/config/common.config";
import { alkatra, arima, poppins, allura } from "@/config/font.config";
import Banner from "@/services/banner/banner";
import { ToastProvider } from "@/hooks/toast";
import ServiceWorker from "@/components/service-worker/service.worker";
import TitleManager from "@/components/title-manager/title.manager";
import ThemeManager from "@/components/theme/theme.manager";
import Sidebar from "@/components/sidebar/sidebar";
import Orb from "@/components/ui/background/orb";
import FloatingMenu from "@/components/ui/floating/floating.menu";
import ReloadButton from "@/components/ui/buttons/reload.button";

const GlobalError = () => {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${alkatra.variable} ${arima.variable} ${allura.variable} antialiased`}
        suppressHydrationWarning
      >
        <ServiceWorker />
        <TitleManager />
        <Orb />
        <ToastProvider>
          <Banner nodeVersion={process.version} />
          <ThemeManager />
          <Sidebar />
          <FloatingMenu />

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
                  <MdError className="text-red-600 text-2xl md:text-5xl" />
                  <h3 className="text-red-700 text-lg md:text-3xl">
                    Oops! An unexpected error occurred.
                  </h3>
                </div>

                <ReloadButton />
              </div>
            </main>
          </div>
        </ToastProvider>
      </body>
    </html>
  );
};

export default GlobalError;
