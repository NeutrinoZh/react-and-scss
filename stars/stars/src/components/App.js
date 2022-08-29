import '../scss/components/App.scss';
import Stars from './Stars.js';
import Trash from './Trash';

function App() {
  return (
    <div className="app">
      <Stars numStars={5}/>
      <Trash />
    </div>
  );
}

export default App;