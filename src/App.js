import './App.css';
import { saveAs } from 'file-saver';
import { useState } from 'react';

function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [template, setTemplate] = useState('buzz');
  const [download, setDownload] = useState(false);
  const url = `https://api.memegen.link/images/${template}/${topText}/${bottomText}`;
  // useState für URL!

  function downloadFile() {
    saveAs(url);
  }
  return (
    <div className="App">
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
        <img src={url} alt="random-meme" data-test-id="meme-image" />
      </div>
      <br />
      <label for="Top text">
        Top Text
        <input
          value={topText}
          onChange={(event) => {
            setTopText(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <label for="Bottom text">
        Bottom Text
        <input
          value={bottomText}
          onChange={(event) => {
            setBottomText(event.currentTarget.value);
          }}
        />
      </label>
      <br /> <br />
      <label for="Meme template">
        Meme template{' '}
        <input
          value={template}
          onChange={(event) => {
            setTemplate(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <br />
      <button
        value={download}
        onClick={() => {
          setDownload(downloadFile());
        }}
      >
        Download
      </button>
    </div>
  );
}

export default App;
