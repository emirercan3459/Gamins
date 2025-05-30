import React, { useState } from "react";
import MapEmbed from "../components/MapEmbed";

function Iletisim() {
  const [formData, setFormData] = useState({
    adSoyad: "",
    eposta: "",
    mesaj: "",
  });

  const [bildirimGonderildi, setBildirimGonderildi] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBildirimGonderildi(true);
    setFormData({
      adSoyad: "",
      eposta: "",
      mesaj: "",
    });
    setTimeout(() => {
      setBildirimGonderildi(false);
    }, 3000);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="page-title">
          <div className="container text-center">
            <h1>İLETİŞİM</h1>
            <h5 style={{ color: "lightgray" }}>
              İletişim bilgilerimiz bu sayfada mevcuttur.
            </h5>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <h2 className="mb-4">İletişim</h2>
          <div className="row g-3">
            <p>
              <b>E-Posta:</b> abuse@emirercan.net.tr
              <br />
              <b>Telefon Numarası:</b> +90 (850) 302 28 31
              <br />
              <b>Adres:</b> Mimarsinan Merkez Mah. Çitlenbik Sok. No:8 Kat:3
              Büyükçekmece/İstanbul 34535
              <br />
              <br />
            </p>
          </div>

          <h2 className="mb-4">Resmi Bilgilerimiz</h2>
          <div className="row g-3">
            <p>
              <b>Ad Soyad:</b> Alev Ercan
              <br />
              <b>Vergi Kimlik No:</b> 4940371468
              <br />
              <b>Vergi Dairesi:</b> Büyükçekmece V.D.
              <br />
            </p>
          </div>

          <h2 className="mb-4">Bize Ulaşın</h2>

          <div className="row">
            <div className="col-md-6">
				
          {bildirimGonderildi && (
            <div className="alert alert-success" role="alert">
              Bildirim gönderildi!
            </div>
          )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="adSoyad" className="form-label">Ad Soyad</label>
                  <input type="text" className="form-control" id="adSoyad" name="adSoyad" value={formData.adSoyad} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="eposta" className="form-label">E-posta Adresi</label>
                  <input type="email" className="form-control" id="eposta" name="eposta" value={formData.eposta} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="mesaj" className="form-label">Mesaj</label>
                  <textarea className="form-control" id="mesaj" name="mesaj" rows="3" value={formData.mesaj} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Gönder</button>
              </form>
            </div>

          </div>
        </div>

        <div className="col-md-4">
          <h2 className="mb-4">Adresimiz</h2>
          <MapEmbed />
        </div>
      </div>
    </div>
  );
}

export default Iletisim;
