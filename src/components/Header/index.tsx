import React, { MouseEvent, useEffect, useState } from 'react';

import FlagButton from '../FlagButton';

import imgBrazil from '../../assets/imgs/header/brazil.png'
import imgEUA from '../../assets/imgs/header/eua.png'
import imgSpanish from '../../assets/imgs/header/spain.png'

import { Container } from './styles';
import loadLangText from '../../utils/TextConvert';

const storageLangName = "gsantos@lang";

const Header: React.FC = () => {
  const [selected, setSelected] = useState("nav-home");  
  const [langSelected, setLangSelected] = useState(localStorage.getItem(storageLangName) || "en");

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const idSelected = event.currentTarget.id;

    setSelected(idSelected);
  }

  const handleChangeLang = (event: MouseEvent<HTMLButtonElement>) => {
    const langId = event.currentTarget.id;

    localStorage.setItem(storageLangName, langId);
    setLangSelected(langId);

    window.location.reload();
  }

  const checkHashRouter = () => {
    const currentHash = window.location.hash;
    
    if(currentHash === "#about"){
      setSelected("nav-about");
    }else if(currentHash === "#experience"){
      setSelected("nav-experience");
    }else if(currentHash === "#skills"){
      setSelected("nav-skills");
    }else if(currentHash === "#projects"){
      setSelected("nav-projects");
    }else{
      setSelected("nav-home")
    }
  }

  useEffect(() => {
    checkHashRouter()
  }, [])

  return (
    <Container>
      <div>
        <div className='logo-container'>
          <span>
            <strong>gsantos</strong>
            .dev
          </span>

          <div className="flag-container">
            <FlagButton
              id="pt-BR"
              image={imgBrazil}
              tooltip="Brasil"
              onClick={handleChangeLang}
              disabled={langSelected === "pt-BR"}
            />
            <FlagButton
              id="en"
              image={imgEUA}
              tooltip="USA"
              onClick={handleChangeLang}
              disabled={langSelected === "en"}
            />
            <FlagButton
              id="es"
              image={imgSpanish}
              tooltip="Espanã"
              onClick={handleChangeLang}
              disabled={langSelected === "es"}
            />
          </div>
        </div>
      
        <nav>
          <ul>
            <li>
              <a
                id="nav-home"
                href="/#home" 
                onClick={handleClick} 
                className={`${selected === "nav-home" ? "active" : ""}`} 
              >
                {loadLangText("app.header.home", "Início")}
              </a>
            </li>
            <li>
              <a
                id="nav-about"
                href="/#about" 
                onClick={handleClick} 
                className={`${selected === "nav-about" ? "active" : ""}`} 
              >
                {loadLangText("app.header.about", "Sobre mim")}
              </a>
            </li>
            <li>
              <a
                id="nav-experience"
                href="/#experience"
                onClick={(e:any) => handleClick(e)} 
                className={`${selected === "nav-experience" ? "active" : ""}`} 
              >
                {loadLangText("app.header.experience", "Experiências")}
              </a>
            </li>
            <li>
              <a
                id="nav-skills"
                href="/#skills"
                onClick={(e:any) => handleClick(e)} 
                className={`${selected === "nav-skills" ? "active" : ""}`} 
              >
                {loadLangText("app.header.skills", "Habilidades")}
              </a>
              
            </li>
            <li>
              <a
                id="nav-projects"
                href="/#projects"
                onClick={(e:any) => handleClick(e)} 
                className={`${selected === "nav-projects" ? "active" : ""}`} 
              >
                {loadLangText("app.header.projects", "Projetos")}
              </a>
            </li>
          </ul>
          
        </nav>
      </div>

    </Container>
  );
}

export default Header;