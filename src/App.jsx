import "./App.scss";
import Header from "./components/Header/Header.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Service from "./components/Services/Service.jsx";
import Brand from "./components/Brand/Brand.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import { BookNow } from "./components/BookNow/BookNow.jsx";
import ScrollToTopButton from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <AboutUs />
      <Service />
      <Brand />
      <Gallery />
      <BookNow />
      <Footer />
      <ScrollToTopButton />
      <div className="floater">
        <a href="https://api.whatsapp.com/send?phone=919047770020">
          <img
            className="whatsapp-floater"
            src="/SocialMediaIcons/whatsapp.png"
            alt="whatsapp"
          />
        </a>
        <img
          className="whatsapp-floater"
          src="/SocialMediaIcons/instagram.png"
          alt="instagram"
        />
      </div>
    </>
  );
}

export default App;
