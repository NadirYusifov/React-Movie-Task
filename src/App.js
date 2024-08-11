import FilmCard from "./Components/FilmCard/Films/index"
import './App.css'
import { useEffect, useState } from "react";

function App() {
  const [films, setFilms] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json()
        .then((data) => {
          setFilms(data);
        })
        .catch((err) => {
          console.log(err.massage);
        }));
  }, []);

  return (


    <div className="films-container">
      {films.map((film) => {
        return (
          <FilmCard
            key={film.id}
            title={film.title}
            image={film.image}
            description={film.description}
          />)
      })}
      {/* <FilmCard title="Ford V Ferrari" image="https://i.etsystatic.com/18242346/r/il/a7773d/2083336274/il_fullxfull.2083336274_41kh.jpg" descerption="Ford v Ferrari (titled Le Mans '66 in some European countries)[4] is a 2019 American biographical sports drama film directed by James Mangold and written by Jez Butterworth, John-Henry Butterworth, and Jason Keller. It stars Matt Damon and Christian Bale, with Jon Bernthal, Caitríona Balfe, Tracy Letts, Josh Lucas, Noah Jupe, Remo Girone, and Ray McKinnon in supporting roles. The plot follows a determined team of American and English engineers and designers, led by automotive designer Carroll Shelby and his British driver, Ken Miles, who are hired by Henry Ford II and Lee Iacocca to build a race car to defeat the perennially dominant Italian racing team Scuderia Ferrari at the 1966 24 Hours of Le Mans race in France." />
      <FilmCard title="Baby Driver" image="https://i.ebayimg.com/images/g/6~wAAOSw6YtZViYh/s-l1600.webp" descerption="Baby Driver is a 2017 action film written and directed by Edgar Wright. It stars Ansel Elgort as a getaway driver seeking freedom from a life of crime with his girlfriend Debora (Lily James). Eiza Gonzalez, Jon Hamm, Jamie Foxx, Jon Bernthal, and Kevin Spacey appear in supporting roles. Eric Fellner and his Working Title Films partner Tim Bevan produced Baby Driver in association with Big Talk Productions' Nira Park. Sony and TriStar Pictures handled commercial distribution of the film. Baby Driver was financed through tax subsidies from the Georgia state government and a co-production pact between TriStar and MRC." />
      <FilmCard title="Mission Impossible" image="https://m.media-amazon.com/images/M/MV5BYzFiZjc1YzctMDY3Zi00NGE5LTlmNWEtN2Q3OWFjYjY1NGM2XkEyXkFqcGdeQXVyMTUyMTUzNjQ0._V1_FMjpg_UX1000_.jpg" descerption="In January 2019, an eighth Mission: Impossible film was announced to be in development, written and directed by Christopher McQuarrie. It was originally to be filmed back-to-back with the seventh film.[3][4] It was scheduled to be released on August 5, 2022, but was delayed to November 4, 2022, then to July 7, 2023, then to June 28, 2024, due to the COVID-19 pandemic.[5][6] It was later delayed to May 23, 2025 due to the 2023 SAG-AFTRA strike." />
      <FilmCard title="Lamborghini: The Man Behind the Legend" image="https://m.media-amazon.com/images/M/MV5BMjBkMTRkMWQtNzAwYS00MmE2LWI5YzktNDU5OGY2NjIzMzNjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_FMjpg_UX1000_.jpg" descerption="Lamborghini: The Man Behind the Legend is a 2022 American biographical drama film written and directed by Robert Moresco and starring Frank Grillo as Italian entrepreneur Ferruccio Lamborghini. It was released in select theaters in the United States on November 18, 2022, by Lionsgate." /> */}
    </div>
  );
}

export default App;
