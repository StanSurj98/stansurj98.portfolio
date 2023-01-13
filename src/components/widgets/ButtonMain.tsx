type Props = {
  children: string;
  onClick: any;
};

const ButtonMain = ({ children, onClick }: Props) => {
  return (
    <button
      className="h-10 w-36 cursor-pointer rounded-sm bg-azure font-robotoCondensed text-xl font-light text-white drop-shadow-custom-small duration-200 ease-out hover:scale-110 hover:ease-out"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonMain;
