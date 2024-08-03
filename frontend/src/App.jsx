import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


function App() {
  return (
    <>
      <header >
        <Navbar />
      </header>
      <main className="mt-5">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
