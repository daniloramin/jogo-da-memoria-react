import React from "react";
import "./style.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";

function Footer(props) {
  return (
    <footer>
      <p>Site criado e desenvolvido por Danilo Ramin</p>
      <IconContext.Provider value={{ className: "socials" }}>
        <div>
          <a
            href="https://www.linkedin.com/in/danilo-ramin-3b65271b7/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/daniloramin" target="_blank">
            <FaGithub />
          </a>
          <a href="mailto:daniloramin@hotmail.com">
            <MdEmail />
          </a>
        </div>
      </IconContext.Provider>
    </footer>
  );
}

export default Footer;
