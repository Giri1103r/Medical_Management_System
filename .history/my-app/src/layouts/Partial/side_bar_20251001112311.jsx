import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaDatabase, FaTrash } from "react-icons/fa";

const SideBar = ({ item, menuData }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // find children for this item
  const children = menuData.filter(
    (child) => String(child.parent_id) === String(item._id)
  );

  const hasChildren = children.length > 0;

  return (
  
  );
};

const SidebarMenu = ({ menuData }) => {
  // only root items (parent_id = 0)
  const rootItems = menuData.filter((m) => String(m.parent_id) === "0");

 
};

export default SidebarMenu;
