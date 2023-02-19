import styles from './MenuLink.module.css';
import { useLocation, NavLink } from 'react-router-dom'
import React from 'react'

export default function MenuLink({children, to }) {

    const localizacao = useLocation();

  return (
//     <NavLink className={`${styles.link} ${localizacao.pathname === to ? styles.linkDestacado : ""}`} to={to}>
//     {children}
// </NavLink>
<NavLink className={`${styles.link} ${localizacao.pathname === to ? styles.linkDestacado : ""}`} to={to}>
  {children}
</NavLink>
  )
}
