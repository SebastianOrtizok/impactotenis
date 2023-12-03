import { useEffect, useState } from "react";

export const FetchMl = () => {
    const [articulos, setArticulos] = useState([]);
  
  useEffect(() => {
    async function cargarproductos() {
      try {
        const response = await fetch(
          "https://api.mercadolibre.com/sites/MLA/search?q=raquetas de tenis"
        );
        const json = await response.json();
        const nuevosArticulos = json.results;

        // Actualiza el estado local con los nuevos artículos
        setArticulos(nuevosArticulos);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    }

    cargarproductos();
  }, []); 


  return articulos;
};
