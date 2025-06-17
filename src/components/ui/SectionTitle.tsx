interface SectionTitleProps {
  sectionName: string;
  sectionTitle: string;
}

const SectionTitle = ({ sectionName, sectionTitle }: SectionTitleProps) => (
  <div className="px-4 md:px-8">
    <div className="grid justify-between gap-2 border-b border-border pb-4 lg:grid-cols-12 lg:gap-0 lg:pb-6">
      <span className="col-span-3 md:text-lg">{sectionName}</span>
      <span className="font-display text-2xl font-medium uppercase leading-none tracking-tighter md:text-xl lg:col-span-5 lg:col-start-8 lg:text-3xl">
        {sectionTitle}
      </span>
    </div>
  </div>
);

export default SectionTitle;
