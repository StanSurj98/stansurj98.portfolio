type Props = {
  title: string;
};

const NavbarTextButtons = ({ title }: Props) => {
  return (
    <button className="ml-6 font-robotoCondensed text-xl font-light text-rich-black hover:scale-105">
      {title}
    </button>
  );
};

export default NavbarTextButtons;
