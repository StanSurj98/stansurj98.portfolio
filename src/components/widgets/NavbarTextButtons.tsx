type Props = {
  title: string;
  link: string;
  mainNav?: boolean;
  // ref: null | React.MutableRefObject<null>;
  // scrollToSection: (elmRef:any) => void
};

const NavbarTextButtons = ({ title, link, mainNav }: Props) => {
  let target = "";
  link[0] === "#" ? (target = "_self") : (target = "_blank");

  return (
    <a
      href={link}
      target={target}
      className={`cursor-pointer font-robotoCondensed text-xl font-light duration-200 ease-out hover:scale-105 hover:text-azure hover:ease-in-out`}
    >
      {title}
    </a>
  );
};

export default NavbarTextButtons;
