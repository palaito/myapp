import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import { Link } from "react-router-dom";


export default function Sidebar() {
 
  return (
    <Menu right >
     <Link to="/">Home</Link>
     <Link to="jgh">JGH</Link>
      <Link to="emisoras">Emisoras</Link>
      <Link to="rosario">Santo Rosario</Link>
      <Link to="evangelio">Evangelio</Link>
      <Link to="liturgia">Liturgia</Link>
       <Link to="biografias">Biografías</Link>

    </Menu>
  )
}








