import { getDictionary } from "@/localization/get-dictionary";
import ApplicationsPageScreen from "@/screen/applications";

import { META_DATA_OBJECT } from "@/seo/meta-data";

export async function generateMetadata({ params }) {
  const { content: { seo } } = await getDictionary(params.lang);

  return META_DATA_OBJECT(seo, 3);
}
export default async function Home({ params }) {
  const content = await getDictionary(params.lang);

  return (
    <ApplicationsPageScreen content={content.content.pages.applications} />
  );
}
