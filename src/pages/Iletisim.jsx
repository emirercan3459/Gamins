import React from "react";
import { Link } from "react-router-dom";
import MapEmbed from "../data/MapEmbed";
function Iletisim() {
    return (
		<div class="container my-5">
			<div class="row">
		<div class="page-title">
			<div class="container text-center">
				<h1>İLETİŞİM</h1>
				<h5 style={{ color: "lightgray" }}>İletişim bilgilerimiz bu sayfada mevcuttur.</h5>
			</div>
		</div>
			</div>
			<div class="row">
				<div class="col-md-8">
					<h2 class="mb-4">İletişim</h2>
					<div class="row g-3">
						<p>
							<b>E-Posta:</b> abuse@emirercan.net.tr
							<br />
							<b>Telefon Numarası:</b> +90 (850) 302 28 31
							<br />
							<b>Adres:</b> Mimarsinan Merkez Mah. Çitlenbik Sok. No:8 Kat:3 Büyükçekmece/İstanbul 34535
							<br />
							<br />
						</p>
					</div>
					<h2 class="mb-4">Resmi Bilgilerimiz</h2>
					<div class="row g-3">
						<p>
							<b>Ad Soyad:</b> Alev Ercan
							<br />
							<b>Vergi Kimlik No:</b> 4940371468
							<br />
							<b>Vergi Dairesi:</b> Büyükçekmece V.D.
							<br />
						</p>
					</div>
				</div>
				<div class="col-md-4">
					<h2 class="mb-4">Adresimiz</h2>
					<MapEmbed />
				</div>
			</div>
		</div>
    );
}

export default Iletisim;
