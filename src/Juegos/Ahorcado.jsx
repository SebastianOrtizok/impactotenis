import { useState } from 'react';
import './ahorcado.css'; 
import ahorcado0 from "./img/ahorcado0.gif"
// import ahorcado1 from "./img/ahorcado1.gif"
// import ahorcado2 from "./img/ahorcado2.gif"
// import ahorcado3 from "./img/ahorcado3.gif"
// import ahorcado4 from "./img/ahorcado4.gif"
// import ahorcado5 from "./img/ahorcado5.gif"
// import ahorcado6 from "./img/ahorcado6.gif"

let letra = "";
let palabraescondida = [];
let caracterespalabraaencontrar = [];
let letraencontrada = 0;
let letrasusadasincorrecta = [];
let letrasusadas=[]
let letrausada = false;
let index = 0;
let vida = 7;
let acertadas = [];
var palabraaencontrar = "";
let palabraAleatoria = [
  "vilas",
  "clerc",
  "federer",
  "nadal",
  "djokovic",
  "delpo",
  "wawrinka",
  "alcaraz",
  "tsitsipas",
  "ruud",
  "medvedev",
  "rune",
  "hurkacz",
];

//Elije la palabra random a descubrir
palabraaencontrar =
  palabraAleatoria[Math.floor(Math.random() * palabraAleatoria.length)];
//Esconde la palabra con guiones
for (let i = 0; i < palabraaencontrar.length; i++) {
  caracterespalabraaencontrar.push(palabraaencontrar.substring(i, i + 1));
  palabraescondida[i] = " - ";
}


const Ahorcado = () => {
  const [mensajes, setMensaje] = useState("0")
  const [mensajeLetraUsada, setLetrasUsadas] = useState([])
  const [mensaje2, setMensaje2] = useState("mensaje2")


  if (palabraaencontrar.length != letraencontrada) {
    //Si da igual entonces la palabra ya se encontró
    let letraok = false;
    const printLetter = (letter) => {
     for (let i = 0; i < palabraaencontrar.length; i++) {
        if (letra == caracterespalabraaencontrar[i] && letrausada !== true) {
          setLetrasUsadas(...letra)
          letraencontrada = letraencontrada + 1;
          palabraescondida[i] = palabraescondida[i].replace(
            " - ", letra 
          );
          acertadas[i] = letra;
          setMensaje( acertadas.join(""))
          setMensaje2 ( "Bien ahí Roger, encontraste la letra " +  letra )
          }
          console.log("la letra que ingresaste es..." + letra)
          
     
            console.log(`Letra clickeada: ${letter}`);
            letra=letter
          }
        } 

  return (
    <>
<div className="contenedor">
        <header>
          <h1>Ahorcado de tenis</h1>
          <div className="informacion">
            <div className="infoimage">
              <img id="image" src={ahorcado0} alt="Imagen de información" />
            </div>
            <div className="info1">
              <p className="muestrainfo" id="parrafos"></p>
              <p id="usadas">
                Usadas
                <br />
                {mensajeLetraUsada}
              </p>
              <p id="letrasacertadas">
                Acertadas
                <br />
                {mensajes}
              </p>
              <p id="letraserradas">
                Erradas
                <br />
                0
              </p>
            </div>
          </div>
        </header>

<div> <p className='escondida'>La palabra tiene {palabraaencontrar.length} letras</p> 

 </div> 
<div className='escondida'>{palabraescondida.join("")}

</div>

        <p id="info">{mensaje2}</p>
        <a id="muestrapalabra">Aca la palabra a encontrar</a>

        <div className="keyboard" id="keyboard">
          <div className="fila1">
            <button className="key" id="q" onClick={() => printLetter('q')}>
              Q
            </button>
            <button className="key" id="w" onClick={() => printLetter('w')}>
             W
            </button>
            <button className="key" id="e" onClick={() => printLetter('e')}>
             E
            </button>
            <button className="key" id="r" onClick={() => printLetter('r')}>
             R
            </button>
            <button className="key" id="t" onClick={() => printLetter('t')}>
             T
            </button>
            <button className="key" id="y" onClick={() => printLetter('y')}>
             Y
            </button>
            <button className="key" id="u" onClick={() => printLetter('u')}>
             U
            </button>
            <button className="key" id="i" onClick={() => printLetter('i')}>
             I
            </button>
            <button className="key" id="o" onClick={() => printLetter('o')}>
             O
            </button>
            <button className="key" id="p" onClick={() => printLetter('p')}>
            P
            </button>

          </div>
          <div className="fila2">
          <button className="key" id="a" onClick={() => printLetter('a')}>
              A
            </button>
            <button className="key" id="s" onClick={() => printLetter('s')}>
             S
            </button>
            <button className="key" id="d" onClick={() => printLetter('d')}>
             D
            </button>
            <button className="key" id="f" onClick={() => printLetter('f')}>
             F
            </button>
            <button className="key" id="g" onClick={() => printLetter('g')}>
             G
            </button>
            <button className="key" id="h" onClick={() => printLetter('h')}>
             H
            </button>
            <button className="key" id="j" onClick={() => printLetter('j')}>
             J
            </button>
            <button className="key" id="k" onClick={() => printLetter('k')}>
             K
            </button>
            <button className="key" id="l" onClick={() => printLetter('l')}>
             L
            </button>
            <button className="key" id="ñ" onClick={() => printLetter('ñ')}>
             Ñ
            </button>
          </div>
          <div className="fila3">
          <button className="key" id="z" onClick={() => printLetter('z')}>
              Z
            </button>
            <button className="key" id="x" onClick={() => printLetter('x')}>
             X
            </button>
            <button className="key" id="c" onClick={() => printLetter('c')}>
             C
            </button>
            <button className="key" id="v" onClick={() => printLetter('v')}>
             V
            </button>
            <button className="key" id="b" onClick={() => printLetter('b')}>
             B
            </button>
            <button className="key" id="n" onClick={() => printLetter('n')}>
             N
            </button>
            <button className="key" id="m" onClick={() => printLetter('m')}>
             M
            </button>
           
          </div>
        </div>
      </div>

      <div id="muestraresultado">
        <p id="ganaste"></p>
        <p id="perdiste"></p>
        <button type="text" id="reload" onClick={() => window.location.reload()}>
          Volver a Jugar
        </button>
      </div>
    </>
  );
}
}  

export default Ahorcado

