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

  // Array di link per il footer
  const footerLinks = {
    dcComics: [
      { name: "Characters", href: "#" },
      { name: "Comics", href: "#" },
      { name: "Movies", href: "#" },
      { name: "TV", href: "#" },
      { name: "Games", href: "#" },
      { name: "Videos", href: "#" },
      { name: "News", href: "#" }
    ],
    shop: [
      { name: "Shop DC", href: "#" },
      { name: "Shop DC Collectibles", href: "#" }
    ],
    dc: [
      { name: "Terms of Use", href: "#" },
      { name: "Privacy policy", href: "#" },
      { name: "Ad Choices", href: "#" },
      { name: "Advertising", href: "#" },
      { name: "Jobs", href: "#" },
      { name: "Subscriptions", href: "#" },
      { name: "Talent Workshop", href: "#" },
      { name: "CPSC Certificates", href: "#" },
      { name: "Ratings", href: "#" },
      { name: "Shop Help", href: "#" },
      { name: "Contact Us", href: "#" }
    ],
    sites: [
      { name: "DC", href: "#" },
      { name: "MAD Magazine", href: "#" },
      { name: "DC Kids", href: "#" },
      { name: "DC Universe", href: "#" },
      { name: "DC Power Visa", href: "#" }
    ]
  };

  return (

    <>

      {/* Passo l'array di link come prop */}
      <Header links={navBarLinks} />
      <Main />
      <Footer links={footerLinks} />

    </>

  )

}

export default App
