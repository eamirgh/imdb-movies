import React from 'react';
import {Button} from "@/components/ui/button.jsx";
import Header from "@/components/inc/header.jsx";
import Footer from "@/components/inc/footer.jsx";

const App = () => (
    <>
        <Header/>
        <main className="flex flex-wrap items-center gap-2 md:flex-row">
            <div className="bg-primary text-primary-foreground">Hello</div>
            <Button>Hello</Button>
        </main>
        <Footer/>
    </>
);

export default App;