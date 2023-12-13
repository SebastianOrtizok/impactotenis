import { EcommerceIndex } from "./ecomerce/EcommerceIndex";
import { Principal3 } from "./Seccion3/Principal3";
import { ImagenTop } from "./Seccion1/ImagenTop";
import { Footer } from "./footer/Footer";

export const Principal = function () {
	return (
		<>
		<section>

				<div className="principal_section1">
					<ImagenTop/>
				</div>

			</section>
			<section>
				<div className="h1_principal_section2">
						<h1 className="h1_section2">Videos y clases</h1>
						<div className="principal_section2">
						<div className="video_contenedor">
								<iframe 
									src="https://www.youtube.com/embed/PqQ9s8Q3o6U?si=b9HTAoS1zLl-Ytvz"
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullscreen
								></iframe>
								</div>
								<div className="video_contenedor">
										<iframe
									src="https://www.youtube.com/embed/PS0I2aoSYkU?si=wKwyYUeMal6mz7ZI"
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullscreen
								></iframe>
								</div>
								<div className="video_contenedor">
											<iframe  
									src="https://www.youtube.com/embed/i8HK3qoTKno?si=OqllePQaxTzMB8Aq"
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullscreen
								></iframe>
								</div>
						</div>
					</div>

			</section>
			<section>
						<Principal3/>
			</section>
			<section>
				<div className="principal_section4">
					<EcommerceIndex />
				</div>
			</section>
			<section>
				<div className="principal_section5"></div>
			</section>
			<section>
			<Footer />
			</section>
			</>
	);
};
