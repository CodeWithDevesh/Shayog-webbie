import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home"
import Resources from "./resources";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
