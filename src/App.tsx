import { useEffect, useState } from 'react';
import Header from './components/Header';
import { Hero } from './pages/Hero';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';

import { IntlProvider } from 'react-intl';
import { GlobalStyle } from './styles/theme';

import langPortugueseBrazil from "./lang/pt-br.json";
import langEnglish from "./lang/en-us.json";
import langSpanish from "./lang/es.json";
import { ThemeProvider } from './hooks/useTheme';


function App() {
  const [currentLanguageFile, setCurrentLanguageFile] = useState(langPortugueseBrazil);

  const loadLocale = () => {
    const localeSelected = localStorage.getItem("gsantos@lang") || navigator.language;
  
    if(localeSelected === "en"){
      setCurrentLanguageFile(langEnglish);
    }else if(localeSelected === "es"){
      setCurrentLanguageFile(langSpanish);
    }else{
      setCurrentLanguageFile(langPortugueseBrazil);
    }    
  }  
  
  useEffect(() => {
    loadLocale();
  }, []);

  return (
    <IntlProvider locale={navigator.language} messages={currentLanguageFile}>
      <ThemeProvider>
        <GlobalStyle/>
        <Header/>
        <Hero/>
        <About/>
        <Experience/>
        <Skills/>
        <Projects/>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default App;
