import React from "react";

function MapEmbed() {
    return (
        <div className="mapswrapper" style={{ background: "#fff", position: "relative" }}>
            <iframe
                title="Google Maps"
                style={{ width: "100%", height: "450px", border: 0, position: "relative", zIndex: 2 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Istanbul%20Buyukcekmece%20Mimarsinan%20Merkez%20Mah.%20%C3%87itlenbik%20Sok.%20No%3A8%20Kat%3A3&zoom=10&maptype=roadmap"
            ></iframe>
        </div>
    );
}

export default MapEmbed;
