import '../PageAtt.css';
import { useState, useEffect } from 'react';

function PageAtt() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('Bienvenue sur la page d\'attente !');
  }, []);

  return (
    <div className="PageAtt">
      <h1>{message}</h1>
    </div>
  );
}

export default PageAtt;
