import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import webstatsLogo from "@/app/favicon.png"
import "./globals.css"
import { BottomGridSvg, TopGridSvg } from "@/svgs/gridSvgs"
import { Header } from "@/components/header/Header"
import { Footer } from "@/components/footer/Footer"

const inter = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Webstats: Kushal Kumar Saha",
	description: "Webstats: Kushal Kumar Saha",
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			{/* favicon ----------------- */}
			<head><link rel="shortcut icon" href={webstatsLogo.src}/></head>

			{/* layout ------------------ */}
			<body className="scrollbar-hide grid">
				<section className="row-start-1 col-start-1 h-full w-full">
					<TopGridSvg/>
					<BottomGridSvg/>
				</section>
				<section className="row-start-1 col-start-1 h-full w-full">
					<Header/>
					{children}
					<Footer/>
				</section>
			</body>
		</html>
	)
}
