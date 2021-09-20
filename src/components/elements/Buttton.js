import React from "react";
import { Link } from "react-router-dom";

const Buttton = ({ aText, aLink="/", dataEffect = "", classes, target = "" }) => {
  return (
    <>
      <Link
        to={aLink}
        data-effect={dataEffect}
        className={classes}
        target={target}
      >
        {aText}
      </Link>
    </>
  );
};

export default Buttton;
