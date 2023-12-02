import { Carrousel } from "./Carrousel";
import { EcommerceIndex } from "./ecomerce/EcommerceIndex";
import Youtube from "./Youtube";
import InfoResultados from "./InfoResultados";
export const Principal = function () {

	return (
		<>
		<section>
			<div className="principal_section1">
				<Carrousel/>
			</div>
		</section>
		<section>
		<section>
			<div className="principal_section1">
				<InfoResultados/>
			</div>
		</section>
		<div className="principal_section2">
			<Youtube/>
		</div>
		<div className="principal_section3">
				<EcommerceIndex/>
			</div>
		</section>
		<section>
		</section>
		</>
	);
};
