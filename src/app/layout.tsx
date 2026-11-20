import "@/app/globals.css";
import type { Metadata, Viewport } from "next";
import { alkatra, arima, poppins, allura } from "@/config/font.config";
import { MAIN_CONTENT_ID, themeInitScript } from "@/config/common.config";
import { SITE_URL, seoConfig } from "@/config/seo.config";
import { ReactNodeProps } from "@/types/props/common.props.types";
import ServiceWorker from "@/components/service-worker/service.worker";
import TitleManager from "@/components/title-manager/title.manager";
import ErrorWrapper from "@/components/errors/error.wrapper";
import ThemeManager from "@/components/theme/theme.manager";
import Sidebar from "@/components/sidebar/sidebar";
import ToastProvider from "@/components/ui/toast/toast.provider";
import Orb from "@/components/ui/background/orb";
import FloatingMenu from "@/components/ui/floating/floating.menu";
import ScrollButton from "@/components/ui/buttons/scroll.button";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: seoConfig.title,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.description,
  applicationName: seoConfig.siteName,
  authors: [{ name: seoConfig.siteName, url: SITE_URL }],
  creator: seoConfig.siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: seoConfig.siteName,
    locale: seoConfig.locale,
    title: seoConfig.title,
    description: seoConfig.description,
    url: "/",
    images: [seoConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    creator: seoConfig.twitterHandle,
    images: [seoConfig.ogImage.url],
  },
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
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${alkatra.variable} ${arima.variable} ${poppins.variable} ${allura.variable} antialiased`}
        suppressHydrationWarning
      >
        <a
          href={`#${MAIN_CONTENT_ID}`}
          className="skip-link"
        >
          Skip to main content
        </a>

        <ServiceWorker />
        <TitleManager />
        <Orb />

        <ToastProvider>
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
