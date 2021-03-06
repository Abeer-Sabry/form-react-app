import "./App.css";
import AuthForm from "./components/Form/AuthForm";
import Header from "./components/Header/Header";
// --- Cover-Img
import banner from "./assets/cover.png";
// --- Components
import VerifyCard from "./components/VerifyCard/VerifyCard";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="appContainer">
        <AuthForm />
        <div>
          <img src={banner} alt="Courses Banner" />
        </div>
      </div>
      <VerifyCard />
    </div>
  );
}

export default App;
