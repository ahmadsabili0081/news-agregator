import { useState } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { categories } from "../../constants/categories";
import StyleNavbar from "./Navbar.module.css";
import news from "../../assets/newspaper-solid.svg";

let Navbar = () => {
  const [selected, setSelected] = useState(false);
  return (
    <nav className={StyleNavbar.nav}>
      <div className={StyleNavbar.navIconWrapper}>
        <img className={StyleNavbar.navIcon} src={news} alt="navbar icon" />
        <h1 className={StyleNavbar.navTitle}>NEWS</h1>
      </div>

      <div className={StyleNavbar.categories}>
        {categories.map((category, index) => {
          return (
            <Link
              key={index}
              onClick={() => {
                setSelected(category.name);
              }}
              to={`/${category.slug}`}
              className={classnames(StyleNavbar.category, {
                [StyleNavbar.selected]: selected === category.name,
              })}
            >
              {category.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
