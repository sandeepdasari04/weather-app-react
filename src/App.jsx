import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Navbar />
      <SearchBar/>
      <Footer/>
    </>
  );
}

export default App;