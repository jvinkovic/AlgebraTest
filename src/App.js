import Brojac from './Brojac';

function App() {
  const handleDesetice = () => {
    console.log('neka desetica');
  }

  return (
    <div>
      <Brojac onDesetice={handleDesetice}></Brojac>
    </div>
  );
}

export default App;
