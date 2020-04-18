import React, { useState } from 'react';
import QrReader from 'react-qr-reader'
import Result from '../components/Result';

const App: React.FC<{}> = () => {
  const [result, setResult] = useState('')
  const handleScan = (scanResult: string) => scanResult && setResult(scanResult);
  const handleError = (err: Error) => console.log(err);
  return (
    <div>
      <QrReader
        delay={300}
        onScan={handleScan}
        onError={handleError}
        style={{ width: '100%', height: 'auto' }}
      />
      <Result url={result} />
    </div>
  );
};

export default App;
