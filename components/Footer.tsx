import { FC } from "react";

const Footer: FC = () => {
  const thisYear = new Date().getFullYear();

  return <footer>Copyright {thisYear} Ikram Maulana</footer>;
};

export default Footer;
