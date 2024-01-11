import "bootstrap/dist/css/bootstrap.min.css";
import MyCardPerritoBlanco from "./componentes/mycard/MyCardPerritoBlanco";
import MyCardPerritoPrincesa from "./componentes/mycard/MyCardPerritoPrincesa";
import MyCardPerritoPeque from "./componentes/mycard/MyCardPerritoPeque";
import MyCardPerritoGrande from "./componentes/mycard/MyCardPerritoGrande";


import "./App.css";

function App() {
  return (
    <>
      <div className='perritos-card'>
      <MyCardPerritoBlanco  />
        <MyCardPerritoPrincesa />
        <MyCardPerritoPeque />
        <MyCardPerritoGrande />
      </div>
    </>
  );
}

export default App;
