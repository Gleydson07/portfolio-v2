import React, { useState } from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  const [selected, setSelected] = useState("home");

  const handleClick = (event: any) => {
    setSelected(event.target.id);
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
                id="home"
                onClick={handleClick} 
                href="/#home" 
                className={`${selected === "home" ? "active" : ""}`} 
              >
                Início
              </a>
            </li>
            <li>
              <a
                id="about"
                onClick={handleClick} 
                href="/#about" 
                className={`${selected === "about" ? "active" : ""}`} 
              >
                Sobre mim
              </a>
            </li>
            <li>
              <a
                id="experience"
                onClick={(e:any) => handleClick(e)} 
                href="/#experience"
                className={`${selected === "experience" ? "active" : ""}`} 
              >
                Experiências
              </a>
            </li>
            <li>
              <a
                id="skills"
                onClick={(e:any) => handleClick(e)} 
                href="/#skills"
                className={`${selected === "skills" ? "active" : ""}`} 
              >
                Skills
              </a>
              
            </li>
            <li>
              <a
                id="projects"
                onClick={(e:any) => handleClick(e)} 
                href="/#projects"
                className={`${selected === "projects" ? "active" : ""}`} 
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