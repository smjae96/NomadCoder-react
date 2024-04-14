
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import Home from './routes/Home';
import Detail from "./routes/Detail";
const App5 = () => {
    
    
    return (
        <Router>
            <Routes>
                <Route path="/hello" element= {<h1>Hello!</h1>}/>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Detail />} />
            </Routes>
        </Router>
    );
};

export default App5;