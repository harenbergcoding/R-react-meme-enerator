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
        <img src={url} alt="random-meme" data-test-id="meme-image"></img>
      </div>
      <br />
      <label>
        Top Text{' '}
        <input
          value={topText}
          onChange={(event) => {
            setTopText(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <label>
        Bottom Text{' '}
        <input
          value={bottomText}
          onChange={(event) => {
            setBottomText(event.currentTarget.value);
          }}
        />
      </label>
      <br /> <br />
      Meme template{' '}
      <input
        value={template}
        onChange={(event) => {
          setTemplate(event.currentTarget.value);
        }}
      />
      <br />
      <br />
      <button
        value={download}
        onClick={(event) => {
          setDownload(downloadFile());
        }}
      >
        Download
      </button>
    </div>
  );
}

export default App;
