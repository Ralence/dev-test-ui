import Header from "./components/header/Header";
import PageTitle from "./components/page-title/PageTitle";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <PageTitle />
    </div>
  );
}

export default App;
