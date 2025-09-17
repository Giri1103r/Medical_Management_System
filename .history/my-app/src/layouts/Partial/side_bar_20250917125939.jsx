import React, { useState } from "react";
import { Link } from "react-router-dom";

const side_bar = ({item, menuData}) => {
      const [open, setOpen] = useState(false);

      const children = menuData.filter((child)=>child)

  return (
    <div>side_bar</div>
  )
}

export default side_bar