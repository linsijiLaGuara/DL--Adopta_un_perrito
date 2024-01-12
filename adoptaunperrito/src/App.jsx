import "bootstrap/dist/css/bootstrap.min.css";
import Tags from "./componentes/tags/Tags";
import Header from "./componentes/header/Header";
import Footer from "./componentes/footer/Footer";
import "./App.css";

function App() {
  const tagsNames = [
    {
      name: "Bartolo",
      description:
        "Bartolo es un perrito lleno de energía y alegría. Con su pelaje suave y ojos tiernos, es el compañero perfecto para actividades al aire libre largos paseos y siempre está listo para recibir mimos y jugar",
      img: "https://th.bing.com/th/id/OIP.oYCKSlX9Sgmz6QrJ7UIXhAHaE9?w=600&h=402&rs=1&pid=ImgDetMain",
      buttonColor: "success",
    },
    {
      name: "Messi",
      description:
        "Messi, un perrito juguetón y cariñoso, está listo para un nuevo hogar. Su pequeño tamaño es perfecto para adaptarse a cualquier estilo de vida, y siempre está listo para recibir mimos y jugar.",
      img: "https://th.bing.com/th/id/OIP.GhNdk_trq-6o9K4yt0Ph7gHaHa?rs=1&pid=ImgDetMain",
      buttonColor: "primary",
    },
    {
      name: "Princesa",
      description:
        "Bartolo es un perrito lleno de energía y alegría. Con su pelaje suave y ojos tiernos, es el compañero perfecto para actividades al aire libre largos paseos y siempre está listo para recibir mimos y jugar",
      img: "https://i.ytimg.com/vi/sFbt7Icd9RI/maxresdefault.jpg",
      buttonColor: "danger",
    },
    {
      name: "Gohan",
      description:
        "Gohan, un perrito inteligente y activo, está listo para ser parte de tu familia. Su entusiasmo y lealtad hacen que sea el compañero ideal para alguien que ama la vida al aire libre y siempre está listo para recibir mimos y jugar",
      img: "https://th.bing.com/th/id/OIP.4zSEglsyMmNax23wCt-VBAHaIt?w=621&h=730&rs=1&pid=ImgDetMain",
      buttonColor: "warning",
    },
  ];
  return (
    <>
      <Header />

      <Tags props={tagsNames} />

      <Footer />
    </>
  );
}

export default App;
