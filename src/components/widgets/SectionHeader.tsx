type Props = {
  header: string;
  tagline: string;
}

const SectionHeader = ({header, tagline}: Props) => {
  return (
    <div className="flex h-40 w-screen flex-col items-center justify-center">
      <h1 className="fontSize-smallHeader mb-4 font-robotoCondensed uppercase text-azure ">
        {header}
      </h1>
      <h1 className="fontSize-smallHeader font-robotoCondensed text-darksteel">
        {tagline}
      </h1>
    </div>
  );
};

export default SectionHeader;
