import React from "react";
import { Link } from "react-router-dom";

function HaberCard({ haber }) {
    return (
        <div className="card news-card">
            <img src={haber.haber_resim} alt={haber.haber_baslik} className="card-img-top" />
            <div className="card-body">
                <h6 className="card-subtitle">Paylaşan: Admin</h6>
                <h3 className="card-title">{haber.haber_baslik}</h3>
                <p className="card-text">{haber.haber_kisa_aciklama}</p>
                <Link to={`/haber/${haber.haber_id}`} className="view-btn">Haberi Gör</Link>
            </div>
        </div>
    );
}

export default HaberCard;
