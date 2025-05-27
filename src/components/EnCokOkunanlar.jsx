import React from "react";
import { Link } from "react-router-dom";
import haberler from "../data/haberler";

function EnCokOkunanlar({ maxCount = 3 }) {
    const populerHaberler = [...haberler]
        .sort((a, b) => b.haber_goruntulenme - a.haber_goruntulenme)
        .slice(0, maxCount);

    return (
        <div>
            {populerHaberler.map((haber, index) => (
                <div className="encok-okunanlar row mb-3" key={haber.haber_id}>
                    <div className="d-flex align-items-center">
                        <img src={haber.haber_resim} alt={haber.haber_baslik} className="me-3" style={{ width: "80px", height: "auto", borderRadius: "5px" }}/>
                        <div id={`encokokunan-${haber.haber_id}`}>
                            <Link to={`/haberler/${haber.haber_id}`} className="text-white text-decoration-none">
                                <h5 className="mb-0">{haber.haber_baslik}</h5>
                                <small className="text-white">{haber.haber_} tarafından paylaşıldı!</small>
                            </Link>
                        </div>
                    </div>
                    {index < populerHaberler.length - 1 && <hr />}
                </div>
            ))}
        </div>
    );
}

export default EnCokOkunanlar;
