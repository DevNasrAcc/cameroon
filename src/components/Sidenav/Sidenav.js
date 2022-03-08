import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleData } from "../../redux/actions";
import { FETCH_CATEGORIES } from "../../constants/Routes";

export function SideBar() {
  const [openNav, setOpenNav] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader.loading);
  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    dispatch(handleData({}, FETCH_CATEGORIES));
  }, []);

  const onOpenNavHandler = (val) => {
    if (val === true) {
      document.getElementById("mySidenav").style.width = "250px";
    } else {
      document.getElementById("mySidenav").style.width = "80px";
    }
    setOpenNav(val);
  };

  return (
    <div id="mySidenav" className="sidenav">
      <span onClick={() => onOpenNavHandler(!openNav)}>
        <i
          className={
            openNav === false
              ? "icon fa fa-chevron-down"
              : "icon fa fa-chevron-right"
          }
        />
      </span>

      {categories.length > 0 &&
        categories.map((category) => (
          <Fragment key={category._id}>
            <a href="">
              {!openNav ? <i className="fa fa-user" /> : category.name}
            </a>
            <hr className="hr_class" />
          </Fragment>
        ))}
    </div>
  );
}

export default SideBar;
