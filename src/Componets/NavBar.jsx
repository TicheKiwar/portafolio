import { Link } from "react-scroll"
import style from './NavBar.module.css'
import { FaGithub } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";



const NavBar = () => {
  
  const links=[
    {
      id: 1,
      link: <FaGithub size={20}/>,
      url: 'https://github.com/TicheKiwar',
    },
    {
      id: 2,
      link:<IoIosContact size={20}/>,
      url: 'https://github.com/TicheKiwar',
    },
    {
      id: 3,
      link:'Contact',
      url: 'https://github.com/TicheKiwar',
    },
  ]
  return (
      <div className={style.navBar}>
        <p>Briefcase |</p>
          <ul style={{ display: 'flex', listStyle: 'none' }}>
          {links.map((x)=>(
            <li key={x.id} style={{ marginRight: '20px' }}>
              <Link to={x.url}>{x.link}</Link>
            </li>
          ))}
        </ul>
      </div>
  )
}
export default NavBar