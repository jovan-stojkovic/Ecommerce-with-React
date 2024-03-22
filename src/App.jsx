import "./Style.scss";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App = () => {
  return (
    <main>
      <div className="container">
        <Navbar />
        <Main />
      </div>
    </main>
  );
};

export default App;
