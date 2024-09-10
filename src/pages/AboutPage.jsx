/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import "../sass/about.scss";
import Partners from "../components/Partners";
import About from "../components/About";
import Getintouch from "../components/Getintouch";
import MobileAboutPage from "./MobileAboutPage";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import AboutText from "../components/AboutText";

function AboutPage() {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  // useEffect(() => {
  //   console.log("-------");
  // }, [changeLanguage]);
  return (
    <>
      {/* <div className="about-page-bg">
        <div className="container">
          <div className="about-page-p">
            <div className="about-page-texts">
              <h2>Hakkimizda</h2>
              <p>
                Öğrenciler, ajansın uzman danışmanlarından Türkiye ve
                Özbekistan'daki eğitim kurumları hakkında ayrıntılı bilgi
                alabilirler. Danışmanlar, öğrencilerin akademik geçmişlerine ve
                hedeflerine uygun eğitim programlarını belirlemelerine yardımcı
                olur.
              </p>
              <button>
                İletişime geçin
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                >
                  <path
                    d="M23.4933 14.8333C22.92 14.8333 22.4666 14.3667 22.4666 13.8067C22.4666 13.3133 21.9733 12.2867 21.1466 11.3933C20.3333 10.5267 19.44 10.02 18.6933 10.02C18.12 10.02 17.6666 9.55334 17.6666 8.99334C17.6666 8.43334 18.1333 7.96667 18.6933 7.96667C20.0266 7.96667 21.4266 8.68668 22.6533 9.98001C23.8 11.1933 24.5333 12.7 24.5333 13.7933C24.5333 14.3667 24.0666 14.8333 23.4933 14.8333Z"
                    fill="white"
                  />
                  <path
                    d="M28.3067 14.8333C27.7334 14.8333 27.2801 14.3666 27.2801 13.8066C27.2801 9.07329 23.4267 5.23329 18.7067 5.23329C18.1334 5.23329 17.6801 4.76663 17.6801 4.20663C17.6801 3.64663 18.1334 3.16663 18.6934 3.16663C24.5601 3.16663 29.3334 7.93996 29.3334 13.8066C29.3334 14.3666 28.8667 14.8333 28.3067 14.8333Z"
                    fill="white"
                  />
                  <path
                    d="M14.7333 20.4333L12.2666 22.9C11.7466 23.42 10.92 23.42 10.3866 22.9133C10.24 22.7666 10.0933 22.6333 9.94663 22.4866C8.57329 21.1 7.33329 19.6466 6.22663 18.1266C5.13329 16.6066 4.25329 15.0866 3.61329 13.58C2.98663 12.06 2.66663 10.6066 2.66663 9.21996C2.66663 8.31329 2.82663 7.44663 3.14663 6.64663C3.46663 5.83329 3.97329 5.08663 4.67996 4.41996C5.53329 3.57996 6.46663 3.16663 7.45329 3.16663C7.82663 3.16663 8.19996 3.24663 8.53329 3.40663C8.87996 3.56663 9.18663 3.80663 9.42663 4.15329L12.52 8.51329C12.76 8.84663 12.9333 9.15329 13.0533 9.44663C13.1733 9.72663 13.24 10.0066 13.24 10.26C13.24 10.58 13.1466 10.9 12.96 11.2066C12.7866 11.5133 12.5333 11.8333 12.2133 12.1533L11.2 13.2066C11.0533 13.3533 10.9866 13.5266 10.9866 13.74C10.9866 13.8466 11 13.94 11.0266 14.0466C11.0666 14.1533 11.1066 14.2333 11.1333 14.3133C11.3733 14.7533 11.7866 15.3266 12.3733 16.02C12.9733 16.7133 13.6133 17.42 14.3066 18.1266C14.44 18.26 14.5866 18.3933 14.72 18.5266C15.2533 19.0466 15.2666 19.9 14.7333 20.4333Z"
                    fill="white"
                  />
                  <path
                    d="M29.2934 24.94C29.2934 25.3133 29.2267 25.7 29.0934 26.0733C29.0534 26.18 29.0134 26.2866 28.96 26.3933C28.7334 26.8733 28.4401 27.3266 28.0534 27.7533C27.4001 28.4733 26.68 28.9933 25.8667 29.3266C25.8534 29.3266 25.84 29.34 25.8267 29.34C25.04 29.66 24.1867 29.8333 23.2667 29.8333C21.9067 29.8333 20.4534 29.5133 18.92 28.86C17.3867 28.2066 15.8534 27.3266 14.3334 26.22C13.8134 25.8333 13.2934 25.4466 12.8 25.0333L17.16 20.6733C17.5334 20.9533 17.8667 21.1666 18.1467 21.3133C18.2134 21.34 18.2934 21.38 18.3867 21.42C18.4934 21.46 18.6 21.4733 18.72 21.4733C18.9467 21.4733 19.12 21.3933 19.2667 21.2466L20.28 20.2466C20.6134 19.9133 20.9334 19.66 21.24 19.5C21.5467 19.3133 21.8534 19.22 22.1867 19.22C22.44 19.22 22.7067 19.2733 23 19.3933C23.2934 19.5133 23.6 19.6866 23.9334 19.9133L28.3467 23.0466C28.6934 23.2866 28.9334 23.5666 29.08 23.9C29.2134 24.2333 29.2934 24.5666 29.2934 24.94Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="about-page" style={{ marginTop: "250px" }}>
        <div className="container">
          <AboutText />
          <div className="partners-div-p">
            <Partners />
          </div>
        </div>
        {/* <div>
          <About
            title={getText("AboutPageTitle")}
            desc={getText("AboutPageDesc")}
          />
        </div> */}
        <Getintouch />
      </div>

      <MobileAboutPage />
    </>
  );
}

export default AboutPage;
