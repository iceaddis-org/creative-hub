import RichText, { BlockNode } from "@/components/layout/RichText";
import Image from "next/image";

interface ArticlePresentationProps {
  post: {
    title: string;
    headerImage: string;
    author: string;
    authorAvatar: string;
    content: BlockNode[];
  };
}

const ArticlePresentation = ({ post }: ArticlePresentationProps) => {
  return (
    <>
      <header className="relative grid grid-cols-12 items-center gap-4 px-4 py-16 md:px-8">
        <div className="absolute inset-0">
          <Image
            src={post.headerImage}
            alt="Header background"
            className="h-full w-full object-cover"
            priority
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60" />
        </div>

        <h1 className="z-10 col-span-12 font-display text-xl font-medium leading-[110%] tracking-tighter text-white md:col-span-10 md:col-start-2 md:text-xl md:leading-[2.5rem] lg:col-span-8 lg:col-start-3 lg:text-3xl lg:leading-none">
          {post.title}
        </h1>
        <div className="z-10 col-span-12 flex items-center gap-2 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
          <div className="aspect-square w-10 overflow-hidden rounded-full md:w-12">
            <Image
              src={post.authorAvatar}
              width={80}
              height={80}
              alt={post.author}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-background">{post.author}</span>
        </div>
      </header>
      <main className="grid grid-cols-12 gap-4 px-4 py-8 md:px-8 md:py-12">
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
          <RichText content={post.content} />
        </div>
      </main>
    </>
  );
};

export default ArticlePresentation;
