import { InsightCard, SectionTitle } from "@/components/ui";

type Blog = {
  id: string;
  title: string;
  description: string;
  dateTime: string;
  imageUrl: string;
};

interface RelatedPresentationProps {
  blogs: Blog[];
}

const RelatedPresentation = ({ blogs }: RelatedPresentationProps) => {
  return (
    <section className="md:py-16">
      <SectionTitle
        sectionName="Related"
        sectionTitle="Stay Informed, Stay Inspired"
      />
      <div className="mt-6 grid grid-cols-12 gap-x-4 gap-y-6 px-4 lg:mt-10 md:px-8">
        {blogs.map((blog) => (
          <InsightCard blog={blog} key={blog.id} />
        ))}
      </div>
    </section>
  );
};

export default RelatedPresentation;
