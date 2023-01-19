type Props = {
  children: string;
  link: string;
};

const ButtonMain = ({ children, link }: Props) => {
  return (
    <a
      href={link}
      className="text-l flex h-max w-max cursor-pointer items-center justify-center rounded-sm bg-azure py-2 px-4 font-robotoCondensed font-light text-white drop-shadow-custom-small duration-200 ease-out hover:scale-110 hover:ease-out lg:text-xl"
    >
      {children}
    </a>
  );
};

export default ButtonMain;
