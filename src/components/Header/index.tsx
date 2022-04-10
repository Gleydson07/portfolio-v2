import React, { MouseEvent, useEffect, useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react'

import FlagButton from '../FlagButton';

import imgBrazil from '../../assets/imgs/header/brazil.png'
import imgEUA from '../../assets/imgs/header/eua.png'
import imgSpanish from '../../assets/imgs/header/spain.png'

import { Container } from './styles';
import loadLangText from '../../utils/TextConvert';
import Toggle from '../Toggle';
import { useTheme } from '../../hooks/useTheme';

const storageLangName = "gsantos@lang";

const Header: React.FC = () => {
  const {theme, toggleTheme} = useTheme();
  const [isOpenMenuBurger, setOpenMenuBurger] = useState(false);
  const [selected, setSelected] = useState("nav-home");  
  const [langSelected, setLangSelected] = useState(localStorage.getItem(storageLangName) || "pt-BR");

  const handleToggleTheme = () => {
    toggleTheme();
    setOpenMenuBurger(false);
  }

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const idSelected = event.currentTarget.id;

    setSelected(idSelected);
    setOpenMenuBurger(false);
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
    checkHashRouter();
  }, [])

  return (
    <Container 
      theme={theme}
      openMenuBurger={isOpenMenuBurger}
    >
      <div>
        <span>
          <strong>gsantos</strong>
          .dev
        </span>

        <nav>
          <div className='wrapper'>
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
              <li className='toggle-item'>
                <Toggle 
                  currentToggle={theme === "light" ? true : false}
                  onClick={handleToggleTheme}
                  size="medium"
                />
              </li>
            </ul>          
          </div>
        </nav>

        <div className='menu-burger-wrapper'>
          <Hamburger
            toggled={isOpenMenuBurger} 
            toggle={setOpenMenuBurger}
            color="#FFB802"
            distance="md"
            duration={0.8}
            size={32}
          />
        </div>
      </div>

    </Container>
  );
}

export default Header;