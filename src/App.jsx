import { React } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Anasayfa";
import Hakkimizda from "./pages/Hakkimizda";
import Haberler from "./pages/Haberler";
import Iletisim from "./pages/Iletisim";
import GirisYap from "./pages/GirisYap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HaberDetay from './pages/HaberDetay';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("isLoggedIn"));
  return (
    <BrowserRouter>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/haberler" element={<Haberler />}/>
            <Route path="/hakkimizda" element={<Hakkimizda />}/>
            <Route path="/iletisim" element={<Iletisim />}/>
            <Route path="/giris" element={<GirisYap />} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <Route path="/haber/:haberId" element={<HaberDetay />} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
};

export default App;
