import { Link } from "react-scroll"
import style from './NavBar.module.css'
import { useState } from "react"
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const NavBar = () => {
  const[navBarOpen,setNavBarOpen] =useState(false)
  const links=[
    {
      id: 1,
      link:'Home',
    },
    {
      id: 2,
      link:'Service',
    },
    {
      id: 3,
      link:'Contact',
    },
  ]
  return (
      <div className={!navBarOpen===true ? style.navBar : style.navBarOpen}>
        <p>Briefcase |</p>
        {!navBarOpen ?
        <IoMenuOutline onClick={()=> setNavBarOpen(!navBarOpen)} size={25}/>
          : <IoCloseSharp onClick={()=> setNavBarOpen(!navBarOpen)} size={25}/>

      }

        {
          navBarOpen &&(
          <ul>
          {links.map((x)=>(
            <div>
              <Link>{x.link === "Service" ? "Estamos en Service":x.link}</Link>
            </div>
          ))}
        </ul>
        )}
      </div>
  )
}
export default NavBar