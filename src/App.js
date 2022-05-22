import { React, useState } from 'react'
import MainPage from './components/MainPage';
import Footer from './components/Footer'

function App() {
  const [inputText, setInputText] = useState('')
  return (
    <div >
        <MainPage />
        <Footer />
    </div>
  );
}

export default App;
