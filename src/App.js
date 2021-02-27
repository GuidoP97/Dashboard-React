import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Overview from './components/Overview';
import Switch from './components/Switch';
import TopCardList from './components/TopCardList';
import './Globals.css';

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked] = useState(false)

  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  function changeMedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  },[])

  return (
    <main className={mainClass}>
      <Header>
        <Switch 
          setDarkMode={setDarkMode}
          setChecked={setChecked}
          checked={checked}
        />
      </Header>
      <TopCardList/>
      <Overview/>
    </main>
  );
}

export default App;