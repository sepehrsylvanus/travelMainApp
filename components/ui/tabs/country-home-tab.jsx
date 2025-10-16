import React from "react";
import TrendingPlans from "@/components/ui/plans/trending-plans";
import CommentCard from "@/components/ui/comment-card/comment-card";

function CountryHomeTab({ trans, locale }) {
  return (
    <section className="w-full flex page-up-animation flex-wrap ">
      <TrendingPlans locale={locale} trans={trans} />
      <section className="w-full flex flex-wrap ">
        <h3 className="w-full text-xl font-medium ps-6 flex flex-wrap">
          {trans("Tips and Advice")}
        </h3>
        {/* <div className="w-full bg-white flex flex-wrap  content-start p-4 pt-5 ">
                    <CommentCard trans={trans}/>
                    <CommentCard trans={trans}/>
                    <CommentCard trans={trans}/>
                </div> */}
      </section>
    </section>
  );
}

export default CountryHomeTab;
