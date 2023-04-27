import "./App.css";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Inbox } from "./pages/Inbox";
import { Spam } from "./pages/Spam";
import { Trash } from "./pages/Trash";
import { MailDetails } from "./components/MailDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/details/:mailId" element={<MailDetails />} />
        <Route path="/spam" element={<Spam />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </>
  );
}

export default App;
