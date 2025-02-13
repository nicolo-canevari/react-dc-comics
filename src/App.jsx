import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";
import Footer from "../components/Footer.jsx";

function App() {

  // Array di link per il NavBar
  const navBarLinks = [

    { name: "CHARACTERS", href: "#" },
    { name: "COMICS", href: "#", isActive: true },
    { name: "MOVIES", href: "#" },
    { name: "TV", href: "#" },
    { name: "GAMES", href: "#" },
    { name: "COLLECTIBLES", href: "#" },
    { name: "VIDEOS", href: "#" },
    { name: "FANS", href: "#" },
    { name: "NEWS", href: "#" },
    { name: "SHOP", href: "#" }

  ];

  return (

    <>

      {/* Passo l'array di link come prop */}
      <Header links={navBarLinks} />
      <Main />
      <Footer />

    </>

  )

}

export default App
