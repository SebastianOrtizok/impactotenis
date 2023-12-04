import { useState, useEffect  } from 'react';
import './ahorcado.css'; 
import './img/ahorcado7.gif'

let letra = "";
let palabraescondida = [];
let caracterespalabraaencontrar = [];
let letraencontrada = 0;
let letraIncorrecta = "";
let letrasusadas=""
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
  const [mensajeLetraUsada, setLetrasUsadas] = useState()
  const [mensajeLetraErrada, setLetraErrada] = useState([])
  const [mensaje2, setMensaje2] = useState("")
  const [mostrarBotonReload, setMostrarBotonReload] = useState(false);
  const [teclado, setTeclado] = useState(true)
  const [MensajePrincipal, setMensajePrincipal] = useState()


    //Si da igual entonces la palabra ya se encontró
    let letraok = false;
    const printLetter = (letter) => {
     for (let i = 0; i < palabraaencontrar.length; i++) {
        if (letter == caracterespalabraaencontrar[i] && letrausada !== true) {
          letraencontrada = letraencontrada + 1;
          palabraescondida[i] = palabraescondida[i].replace(
            " - ", letter 
          );
          acertadas[i] = letter;
          setMensaje( acertadas.join(""))
          setMensaje2 ( "Bien ahí Roger, encontraste la letra " +  letter )
          letraok=true
          letrasusadas=letrasusadas + letter 
          setLetrasUsadas(letrasusadas) 
        } 
          letrasusadas=letrasusadas + letter
          }
          if (letraok!=true  && letrausada == false) {
            setMensaje2 ( "Mala una, esa letra no existe " +  letter )
            vida=vida-1
            letraIncorrecta=letraIncorrecta + letter
            index=index+1
            console.log(letraIncorrecta)
            setLetrasUsadas(letraIncorrecta)
            setLetraErrada(letraIncorrecta)
          }
          
          

          if (vida === 0 || letraencontrada === palabraaencontrar.length) {
            setTeclado(false);
            setMostrarBotonReload(true);
      
            if (letraencontrada === palabraaencontrar.length) {
              setMensajePrincipal(`Felicitaciones, adivinaste la palabra escondida ${palabraaencontrar}!!!`);
              console.log("Ganaste")
            } else {
              setMensaje2(`Perdiste no te quedan mas vidas, la palabra a encontrar era ${palabraaencontrar}`);
            }
          } 
          
        } 

          
        
        
  return (
    <>
<div className="contenedor">
        <header>
          <h3 className='titulo_ahorcado'>Ahorcado</h3>
          <div className="informacion">
            <div className="infoimage">
            <img id="image" src={`/src/Juegos/img/ahorcado${vida}.gif`} alt="Imagen de información" />

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
                {mensajeLetraErrada}
              </p>
            </div>
          </div>
        </header>
        

<div> <p className='escondida'>La palabra tiene {palabraaencontrar.length} letras</p> 

 </div> 

<div className='escondida'>{palabraescondida.join("")}
</div>
<p>Aca la palabra a encontrar</p>
  <h1>{MensajePrincipal}</h1>
{mostrarBotonReload && (
<button type="text" onClick={() => window.location.reload()}>
            Volver a Jugar 
          </button>
)}

        <p id="info">{mensaje2}</p>
        {teclado && (       
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
            )}
      </div>

    </>
  );
}
 

export default Ahorcado

