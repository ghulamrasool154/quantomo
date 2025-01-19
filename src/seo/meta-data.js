export const META_DATA_OBJECT = (data, pageIndex) => {
  const pageData = data.pages[pageIndex];

  let title = `${data.name} :  ${pageData.title}`;
  let url = data.url + pageData.url;
  let description = pageData.metaDescription;

  const dynamicContent = pageData.content.reduce((acc, item) => {
    if (pageData.title === "Applications") {
      Object.entries(item).forEach(([key, value]) => {
        acc[key] = value;
      });
    } else {
      acc[item.section] = item.content;
    }
    return acc;
  }, {});

  return {
    title: title,
    description: description,
    generator: data.name,
    applicationName: data.name,
    referrer: "origin-when-cross-origin",
    keywords: pageData.keywords,
    authors: [{ name: data.name, url: url }],
    creator: ["Ghulam Rasool"],
    publisher: data.name,
    metadataBase: url,

    alternates: {
      canonical: "/",
    },
    other: {
      ...dynamicContent,
    },
    openGraph: {
      title: title,
      description: description,
    },
  };
};
