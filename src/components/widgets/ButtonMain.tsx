type Props = {
  children: string;
  link: string;
};

const ButtonMain = ({ children, link }: Props) => {
  return (
    <a
      href={link}
      className="flex h-10 w-36 cursor-pointer items-center justify-center rounded-sm bg-azure font-robotoCondensed text-xl font-light text-white drop-shadow-custom-small duration-200 ease-out hover:scale-110 hover:ease-out"
    >
      {children}
    </a>
  );
};

export default ButtonMain;
