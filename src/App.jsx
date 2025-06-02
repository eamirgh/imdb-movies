import Header from "@/components/inc/header.jsx";
import Footer from "@/components/inc/footer.jsx";
import {Calendar, Globe, Search, Star} from "lucide-react";
import {useEffect, useState} from "react";
import {useDebounce} from "react-use";

function Hero() {
    return <section className="flex flex-col items-center justify-center my-8">
        <img src="/hero.png" alt="Poster" className="w-2/3"/>
        <h1 className="text-5xl font-bold text-gray-100">
            Find <span
            className="bg-gradient-to-r from-white via-indigo-400 to-indigo-800 inline-block text-transparent bg-clip-text">Movies</span> You'll
            Love Without the Hassle
        </h1>
    </section>;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const API_OPTIONS = {
    method: 'GET', headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
};

function MovieCard({movie: {title, poster_path, original_language, vote_average, vote_count, overview, release_date}}) {
    return <article className="p-2 bg-slate-800 rounded flex flex-col text-white justify-between">
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="aspect-[3/4] w-full object-cover"
                 alt={title}/>
            <h3 className="text-xl text-bold my-2">{title}</h3>
            <details className="text-sm text-justify">
                <summary className="list-none">{overview}</summary>
            </details>
        </div>
        <div className="flex items-center my-4 text-sm">
            <Globe className="text-indigo-500"/>
            <span className="uppercase mx-2">{original_language}</span>
            <Star className="text-indigo-500"/>
            <span className="mx-2">{vote_average.toFixed(1)}({vote_count})</span>
            <Calendar className="text-indigo-500"/>
            <span className="mx-2">{release_date.split('-')[0]}</span>

        </div>
    </article>;
}

function Main() {
    const [movieList, setMovieList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const fetchMovies = async () => {
        try {
            const endpoint = `${API_BASE_URL}/discover/movie?include_video=false&page=1&sort_by=popularity.desc`;
            const response = await fetch(endpoint, API_OPTIONS)
            const data = await response.json();
            setMovieList(data.results);
        } catch (e) {
            console.log(`Error fetching movies: ${e}`);
        }
        setIsLoading(false)
    }
    const [searchQuery, setSearchQuery] = useState('')
    useDebounce(() => {
        if (!searchQuery) {
            return;
        }
        console.log(searchQuery);
    }, 1000, [searchQuery])
    useEffect(() => {
        fetchMovies()
    }, [])
    return <main className="flex flex-col">
        <Hero/>
        <section className="w-full flex items-center justify-center my-4">
            <div className="w-1/2 max-w-full flex items-center bg-slate-800 rounded">
                <Search className="text-indigo-400 mr-2"/>
                <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => {
                    setSearchQuery(e.target.value)
                }} className="text-gray-100 h-10 my-2 outline-0 w-full"/>
            </div>
        </section>
        <section className="flex flex-col">
            {isLoading ? (<p className="text-white">Loading...</p>) : (
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
                    {movieList.map((movie) => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))}
                </div>
            )}
        </section>
    </main>;
}

const App = () => (<div className="bg-slate-900 w-full min-h-screen flex items-center justify-center">
    <Header/>
    <Main/>
    <Footer/>
</div>);

export default App;