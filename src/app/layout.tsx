import "@/app/globals.css";
import "@/services/logger/logger";
import type { Metadata, Viewport } from "next";
import { alkatra, arima, poppins, allura } from "@/config/font.config";
import { ReactNodeProps } from "@/types/props/common.props.types";
import Banner from "@/services/banner/banner";
import { ToastProvider } from "@/hooks/toast";
import ServiceWorker from "@/components/service-worker/service.worker";
import TitleManager from "@/components/title-manager/title.manager";
import ErrorWrapper from "@/components/errors/error.wrapper";
import ThemeManager from "@/components/theme/theme.manager";
import Sidebar from "@/components/sidebar/sidebar";
import Orb from "@/components/ui/background/orb";
import FloatingMenu from "@/components/ui/floating/floating.menu";
import ScrollButton from "@/components/ui/buttons/scroll.button";

export const metadata: Metadata = {
  title: {
    absolute: "Rajesh Ranjan | Portfolio",
    default: "Portfolio",
    template: "%s | Portfolio",
  },
  description:
    "Welcome to Rajesh Ranjan's portfolio! This project showcases Rajesh Ranjan's work, skills, and experience as a Full Stack Developer, designer, or any other creative role. You’ll find a collection of Rajesh Ranjan's best projects, along with a brief overview of who he is and what he does.",
  icons: {
    icon: [
      {
        url: "/assets/favicon/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        url: "/assets/favicon/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/assets/favicon/favicon.ico",
    apple: [
      {
        url: "/assets/favicon/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },
  manifest: "/manifest/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const RootLayout = ({ children }: Readonly<ReactNodeProps>) => {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${alkatra.variable} ${arima.variable} ${poppins.variable} ${allura.variable} antialiased`}
        suppressHydrationWarning
      >
        <ServiceWorker />
        <TitleManager />
        <Orb />
        <ToastProvider>
          <Banner nodeVersion={process.version} />
          <ThemeManager />
          <Sidebar />

          <ErrorWrapper>
            <>
              <FloatingMenu />

              {children}

              <ScrollButton />
            </>
          </ErrorWrapper>
        </ToastProvider>
      </body>
    </html>
  );
};

export default RootLayout;
