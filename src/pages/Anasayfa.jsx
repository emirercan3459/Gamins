import React, { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import haberler from '../data/haberler';
import HaberCard from "../components/Habercard";
import EnCokOkunanlar from "../components/EnCokOkunanlar";
function Anasayfa() {
    const [dolarData, setDolarData] = useState(null);
    const [euroData, setEuroData] = useState(null);
    const [sliderHaberler, setSliderHaberler] = useState([]);
    useEffect(() => {
        fetch("https://finans.truncgil.com/today.json")
            .then(res => res.json())
           .then(data => {
               setDolarData(data["USD"]);
               setEuroData(data["EUR"]);
            })
           .catch(err => console.error("Döviz verisi alınamadı:", err));

        const karisik = [...haberler].sort(() => 0.5 - Math.random()).slice(0, 2);
        setSliderHaberler(karisik);
    }, []);
    return (
        <>

            <div id="newsSlider" className="carousel slide container mt-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {sliderHaberler.map((haber, index) => (
                        <div key={haber.haber_id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <div className="slider slide" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${haber.haber_resim})` }}>
                                <Link to={`/haberler/${haber.haber_id}`} className="text-white text-decoration-none">
                                    <span className="h1">{haber.haber_baslik}</span>
                                    <br />
                                    Detaylar için hemen tıkla!
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#newsSlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Geri</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#newsSlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">İleri</span>
                </button>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-9">
                        <h2 className="mb-4 mt-4">Haberler</h2>
                            <HaberListesi />
                    </div>

                    <div className="col-md-3">
                        <h2 className="mb-4 mt-4">En Çok Okunanlar</h2>
                        <EnCokOkunanlar /> 
                    </div>
                {dolarData && (
                    <div className="row">
                        <div className="col-md-12 text-center justify-content-center mt-5">
                            {dolarData ? (
                                <div className="doviz-kurlari">
                                    <p>Oyun Meraklıları için anlık döviz kurları</p>
                                    <p>
                                        <strong>Dolar (USD):</strong>
                                        Alış: {dolarData["Alış"]} TL |
                                        Satış: {dolarData["Satış"]} TL
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <strong>Euro (EUR):</strong>
                                        Alış: {euroData["Alış"]} TL |
                                        Satış: {euroData["Satış"]} TL
                                    </p>
                                </div>
                            ) : (
                                <p>Döviz verisi yükleniyor...</p>
                            )}
                    </div>
                </div>
                )}
                </div>
            </div>
        </>
    );
}
function HaberListesi() {
    const gosterilecekHaberler = [...haberler].reverse().slice(0, 2);

    return (
        <div className="row g-3">
            {gosterilecekHaberler.map((haber) => (
                <div className="col-md-6 mb-4" key={haber.haber_id}>
                    <HaberCard haber={haber} />
                </div>
            ))}
        </div>
    );
}
export default Anasayfa;
