const generateSlugs = (params: Array<any>) => {
  const slugs = params.map((item: any) => {
    let slug = item.title.replace(/\s+/g, "-");
    if (!slug.endsWith("-")) {
      slug = slug + "-";
    }
    slug = slug + item.id.substring(0, 8);
    return { slug: slug.toLowerCase(), id: item.id };
  });
  return slugs;
};

export default generateSlugs;
