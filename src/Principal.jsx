import { Carrousel } from "./Carrousel";
import { EcommerceIndex } from "./ecomerce/EcommerceIndex";
import Youtube from "./Youtube";
import InfoJugador from "./InfoJugador";
export const Principal = function () {

	return (
		<>
		<section>
			<div className="principal_section1">
				<Carrousel/>
			</div>
		</section>
		<section>
			<div className="principal_section2">
			<Youtube/>
			</div>
		</section>
		<section>
		<div className="principal_section3">
				<InfoJugador/>
		</div>
		</section>
		<section>
		<div className="principal_section4">
				<EcommerceIndex/>
			</div>
		</section>
		</>
	);
};
