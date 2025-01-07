"use client";
import NavigationTop from "@/components/ui/navigation/navigation-top";
import SearchBox from "@/components/ui/search-box/search-box";
import ContinentsMenu from "@/components/ui/continents/continents-menu";
import TrendingPlans from "@/components/ui/plans/trending-plans";
import PlansYouJoined from "@/components/ui/plans-you-joined/plans-you-joined";
import DiscoverCountries from "@/components/ui/discover-countries/discover-countries";
import ExploreInterests from "@/components/ui/explore-interests/explore-interests";
import MainLayout from "@/components/layout/mainLayout";

import { useTranslations } from "next-intl";
import Welcome from "@/components/guidPages/Welcome";
import { useDispatch, useSelector } from "react-redux";

export default function Home({ params }) {
  const trans = useTranslations("translate");
  const openGuide = useSelector((state) => state.guide.open);

  if (!openGuide) {
    return (
      <MainLayout locale={params.locale}>
        <section className="w-full page-up-animation flex flex-wrap">
          <NavigationTop locale={params.locale} content={trans("title")} />
          <SearchBox trans={trans} />
          <section className="w-full flex flex-wrap bg-gradient-to-b pb-[70px] from-white to-main-white">
            {<ContinentsMenu />}
            <TrendingPlans locale={params.locale} trans={trans} />
            <PlansYouJoined locale={params.locale} trans={trans} />
            <DiscoverCountries locale={params.locale} trans={trans} />
            <ExploreInterests locale={params.locale} trans={trans} />
          </section>
        </section>
      </MainLayout>
    );
  } else {
    return <Welcome openGuide={openGuide.status} />;
  }
}
