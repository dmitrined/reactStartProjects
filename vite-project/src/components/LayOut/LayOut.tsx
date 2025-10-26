import type { JSX } from "react";
import { Outlet } from "react-router-dom";
import ProjectsListHome from "../ProjectsListHome/ProjectsListHome";
import style from "./LayOut.module.css"; 

export default function LayOut() : JSX.Element {
  return (
    <div className={style.layoutContainer}>
      
      <div className={style.sidebar}>
        <ProjectsListHome />
      </div>

      <div className={style.mainContent}>
        <Outlet />
      </div>

    </div>
  )
}