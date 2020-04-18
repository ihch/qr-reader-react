import React, { useState } from 'react';
import QrReader from 'react-qr-reader'
import Header from '../components/Header';
import Result from '../components/Result';
import Footer from '../components/Footer';

const App: React.FC<{}> = () => {
  const [result, setResult] = useState('')
  const handleScan = (scanResult: string) => scanResult && setResult(scanResult);
  const handleError = (err: Error) => console.log(err);
  return (
    <div>
      <Header />
      <QrReader
        delay={300}
        onScan={handleScan}
        onError={handleError}
        style={{ width: '100%', height: 'auto' }}
      />
      <Result url={result} />
      <Footer />
    </div>
  );
};

export default App;
