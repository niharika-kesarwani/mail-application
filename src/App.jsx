/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Inbox } from "./pages/Inbox";
import { Spam } from "./pages/Spam";
import { Trash } from "./pages/Trash";
import { MailDetails } from "./components/MailDetails";

function App() {
  return (
    <div className="App">
      <h1 className="header">niharika's mail box</h1>
      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/details/:mailId" element={<MailDetails />} />
          <Route path="/spam" element={<Spam />} />
          <Route path="/trash" element={<Trash />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
