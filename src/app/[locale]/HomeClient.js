"use client";
import "./home.css";
import Typewriter from "typewriter-effect";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomeClient() {
  const t = useTranslations();

  return (
    <section id="home" className="home">
      <div className="intro_sec d-block d-lg-flex align-items-center">
        <div className="h_bg-image order-1 order-lg-2 h-100" style={{ backgroundImage: `url(${t("home.yourImgUrl")})` }}></div>
        <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
          <div className="align-self-center">
            <div className="intro mx-auto">
              <h2 className="mb-1x">{t("home.title")}</h2>
              <h1 className="fluidz-48 mb-1x">
                <Typewriter options={{ strings: [t("home.animated.first"), t("home.animated.second"), t("home.animated.third")], autoStart: true, loop: true, deleteSpeed: 10 }} />
              </h1>
              <p className="mb-1x">{t("home.description")}</p>
              <div className="intro_btn-action pb-5">
                <Link href="/portfolio" className="text_2">
                  <div id="button_p" className="ac_btn btn">{t("home.btnPortfolio")}<div className="ring one"></div><div className="ring two"></div><div className="ring three"></div></div>
                </Link>
                <Link href="/contact">
                  <div id="button_h" className="ac_btn btn">{t("home.btnContact")}<div className="ring one"></div><div className="ring two"></div><div className="ring three"></div></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
