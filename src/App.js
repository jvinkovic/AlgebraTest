import Brojac from './Brojac';

function App() {
  const handleDesetice = () => {
    console.log('neka desetica');
  }

  return (
    <div>
      <Brojac start={23} onDesetice={handleDesetice}></Brojac>
      <hr />
      <Brojac onDesetice={handleDesetice}></Brojac>
    </div>
  );
}

export default App;
