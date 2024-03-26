import { maxContentSpace } from "@/decorators/universals"
import { SiteList } from "@/components/siteList/SiteList"
import { StatsContainer } from "@/components/mainData/statsContainer/StatsContainer"

export default function HomePage() {
	return (
		<div className={`px-4 md:px-8 ${maxContentSpace} overflow-hidden flex flex-col gap-5 md:pt-4 md:gap-6 md:flex-row items-stretch justify-start md:justify-stretch w-full h-full relative`} >
			<SiteList/>
			<StatsContainer title="" dataAttrVal="" highlightsData={{}} monthlyViews={[]} link=""/>
		</div>
	)
}
