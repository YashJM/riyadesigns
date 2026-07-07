import { aksharPacksCaseStudy } from "@/lib/case-studies/akshar-packs";
import { appleTvPlusCaseStudy } from "@/lib/case-studies/apple-tv-plus";
import { googlePayAiCaseStudy } from "@/lib/case-studies/google-pay-ai";
import { shopifyAnalyticsCaseStudy } from "@/lib/case-studies/shopify-analytics";
import { zappWalletCaseStudy } from "@/lib/case-studies/zapp-wallet";
import type { CaseStudyData } from "@/lib/case-studies/types";
import type { WorkProjectSlug } from "@/lib/work-projects";

const CASE_STUDIES: Record<WorkProjectSlug, CaseStudyData> = {
  "akshar-packs": aksharPacksCaseStudy,
  "apple-tv-plus": appleTvPlusCaseStudy,
  "google-pay-ai": googlePayAiCaseStudy,
  "shopify-analytics": shopifyAnalyticsCaseStudy,
  "zapp-wallet": zappWalletCaseStudy,
};

export function getCaseStudyBySlug(slug: WorkProjectSlug): CaseStudyData {
  return CASE_STUDIES[slug];
}
