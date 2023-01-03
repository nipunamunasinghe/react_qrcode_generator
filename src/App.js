import './App.css';
import QRCode from 'react-qr-code';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState("");
  const [qrvisible, setQrVisible] = useState(false);

  const generateQrCodeHandler = () => {
    
    if(!value){
      return;
    }

    setQrVisible(true);
  }

  return (
    <div className='container'>
      <h1>ReactJS QR Code Generator</h1>
      <input 
        type='text' 
        placeholder='Enter a URL...' 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={generateQrCodeHandler}>Generate QR Code</button>

      {qrvisible && <div className='qr-code-container'>
        
        <QRCode value={value} size='300' fgColor='#2596be' />

        </div>}
    </div>
  );
}

export default App;
