import Image from "next/image";
import Link from "next/link";
import React from "react";

type TextNode = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
};

// Define all possible block types
type BlockType =
  | "h1"
  | "h2"
  | "h3"
  | "paragraph"
  | "image"
  | "link"
  | "ul"
  | "ol"
  | "li"
  | "blockquote";

type BaseNode = {
  type: BlockType;
  children?: (TextNode | BlockNode)[];
};

type ImageNode = {
  type: "image";
  url: string;
  alt?: string;
  caption?: string;
};

type LinkNode = {
  type: "link";
  url: string;
  newTab?: boolean;
  children?: (TextNode | BlockNode)[];
};

// Update BlockNode to be a discriminated union
export type BlockNode =
  | (BaseNode & { type: Exclude<BlockType, "image" | "link"> })
  | ImageNode
  | LinkNode;

type RichTextProps = {
  content?: BlockNode[];
};

const RichText: React.FC<RichTextProps> = ({ content }) => {
  if (!content) return null;

  const renderNode = (
    node: string | TextNode | BlockNode,
    index: string | number,
  ): React.ReactNode => {
    // Handle plain text nodes
    if (typeof node === "string") {
      return <span key={index}>{node}</span>;
    }

    // Handle text with formatting
    if ("text" in node) {
      let className = "";

      if (node.bold) {
        className += "font-bold ";
      }
      if (node.italic) {
        className += "italic ";
      }
      if (node.underline) {
        className += "underline ";
      }
      if (node.code) {
        return (
          <code
            key={index}
            className="rounded bg-gray-100 px-1 font-mono text-sm"
          >
            {node.text}
          </code>
        );
      }

      return (
        <span key={index} className={className.trim()}>
          {node.text}
        </span>
      );
    }

    // Handle different block types
    switch (node.type) {
      case "h1":
        return (
          <h1
            key={index}
            className="mb-6 mt-12 font-display text-xl lg:text-2xl font-bold tracking-tight text-gray-900"
          >
            {node.children?.map((child, i) =>
              renderNode(child, `${index}-${i}`),
            )}
          </h1>
        );

      case "h2":
        return (
          <h2
            key={index}
            className="mb-4 mt-10 font-display md:text-lg text-[20px] font-medium leading-none tracking-tight"
          >
            {node.children?.map((child, i) =>
              renderNode(child, `${index}-${i}`),
            )}
          </h2>
        );

      case "h3":
        return (
          <h3
            key={index}
            className="mb-4 mt-8 font-display text-base font-medium tracking-tight"
          >
            {node.children?.map((child, i) =>
              renderNode(child, `${index}-${i}`),
            )}
          </h3>
        );

      case "paragraph":
        return (
          <p key={index} className="mb-6 text-base leading-relaxed">
            {node.children?.map((child, i) =>
              renderNode(child, `${index}-${i}`),
            )}
          </p>
        );

      case "image":
        return (
          <figure key={index} className="relative my-12">
            <div className="md:aspect-video aspect-square overflow-hidden rounded-2xl">
              <Image
                src={node.url}
                alt={node.alt || ""}
                width={900}
                height={510}
                className="h-full w-full object-cover"
              />
            </div>
            {node.caption && (
              <figcaption className="absolute bottom-0 right-0 mt-3 rounded-tl bg-background p-2 text-sm leading-none opacity-80">
                {node.caption}
              </figcaption>
            )}
          </figure>
        );

      case "link":
        return (
          <Link
            key={index}
            href={node.url}
            target={node.newTab ? "_blank" : undefined}
            rel={node.newTab ? "noopener noreferrer" : undefined}
            className="text-blue-600 underline decoration-blue-300 underline-offset-2 transition-colors hover:text-blue-800 hover:decoration-blue-800"
          >
            {node.children?.map((child, i) =>
              renderNode(child, `${index}-${i}`),
            )}
          </Link>
        );

      case "ul":
        return (
          <ul key={index} className="mb-6 ml-6 list-disc space-y-2">
            {node.children?.map((child, i) =>
              renderNode(child, `${index}-${i}`),
            )}
          </ul>
        );

      case "ol":
        return (
          <ol key={index} className="mb-6 ml-6 list-decimal space-y-2">
            {node.children?.map((child, i) =>
              renderNode(child, `${index}-${i}`),
            )}
          </ol>
        );

      case "li":
        return (
          <li key={index} className="text-base leading-relaxed">
            {node.children?.map((child, i) =>
              renderNode(child, `${index}-${i}`),
            )}
          </li>
        );

      case "blockquote":
        return (
          <blockquote
            key={index}
            className="my-8 border-l-4 border-gray-200 bg-gray-50 py-4 pl-6 pr-4 italic"
          >
            {node.children?.map((child, i) =>
              renderNode(child, `${index}-${i}`),
            )}
          </blockquote>
        );
    }
  };

  return <div>{content.map((node, index) => renderNode(node, index))}</div>;
};

export default RichText;
