import SectionTitle from "@/components/ui/SectionTitle";
import { Gallery } from "@/components/layout";

type Image = {
  id: string;
  url: string;
  alt: string;
};

interface GalleryPresentationProps {
  images: Image[][];
}

const GalleryPresentation = ({ images }: GalleryPresentationProps) => {
  return (
    <section className="py-8 md:py-16">
      <SectionTitle
        sectionName="Gallery"
        sectionTitle="Celebrating Notable Guests"
      />

      <div className="mt-10">
        <Gallery images={images} />
      </div>
    </section>
  );
};

export default GalleryPresentation;
