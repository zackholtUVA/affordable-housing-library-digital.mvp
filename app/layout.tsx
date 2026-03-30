import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";

import { AppFrame } from "@/components/layout/app-frame";
import { Providers } from "@/components/layout/providers";
import { APP_NAME, GLOBAL_DISCLAIMER, THEME_STORAGE_KEY } from "@/lib/constants";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${APP_NAME} MVP`,
  description: GLOBAL_DISCLAIMER,
};

const themeInitScript = `(() => {
  try {
    const key = "${THEME_STORAGE_KEY}";
    const persisted = localStorage.getItem(key);
    const theme = persisted === "light" || persisted === "dark" ? persisted : "dark";
    document.documentElement.dataset.theme = theme;
  } catch (_) {
    document.documentElement.dataset.theme = "dark";
  }
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <Providers>
          <div className="min-h-full bg-[var(--background)] text-[var(--text)]">
            <AppFrame>{children}</AppFrame>
          </div>
        </Providers>
      </body>
    </html>
  );
}
