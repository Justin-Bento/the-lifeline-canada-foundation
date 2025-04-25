import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import NavigationTop from "@/components/NavigationTop";
import NavigationBottom from "@/components/NavigationBottom";
import { cookies } from "next/headers";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <main className="w-full">
            <NavigationTop />
            {children}
            <NavigationBottom />
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
