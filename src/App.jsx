import Header from "@/components/inc/header.jsx";
import Footer from "@/components/inc/footer.jsx";
import {Search} from "lucide-react";

function Hero() {
    return <section className="flex flex-col items-center justify-center">
        <img src="/hero.png" alt="Poster" className="w-2/3"/>
        <h1 className="text-5xl font-bold text-gray-100">
            Find <span
            className="bg-gradient-to-r from-white via-indigo-400 to-indigo-800 inline-block text-transparent bg-clip-text">Movies</span> You'll
            Love Without the Hassle
        </h1>
    </section>;
}

function Main() {
    return <main>
        <Hero/>
        <section className="w-full flex items-center justify-center my-4">
            <div className="w-1/2 max-w-full flex items-center bg-slate-800 rounded">
                <Search className="text-indigo-400 mr-2"/>
                <input type="text" placeholder="Search..." className="text-gray-100 h-10 my-2 outline-0 w-full"/>
            </div>
        </section>
    </main>;
}

const App = () => (<div className="bg-slate-900 w-full h-screen flex items-center justify-center">
    <Header/>
    <Main/>
    <Footer/>
</div>);

export default App;