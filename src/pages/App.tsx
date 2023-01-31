import Hand from "../domain/Hand";
import './App.css'

const App = () => {
  return (
    <>
      <header>Welcome to Sawan</header>
      <main>
        <h1>JSC Tarot fortune teller</h1>
        <Hand></Hand>
      </main>
      <footer role="complementary">JSC Tarot &copy; 2023 C&eacute;dric Rochefolle </footer>
    </>
  );
};

export default App;
