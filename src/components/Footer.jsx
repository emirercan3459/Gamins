import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="text-center text-lg-start text-white">
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3 p-5">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold">Hakkımızda</h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                        <p>
                            Biz, oyunseverlerin bir araya gelip eğlenebileceği, yeni arkadaşlıklar kurabileceği ve en yeni oyun haberlerini takip edebileceği bir platform sunmaktan gurur duyuyoruz.
                        </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold">Son Okunanlar</h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                        <p>
                            <Link to="/haber-1" className="text-white">Steam Kış İndirimleri</Link>
                        </p>
                        <p>
                            <Link to="/haber-6" className="text-white">EpicGames Ücretsiz Oyun</Link>
                        </p>
                        <p>
                            <Link to="/haber-5" className="text-white">Valorant Yeni Karakter</Link>
                        </p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold">Hızlı Menü</h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                        <p>
                            <Link to="/" className="text-white">Anasayfa</Link>
                        </p>
                        <p>
                            <Link to="/haberler" className="text-white">Haberler</Link>
                        </p>
                        <p>
                            <Link to="/iletisim" className="text-white">İletişim</Link>
                        </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold">İLETİŞİM</h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                        <p>
                            <a href="https://wa.me/+908503022831" className="text-white">
                                <i className="fab fa-whatsapp me-2"></i> +90 (850) 302 28 31
                            </a>
                        </p>
                        <p>
                            <a href="mailto:ihbar@emirercan.net.tr" className="text-white">
                                <i className="fas fa-envelope me-2"></i> ihbar@emirercan.net.tr
                            </a>
                        </p>
                        <p>
                            <a href="https://www.linkedin.com/in/emir-ercan-b25133248/" className="text-white">
                                <i className="fab fa-linkedin me-2"></i> Emir Ercan
                            </a>
                        </p>
                        <p>
                            <a href="https://discord.gg/emirfw" className="text-white">
                                <i className="fab fa-discord me-2"></i> discord.gg/emirfw
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="copyright text-center p-3">
                © 2025 Copyright: <span className="text-white">Gamins</span>
            </div>
        </footer>
    );
}

export default Footer;
