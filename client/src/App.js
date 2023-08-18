import './App.css';
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <div>
        {/* <Navbar /> */}
        <main>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
