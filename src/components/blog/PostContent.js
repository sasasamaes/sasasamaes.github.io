import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import AdBanner from "./AdBanner";

const MIN_PARAGRAPHS_FOR_MID_AD = 4;

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { url, fileName } = node.data.target.fields.file;
      return (
        <img
          src={`https:${url}`}
          alt={fileName}
          style={{ maxWidth: "100%", height: "auto", margin: "1rem 0" }}
        />
      );
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

export default function PostContent({ content }) {
  const nodes = content.content || [];
  const paragraphCount = nodes.filter((n) => n.nodeType === BLOCKS.PARAGRAPH).length;

  if (paragraphCount < MIN_PARAGRAPHS_FOR_MID_AD) {
    return <div className="post-content">{documentToReactComponents(content, renderOptions)}</div>;
  }

  const midIndex = Math.floor(nodes.length / 2);
  const firstHalf = { ...content, content: nodes.slice(0, midIndex) };
  const secondHalf = { ...content, content: nodes.slice(midIndex) };

  return (
    <div className="post-content">
      {documentToReactComponents(firstHalf, renderOptions)}
      <AdBanner slot="4488152998" />
      {documentToReactComponents(secondHalf, renderOptions)}
    </div>
  );
}
