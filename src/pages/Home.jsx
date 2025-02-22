import React, { useState } from "react";
import "./Home.css";
import ChatGPT from "../../assets/logos/chatGPT.avif";
import CharacterAI from "../../assets/logos/characterAI.jpg";
import DeepL from "../../assets/logos/deepL.png";
import Gemini from "../../assets/logos/gemini.png";
import GitCopilot from "../../assets/logos/githubCopilot.png";
import Grammarly from "../../assets/logos/grammarly.png";
import HuggingFace from "../../assets/logos/huggingFace.png";
import Microsoft from "../../assets/logos/microsoftCopilot.webp";
import Midjourney from "../../assets/logos/midjourney.png";
import Notion from "../../assets/logos/notion.png";
import Perplexity from "../../assets/logos/perplexity.webp";
import Quillbot from "../../assets/logos/quillbot.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [activeTab, setActiveTab] = useState("hva");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="home">
      <section className="intro">
        <h1 className="home-header">
          Velkommen til <span className="headerKI">KI</span> Kunnskap!
        </h1>
      </section>

      <section className="home-tabs">
        <div className="home-tab-buttons buttons">
          <button
            onClick={() => handleTabChange("hva")}
            className={activeTab === "hva" ? "active" : ""}
          >
            Hva er KI
          </button>
          <button
            onClick={() => handleTabChange("hvilke")}
            className={activeTab === "hvilke" ? "active" : ""}
          >
            Hvilke KI finnes
          </button>
          <button
            onClick={() => handleTabChange("hvorfor")}
            className={activeTab === "hvorfor" ? "active" : ""}
          >
            Hvorfor bruke KI
          </button>
          <button
            onClick={() => handleTabChange("hvordan")}
            className={activeTab === "hvordan" ? "active" : ""}
          >
            Hvordan bruke KI
          </button>
        </div>

        <div className="home-tab-content">
          <div className={`tab-pane ${activeTab === "hva" ? "active" : ""}`}>
            <h2>Hva er KI?</h2>
            <p>
              Hva er Kunstig Intelligens (KI)? Kunstig intelligens (KI) er en
              teknologi som lar datamaskiner utføre oppgaver som vanligvis
              krever menneskelig intelligens. Dette inkluderer ting som å lære
              av erfaring, forstå naturlig språk, gjenkjenne bilder og ta
              beslutninger. KI fungerer ved å bruke avanserte algoritmer og
              store mengder data for å identifisere mønstre og finne løsninger
              på komplekse problemer. Eksempler på KI i praksis inkluderer alt
              fra anbefalingssystemer (som Netflix og Spotify),
              ansiktsgjenkjenning og stemmeassistenter (som Siri og Alexa) til
              mer avanserte verktøy som selvkjørende biler og medisinske
              diagnostikksystemer.
            </p>
            <button className="show-more">Les mer</button>
          </div>
          <div className={`tab-pane ${activeTab === "hvilke" ? "active" : ""}`}>
            <h2>Typer av KI</h2>
            <p>KI kan deles inn i flere kategorier, som inkluderer:</p>
            <ul>
              <li>
                <strong>Maskinlæring</strong>: En type KI der maskiner lærer fra
                data for å gjøre prediksjoner eller ta beslutninger.
              </li>
              <li>
                <strong>Naturlig språkprosessering (NLP)</strong>: KI som gjør
                det mulig for maskiner å forstå og generere menneskelig språk.
              </li>
              <li>
                <strong>Robotikk</strong>: KI som benyttes til å lage fysiske
                roboter som kan utføre oppgaver i den virkelige verdenen.
              </li>
              <li>
                <strong>Deep Learning</strong>: En type maskinlæring som
                benytter kunstige nevrale nettverk til å løse komplekse
                problemer.
              </li>
            </ul>
            <button className="show-more">
              <a href="#listOfAI">Eksempler på KI</a>
            </button>
          </div>

          <div
            className={`tab-pane ${activeTab === "hvorfor" ? "active" : ""}`}
          >
            <h2>Hvorfor bruke KI</h2>
            <p>KI er kraftig fordi den kan:</p>
            <ul>
              <li>
                <strong>Automatisere oppgaver:</strong> Gjør det mulig å
                automatisere repeterende eller tidkrevende oppgaver, slik at vi
                kan fokusere på mer kreative eller komplekse oppgaver.
              </li>
              <li>
                <strong>Forstå store datamengder:</strong> KI kan analysere
                enorme mengder data raskt og finne innsikter som mennesker
                kanskje ikke ville ha oppdaget.
              </li>
              <li>
                <strong>Tilpasse seg:</strong> KI-systemer som ChatGPT kan
                tilpasses spesifikke behov, enten det handler om å skrive
                innhold, løse tekniske problemer eller generere kreative ideer.
              </li>
              <li>
                <strong>Tilgjengelighet:</strong> KI kan hjelpe folk med ulike
                ferdighetsnivåer å utføre oppgaver de ellers ville hatt
                problemer med.
              </li>
            </ul>
            <button className="show-more">Eksempler på KI</button>
          </div>

          <div
            className={`tab-pane ${activeTab === "hvordan" ? "active" : ""}`}
          >
            <h2>Hvordan bruke KI?</h2>
            <p>
              KI kan brukes på mange måter, både i profesjonelle og private
              sammenhenger. Her er noen tips:
            </p>
            <ul>
              <li>
                <strong>Bruk KI for automatisering</strong>: KI kan hjelpe deg
                med å automatisere repeterende oppgaver som e-postsortering
                eller databehandling.
              </li>
              <li>
                <strong>Utnytt KI i kundeservice</strong>: KI-drevne chatbots
                kan hjelpe bedrifter med å gi rask kundesupport døgnet rundt.
              </li>
              <li>
                <strong>Bruk KI til analyse</strong>: Bruk KI for å analysere
                store datamengder og finne mønstre som kan hjelpe deg å ta bedre
                beslutninger.
              </li>
            </ul>
            <button className="show-more">Eksempler på bruk</button>
          </div>
        </div>
      </section>
      <div className="home-separator"></div>
      <section className="informationPanels">
        <div className="leftPanel panel">
          <div className="panelHeader">
            <h3>Forslag til bruksområder for ChatGPT:</h3>
            <strong></strong>
            <p>
              Mange bruker ChatGPT kun for å få svar på spørsmål, men
              mulighetene er langt større:
            </p>
          </div>
          <ol>
            <li>
              <strong>Skrivehjelp:</strong> Få hjelp til å skrive e-poster,
              rapporter, søknader, dikt eller historier.
            </li>
            <li>
              <strong>Læring:</strong> Bruk ChatGPT som en personlig lærer for å
              forstå alt fra matematikk til historie.
            </li>
            <li>
              <strong>Idémyldring:</strong> Få kreative innspill til prosjekter,
              forretningsplaner eller hobbyer.
            </li>
            <li>
              <strong>Problemløsning:</strong> Løs tekniske problemer eller
              planlegg komplekse oppgaver.
            </li>
            <li>
              <strong>Språk:</strong> Oversett tekst, lær nye språk eller
              forbedre skriveferdigheter.
            </li>
            <li>
              <strong>Personlig utvikling:</strong> Bruk verktøyet til
              selvrefleksjon eller for å lage mål og strategier.
            </li>
          </ol>
        </div>
        <div className="rightPanel panel">
          <h3>Tips og triks for å bruke ChatGPT mest effektivt:</h3>
          <ol>
            <li>
              <strong>Still spesifikke spørsmål:</strong> Jo mer detaljert du er
              i spørsmålene dine, desto bedre svar får du. For eksempel: I
              stedet for “Hva er en god bok?” kan du spørre “Hva er en god
              science fiction-bok for ungdom?”
            </li>
            <li>
              <strong>Angi kontekst:</strong> Fortell ChatGPT hvem du er og hva
              du trenger. For eksempel: “Jeg er en lærer som trenger hjelp til å
              planlegge en undervisningstime om klimaendringer.”
            </li>
            <li>
              <strong>Iterer: </strong> Hvis du ikke er fornøyd med svaret, be
              om en forbedring. Si for eksempel: “Kan du utdype dette?” eller
              “Kan du forklare på en enklere måte?”
            </li>
            <li>
              <strong>Utforsk alternative perspektiver: </strong> Spør ChatGPT
              om å gi ulike synspunkter på samme tema.
            </li>
            <li>
              <strong>Bruk det som en samarbeidspartner:</strong> La ChatGPT
              hjelpe deg med brainstorming, men husk at du alltid kan overstyre
              og forbedre resultatene.
            </li>
            <li>
              <strong>Eksperimenter:</strong> Prøv ulike bruksområder for å
              finne nye måter verktøyet kan hjelpe deg på. For eksempel,
              planlegg en ferie, lag middagsoppskrifter eller utvikle et
              treningsprogram.
            </li>
            <li>
              <strong>Lær av eksemplene:</strong> Be om eksempler for bedre å
              forstå konsepter. For eksempel: “Kan du gi meg et eksempel på
              hvordan man skriver en overbevisende søknad?”
            </li>
          </ol>
        </div>
      </section>
      <section id="listOfAI">
        <h2>De mest brukte KI i 2024:</h2>
        <div className="logo-grid">
          <ul>
            <li>
              <Link>
                Chat GPT
                <img src={ChatGPT} alt="Chat GPT logo"></img>
              </Link>
              :{" "}
              <span className="logo-grid-link">
                <Link to="https://chatgpt.com/">Besøk ChatGPT</Link>
              </span>
            </li>
            <li>
              <Link>
                CharacterAI
                <img src={CharacterAI} alt="CharacterAI logo"></img>
              </Link>
              :{" "}
              <span className="logo-grid-link">
                <Link to="https://beta.character.ai/">Besøk CharacterAI</Link>
              </span>
            </li>
            <li>
              <Link>
                DeepL
                <img src={DeepL} alt="DeepL logo"></img>
              </Link>
              :{" "}
              <span className="logo-grid-link">
                <Link to="https://www.deepl.com/">Besøk DeepL</Link>
              </span>
            </li>
            <li>
              <Link>
                Gemini
                <img src={Gemini} alt="Gemini logo"></img>
              </Link>
              :{" "}
              <span className="logo-grid-link">
                <Link to="https://gemini.google.com/">Besøk Gemini</Link>
              </span>
            </li>
            <li>
              <Link>
                GitHub Copilot
                <img src={GitCopilot} alt="GitHub Copilot logo"></img>
              </Link>
              :{" "}
              <span className="logo-grid-link">
                <Link to="https://github.com/features/copilot">
                  Besøk GitHub Copilot
                </Link>
              </span>
            </li>
            <li>
              <Link>
                Grammarly
                <img src={Grammarly} alt="Grammarly logo"></img>
              </Link>
              :{" "}
              <span className="logo-grid-link">
                <Link to="https://www.grammarly.com/">Besøk Grammarly</Link>
              </span>
            </li>
            <li>
              <Link>
                HuggingFace
                <img src={HuggingFace} alt="HuggingFace logo"></img>
              </Link>
              :{" "}
              <span className="logo-grid-link">
                <Link to="https://huggingface.co/">Besøk HuggingFace</Link>
              </span>
            </li>
            <li>
              <Link>
                Microsoft Copilot
                <img src={Microsoft} alt="Microsoft Copilot logo"></img>
              </Link>
              :{" "}
              <span className="logo-grid-link">
                <Link to="https://copilot.microsoft.com/">
                  Besøk Microsoft Copilot
                </Link>
              </span>
            </li>
            <li>
              <Link>
                Midjourney
                <img src={Midjourney} alt="Midjourney logo"></img>
              </Link>
              :{" "}
              <span className="logo-grid-link">
                <Link to="https://www.midjourney.com/">Besøk Midjourney</Link>
              </span>
            </li>
            <li>
              <Link>
                Notion
                <img src={Notion} alt="Notion logo"></img>
              </Link>
              :{" "}
              <span className="logo-grid-link">
                <Link to="https://www.notion.so/">Besøk Notion</Link>
              </span>
            </li>
            <li>
              <Link>
                Perplexity
                <img src={Perplexity} alt="Perplexity logo"></img>
              </Link>
              :{" "}
              <span className="logo-grid-link">
                <Link to="https://www.perplexity.ai/">Besøk Perplexity</Link>
              </span>
            </li>
            <li>
              <Link>
                Quillbot
                <img src={Quillbot} alt="Quillbot logo"></img>
              </Link>
              :{" "}
              <span className="logo-grid-link">
                <Link to="https://quillbot.com/">Besøk Quillbot</Link>
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
