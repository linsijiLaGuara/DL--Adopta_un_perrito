import "bootstrap/dist/css/bootstrap.min.css";
import MyCardPerritoBlanco from "./componentes/mycard/MyCardPerritoBlanco";
import MyCardPerritoPrincesa from "./componentes/mycard/MyCardPerritoPrincesa";
import MyCardPerritoPeque from "./componentes/mycard/MyCardPerritoPeque";
import MyCardPerritoGrande from "./componentes/mycard/MyCardPerritoGrande";
import Header from "./componentes/header/Header";
import Footer from "./componentes/footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <div className="perritos-card">
        <MyCardPerritoBlanco tags={["Bartolo"]} />
        <MyCardPerritoPrincesa tags={["Princesa"]} />
        <MyCardPerritoPeque tags={["Messi"]} />
        <MyCardPerritoGrande tags={["Gohan"]} />
      </div>
      <Footer />
    </>
  );
}

export default App;
