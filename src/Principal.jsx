import { Carrousel } from "./Carrousel";
import { EcommerceIndex } from "./ecomerce/EcommerceIndex";
import RannkingATP from "./RankingATP";
import Ahorcado from "./Juegos/Ahorcado";

export const Principal = function () {

	return (
		<>
		<section>
			<div className="principal_section1">
				<Carrousel/>
			</div>
		</section>
		<section>
		<div className="h1_principal_section2">
			<h1 className="h1_section2">Videos y clases</h1>
			<div className="principal_section2">
			<div className="videoContenedor">
			<iframe width="100%" height="auto" src="https://www.youtube.com/embed/PqQ9s8Q3o6U?si=b9HTAoS1zLl-Ytvz" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			<iframe width="100%" height="auto" src="https://www.youtube.com/embed/PS0I2aoSYkU?si=wKwyYUeMal6mz7ZI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			<iframe width="100%" height="auto" src="https://www.youtube.com/embed/i8HK3qoTKno?si=OqllePQaxTzMB8Aq" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
			</div>
</div>
		</section>
		<section>
		<div className="principal_section3">
		<h1 className="h1_section2">Informacion actualizada</h1>
		<div className="container py-1">
				<RannkingATP/>
				</div>
		</div>
		</section>
		<section>
		<div className="principal_section4">
				<EcommerceIndex/>
			</div>
		</section>
		<section>
		<div className="principal_section5">

		</div>
		</section>
		</>
	);
};
