import React from "react";
import { Link } from "react-router-dom";
function Header() {
    return (
        <>
		<div className="page-logo py-4">
			<div className="container">
				<div className="top-logo">
					<img src="/assets/img/logo.png" width="250" alt="" />
				</div>
			</div>
		</div>
		<header className="sticky-top">
			<nav className="navbar navbar-expand-lg navbar-dark">
				<div className="container-fluid d-flex justify-content-between align-items-center">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item"><Link to="/" className="nav-link">Anasayfa</Link></li>
							<li className="nav-item"><Link to="/haberler" className="nav-link">Haberler</Link></li>
							<li className="nav-item"><Link to="/hakkimizda" className="nav-link">Hakkımızda</Link></li>
							<li className="nav-item"><Link to="/iletisim" className="nav-link">İletişim</Link></li>
						</ul>
						
					<div className="social-media">
						<a href="https://discord.gg/emirfw" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i></a>
						<a href="https://instagram.com/emirercan_" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
						<a href="https://youtube.com/@emirercan3459" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
						<a>|</a>
              			{isLoggedIn ? (
                			<button className="btn btn-link nav-link" onClick={performLogout} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                  				<i className="fas fa-sign-out-alt"></i> Çıkış Yap
                			</button>
              			) : (
                			<Link className="nav-link" to="/giris"><i className="fas fa-user"></i> Giriş Yap</Link>
              			)}
					</div>
					</div>
				</div>
			</nav>
		</header>
        </>
    );
}

export default Header;