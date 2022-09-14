import './App.css';
import axios from 'axios';

function App() {
  const getImage = () => {
    axios
      .get('https://api.memegen.link/templates/')
      .then((res) => {
        console.log(res.data.content);
      })
      .catch((err) => {
        console.log(err);
        console.log(getImage);
      });
  };
  console.log(getImage);

  return (
    <div className="App">
      <div>
        <button onClick={getImage}>Get Image</button>
      </div>
      <h1>React Meme Generator</h1>
      <br />
      <div
        className="memebox"
        style={{
          width: 350,
          height: 350,
          margin: '0 auto',
          border: '1px solid black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Hi
      </div>
      <br />
      <label>
        Top Text <input />
      </label>
      <br />
      <label>
        Bottom Text <input />
      </label>
      <br /> <br />
      Meme template <input /> <button>Submit</button>
      <br />
      <br />
      <button>Download</button>
    </div>
  );
}
export default App;
