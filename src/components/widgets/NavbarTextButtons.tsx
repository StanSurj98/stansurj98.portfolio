type Props = {
  title: string;
  target: string;
};

const NavbarTextButtons = ({ title, target }: Props) => {
  return (
    <a href={`#${target}`} className="ml-6 cursor-pointer font-robotoCondensed text-xl font-light text-rich-black duration-200 ease-out hover:scale-105 hover:ease-in-out hover:text-azure">
      {title}
    </a>
  );
};

export default NavbarTextButtons;
