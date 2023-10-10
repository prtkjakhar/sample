
import './App.css';

function App() {

  const handleClick = () => {
    // eslint-disable-next-line no-undef
    if(shareUrl){
      alert("shareUrl found")
    }else if(window.shareUrl){
      alert("window.shareUrl found")
    }
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
