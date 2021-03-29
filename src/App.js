import React from 'react';
import Brojac from './Brojac';
import './App.css';
import BoljiBrojac from './BoljiBrojac';
import MainListe from './Liste/MainListe';

function App() {
  const [counts, setCounts] = React.useState([0,0,0]);

  const handleDesetice = (index) => {
    const newCounts = [...counts];
    newCounts[index] = newCounts[index] + 1;
    setCounts(newCounts);
  }

  return (
    <div>
      <h1>LISTE</h1>
      <MainListe />
      <hr/>
      <hr/>
      <div className="center">
        <BoljiBrojac step={5} begin={-985} />
        <hr />
        <BoljiBrojac step={15} />
        <hr />
        <p>Event okinut {counts[0]} puta</p>
        <Brojac korak={10} start={-10} onDesetice={() => {
                                                          console.log('Poziv start!');
                                                          handleDesetice(0);
                                                          console.log('Poziv gotov!');
                                                        }
                                                }></Brojac>
        <hr />
        <p>Event okinut {counts[1]} puta</p>
        <Brojac onDesetice={() => handleDesetice(1)}></Brojac>
        <hr />
        <p>Event okinut {counts[2]} puta</p>
        <Brojac korak={3} onDesetice={() => handleDesetice(2)}></Brojac>
      </div>
    </div>
  );
}

export default App;
