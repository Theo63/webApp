import { React, useState } from "react";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import UserFooter from "./components/UserFooter";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <MainPage />
      <UserFooter />
    </div>
  );
}

export default App;
