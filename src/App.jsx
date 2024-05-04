import MovieCard from "./components/MoviesCard";
import {Home} from './components/Home';
const App = () => {
  return (
    <div>
      <Home />

      <main className="p-3">
        <div className="row">
          <div className="col-4">
            <MovieCard title="Don - (2022)" image="https://m.media-amazon.com/images/M/MV5BMjQ3MDFhMWEtMmM2Zi00NWM4LWJmNmYtOTVjMGJkNjljYTA1XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg" desc="Plot. Chakaravarthi, a famous film director, is desperately trying to make it to college. As he drives, he narrates the story of his college days. In the past, Chakaravarthi's father, Ganesan, is a strict man who cares a lot about Chakaravarthi's studies and wants him to be a civil engineer."/>
          </div>
          <div className="col-4">
            <MovieCard title="Leo - (2023)" image="https://img.nowrunning.com/content/movie/2023/thala-27593/Stills/leo_movie-01_2023621.jpg" desc="It is the third instalment in the Lokesh Cinematic Universe and is inspired by A History of Violence. The film follows Parthi, a café owner and animal rescuer in Theog, who is pursued by gangsters Antony and Harold Das who suspect him to be Antony's estranged son, Leo." />
          </div>
          <div className="col-4">
            <MovieCard title="Hi Naana - (2023)" image="https://d1vzdswwroofzl.cloudfront.net/wp-content/uploads/2023/12/Hi-Nanna-Movie.jpg" desc="Hi Nanna unfolds a poignant narrative against the scenic backdrop of Coonoor. The story follows Viraj (Nani), an aspiring photographer, and Varsha (Mrunal), who defy economic disparities to discover love. Their journey takes a turn when they become parents to Mahi (Baby Kiara).." />
          </div>
        </div>
      </main>

    </div>
  )
}
export default App;