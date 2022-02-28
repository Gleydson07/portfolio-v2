import React, { useState } from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  const [selected, setSelected] = useState("nav-home");

  const handleClick = (event: any) => {
    const idSelected = event.target.id;
    setSelected(idSelected);
  }
  
  return (
    <Container>
      <div>
        <span>
          <strong>gsantos</strong>
          .dev
        </span>
      
        <nav>
          <ul>
            <li>
              <a
                id="nav-home"
                onClick={handleClick} 
                href="/#home" 
                className={`${selected === "nav-home" ? "active" : ""}`} 
              >
                Início
              </a>
            </li>
            <li>
              <a
                id="nav-about"
                onClick={handleClick} 
                href="/#about" 
                className={`${selected === "nav-about" ? "active" : ""}`} 
              >
                Sobre mim
              </a>
            </li>
            <li>
              <a
                id="nav-experience"
                onClick={(e:any) => handleClick(e)} 
                href="/#experience"
                className={`${selected === "nav-experience" ? "active" : ""}`} 
              >
                Experiências
              </a>
            </li>
            <li>
              <a
                id="nav-skills"
                onClick={(e:any) => handleClick(e)} 
                href="/#skills"
                className={`${selected === "nav-skills" ? "active" : ""}`} 
              >
                Skills
              </a>
              
            </li>
            <li>
              <a
                id="nav-projects"
                onClick={(e:any) => handleClick(e)} 
                href="/#projects"
                className={`${selected === "nav-projects" ? "active" : ""}`} 
              >
                Projetos
              </a>
            </li>
          </ul>
          
        </nav>
      </div>

    </Container>
  );
}

export default Header;