import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import NavigationTop from "@/components/NavigationTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The LifeLine Canada Foundation",
    template: "%s - The LifeLine Canada Foundation",
  },
  description:
    "Our mission is to raise awareness of risk factors, delivering programs for positive mental health development, providing access to available resource options, and promoting local programs to build mental health resilience for all",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <NavigationTop />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
