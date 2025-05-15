export const getProductMarkdown = async (index: number): Promise<string> => {
  try {
    const response = await fetch(`/upko/src/data/productMarkdownsDesc/${index}.md`);
    if (!response.ok) {
      throw new Error(`Failed to load markdown for product ${index}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error loading markdown for product ${index}:`, error);
    return "";
  }
};
