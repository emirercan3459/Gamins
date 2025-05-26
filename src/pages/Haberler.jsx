import React from "react";
import { Link } from "react-router-dom";
import haberler from '../data/haberler';
import HaberCard from "../components/Habercard";
function Haberler() {
    return (
		<div className="container my-5">
			<div className="row">
				<div className="col-md-12">
					<h2 className="mb-4">Haberler</h2>
                        <HaberListesi />
				</div>
			</div>
		</div>
    );
}
function HaberListesi() {
    const rows = [];

    for (let i = 0; i < haberler.length; i += 3) {
        const rowItems = haberler.slice(i, i + 3).map((haber) => (
            <div className="col-md-4 mb-4" key={haber.haber_id}>
                <HaberCard haber={haber} />
            </div>
        ));

        rows.push(
            <div className="row" key={`row-${i}`}>
                {rowItems}
            </div>
        );
    }

    return <div className="container mt-4">{rows}</div>;
}
export default Haberler;
