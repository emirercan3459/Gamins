import React, { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import haberler from '../data/haberler';
import HaberCard from "../components/Habercard";
function Anasayfa() {
    const [dolarData, setDolarData] = useState(null);
    useEffect(() => {
        fetch("https://finans.truncgil.com/today.json")
            .then(res => res.json())
           .then(data => {
               setDolarData(data["USD"]);
            })
           .catch(err => console.error("Döviz verisi alınamadı:", err));
    }, []);
    return (
        <>

            <div id="newsSlider" className="carousel slide container mt-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="slider slide1">
                            <Link to="haberler/1" className="text-white text-decoration-none">
                                <span className="h1">Steam Kış İndirimleri Başlıyor</span>
                                <br />
                                Detaylar için hemen tıkla!
                            </Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="slider slide2">
                            <Link to="haberler/2" className="text-white text-decoration-none">
                                <span className="h1">Epic Games'in ücretsiz oyunu duyruldu!</span>
                                <br />
                                Detaylar için hemen tıkla!
                            </Link>
                        </div>
                    </div>
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
                {dolarData && (
                    <div className="row">
                        <div className="col-md-9">
                            <h2 className="mb-4 mt-4">Döviz Kurları</h2>
                            {dolarData ? (
                                <div className="doviz-kurlari">
                                    <p><strong>Döviz:</strong> {dolarData.code}</p>
                                    <p><strong>Alış:</strong> {dolarData.banknoteBuying} TL</p>
                                    <p><strong>Satış:</strong> {dolarData.banknoteSelling} TL</p>
                                </div>
                            ) : (
                                <p>Döviz verisi yükleniyor...</p>
                            )}
                    </div>
                </div>
                )}
                <div className="row">
                    <div className="col-md-9">
                        <h2 className="mb-4 mt-4">Haberler</h2>
                            <HaberListesi />
                    </div>

                    <div className="col-md-3">
                        <h2 className="mb-4 mt-4">En Çok Okunanlar</h2>

                        <div className="encok-okunanlar row">
                            <div className="d-flex align-items-center">
                                <img src="assets/img/haber1.png" alt="Placeholder" className="me-3" />
                                <div id="encokokunan-1">
                                    <Link to="haberler/1">
                                        <h5 className="mb-0">Steam Kış İndirimleri</h5>
                                        <small className="text-white">Admin tarafından paylaşıldı!</small>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div className="encok-okunanlar row">
                            <div className="d-flex align-items-center">
                                <img src="assets/img/haber2.png" alt="Placeholder" className="me-3" />
                                <div id="encokokunan-2">
                                    <Link to="haberler/2">
                                        <h5 className="mb-0">GTA 6 Erken Erişim Dolandırıcılığı!</h5>
                                        <small className="text-white">Admin tarafından paylaşıldı!</small>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div className="encok-okunanlar row">
                            <div className="d-flex align-items-center">
                                <img src="assets/img/haber6.png" alt="Placeholder" className="me-3" />
                                <div id="encokokunan-6">
                                    <Link to="haberler/6">
                                        <h5 className="mb-0">Epic Games'in Yeni Ücretsiz Oyunu!</h5>
                                        <small className="text-white">Admin tarafından paylaşıldı!</small>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
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
