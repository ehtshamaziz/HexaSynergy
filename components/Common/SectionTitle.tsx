const SectionTitle = ({
  title,
  titleImportant,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  approach,
}: {
  title: string;
  titleImportant?: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  approach?: boolean;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${
          center
            ? "mx-auto text-center"
            : "mx-auto text-center lg:mx-0 lg:text-left"
        } ${approach && "px-6"}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}{" "}
          {titleImportant && (
            <span className="text-primary">{titleImportant}</span>
          )}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
