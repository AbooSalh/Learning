import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SuperHeroesPage from "./components/SuperHerosPage";
import RQSuperHeroesPage from "./components/RQSuperHeroes";
import HomePage from "./components/HomePage";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import RQSuperHero from "./components/RQSuperHero";
import PaganatedPage from "./components/PaganatedPage";
import InfinieQ from "./components/InfiniteQ";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/rq-super-heroes/:id" element={<RQSuperHero />} />
            <Route path="/super-heroes" element={<SuperHeroesPage />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
            <Route path="/paganate" element={<PaganatedPage />} />
            <Route path="/infinie" element={<InfinieQ />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
