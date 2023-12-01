import { Carrousel } from "./Carrousel";
import { EcommerceIndex } from "./ecomerce/EcommerceIndex";
import Youtube from "./Youtube";
export const Principal = function () {

	return (
		<>
		<section>
			<div className="principal_section1">
				<Carrousel/>
			</div>
		</section>
		<section>
		<div className="principal_section3">
			<Youtube/>
		</div>

		</section>
		<section>
		<div className="principal_section2">
				<EcommerceIndex/>
			</div>
		</section>
		</>
	);
};
