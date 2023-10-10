
import './App.css';

function App() {

  const handleClick = () => {
    // eslint-disable-next-line no-undef
    shareUrl.postMessage("Button clicked");
  }

  return (
    <div className="App">
      <button onClick={handleClick}>CLick me!</button>
    </div>
  );
}

export default App;
