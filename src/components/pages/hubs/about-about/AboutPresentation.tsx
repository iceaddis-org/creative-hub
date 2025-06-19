const AboutPresentation = ({ paragraph }: { paragraph: string }) => {
  return (
    <p className="px-4 py-16 font-display text-xl font-medium leading-none tracking-tighter md:px-8 md:text-3xl">
      {paragraph}
    </p>
  )
}

export default AboutPresentation
