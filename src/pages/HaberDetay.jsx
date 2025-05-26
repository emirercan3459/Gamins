import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import haberler from '../data/haberler';

function HaberDetay() {
    const { haberId } = useParams();
    const [haber, setHaber] = useState(null);

    useEffect(() => {
        const bulunanHaber = haberler.find(h => h.haber_id.toString() === haberId);

        if (bulunanHaber) {
            setHaber(bulunanHaber);
        } else {
            console.error("Haber useEffect içinde bulunamadı. Aranan haberId:", haberId);
            setHaber(null);
        }
    }, [haberId]);

    if (!haber) {
        return <div className="container my-5 text-center">Haber bulunamadı.</div>;
    }

    const haberaciklama = DOMPurify.sanitize(haber.haber_uzun_aciklama);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-9">
                    <div dangerouslySetInnerHTML={{ __html: haberaciklama }} />
                </div>
                <div className="col-md-3">
                    <h2 className="mb-4 mt-4">&nbsp;</h2>
                    <img src={haber.haber_resim} className="img-fluid haber-resmi" alt={haber.haber_baslik || "Haber Resmi"} />
                    <hr />
                    <p><i className="fas fa-user"></i> Paylaşan: {haber.haber_paylasan}</p>
                    <p><i className="fas fa-clock"></i> Paylaşım Tarihi: {haber.haber_tarih}</p>
                    <p><i className="fas fa-eye"></i> Görüntülenme Sayısı: {haber.haber_goruntulenme}</p>
                </div>
            </div>
        </div>
    );
}

export default HaberDetay;