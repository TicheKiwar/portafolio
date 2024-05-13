import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import style from './Contact.module.css'

const Contact = () => {
  return (
    <footer className={style.first}>
       <div>
        <h3>Contacto</h3>
        <div>
          <FaEnvelope /> <a href="mailto:kiwartiche@gmail.com">kiwartiche@gmail.com</a>
        </div>
        <div>
          <FaPhone /> <span>+593 98 468 7334</span>
        </div>
        <div>
          <FaMapMarkerAlt /> <span>Ambato, Ecuador</span>
        </div>
      </div>
      <div>
      </div>
    </footer>
  )
}
export default Contact