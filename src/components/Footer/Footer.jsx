import "../../components/Footer/Footer.scss";
import { Button } from "@mui/material";
import { useEffect, useRef } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Lottie from "lottie-web";
import dontworry from "../../../public/Footer/contact.json";

export default function Footer() {
  const beHappyAnimation = useRef(null);

  useEffect(() => {
    const dontworryAnimation = Lottie.loadAnimation({
      container: beHappyAnimation.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: dontworry,
    });

    return () => {
      dontworryAnimation.destroy();
    };
  }, []);

  return (
    <>
      <div id="contact" className="footer">
        <h1>
          <span className="letter_color">C</span>ontact{" "}
          <span className="letter_color">U</span>S
        </h1>

        <div className="footer_container">
          <div className="contact_us">
            <div className="contact_us_flex_buttons">
              <div>
                <a href="https://api.whatsapp.com/send?phone=919047770020">
                  <Button
                    className="Button_WA"
                    variant="contained"
                    startIcon={<WhatsAppIcon />}
                  >
                    WhatsApp
                  </Button>
                </a>
              </div>
              <div>
                <a href="tel:9943601230">
                  <Button
                    className="Button_CU"
                    variant="contained"
                    startIcon={<CallIcon />}
                  >
                    Call Us
                  </Button>
                </a>
              </div>
              <div>
                <a href="mailto:blisstonehearingclinic@gmail.com?subject=Need%20Your%20Help%20">
                  <Button
                    className="Button_MU"
                    variant="contained"
                    startIcon={<MailIcon />}
                  >
                    Mail Us
                  </Button>
                </a>
              </div>
              <div>
                <a href="#booknow">
                  <Button
                    className="Button_BO"
                    variant="contained"
                    startIcon={<EventAvailableIcon />}
                  >
                    Book Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="footer_content">
            <div className="footer_logo_icon">
              <div>
                <img className="logo_img" src="./logo_full.png"></img>
              </div>
              <div>
                <p>{`"We empower you to rediscover the joy of communication through compassionate care and personalized solutions for hearing and speech."`}</p>
              </div>
              <div className="social_img">
                <div>
                  <FacebookIcon className="icon_style" />
                </div>
                <a href="https://api.whatsapp.com/send?phone=919047770020">
                  <div>
                    <WhatsAppIcon className="icon_style" />
                  </div>
                </a>
                <div>
                  <InstagramIcon className="icon_style" />
                </div>
                <div>
                  <a href="tel:9943601230">
                    <CallIcon className="icon_style" />
                  </a>
                </div>
              </div>
            </div>
            <div ref={beHappyAnimation} className="beHappyAnime"></div>
            <div className="address_container">
              <div>
                <a href="https://www.google.com/maps/place/Bliss+Tone+Speech+%26+Hearing+Clinic/@13.0505265,80.182396,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5261e11df82c6b:0x946f93205d08cea4!8m2!3d13.0505265!4d80.1849709!16s%2Fg%2F11lp4jsybg?authuser=0&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                  <img src="./Footer/location.png" />
                </a>
              </div>
              <div>
                <div>
                  <h3>Address</h3>
                </div>
                <div>
                  <p>
                    # 54/15,Indra Gandhi Road, Alwarthirunagar, Chennai - 600
                    087
                    <br />
                    Contact no : <a href="tel:9943601230">9943601230</a> / <a href="tel:9047770020">9047770020</a> / <a href="tel:9047770050">9047770050</a> <br />
                    Email id : <a href="mailto:blisstonehearingclinic@gmail.com?subject=Need%20Your%20Help%20">blisstonehearingclinic@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="copy_right">
            <p>Copyright © 2024 Bliss Tone - All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
