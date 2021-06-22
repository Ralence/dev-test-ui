import Header from "./components/header/Header";
import PageTitle from "./components/page-title/PageTitle";
import DriverInfo from "./components/driver-info/DriverInfo";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <PageTitle />
      <DriverInfo />
    </div>
  );
}

export default App;
