import {createBrowserRouter,
         createRoutesFromElements, 
         Route,
         RouterProvider
  } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import Home from "./components/Home";
import About from './components/About';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import Portfolio from './components/Portfolio';
import PortfolioDetails from './components/PortfolioDetails';
import TeamPage from './components/TeamPage';
import TeamDetails from './components/TeamDetails';
import BlogsPage from './components/BlogsPage';
import BlogDetails from './components/BlogDetails';
import ErrorPage from './components/ErrorPage';
import Contact from './components/Contact';


function App() {
  const handleTop =()=>{
    window.scrollY('0')
  }
console.log(window)
  const router  = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<PageLayout />}>
        <Route path='/' element={<Home handleTop={handleTop}/>} />
        <Route path='service' element={<Services />} />
        <Route path='servicedetails' element={<ServiceDetails />}/>
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='portfoliodetails' element={<PortfolioDetails />}/>
        <Route path='team' element={<TeamPage />}/>
        <Route path='teamdetails' element={<TeamDetails />}/>
        <Route path='blog' element={<BlogsPage />}/>
        <Route path='blogdetails' element={<BlogDetails />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    )
  )

  return (
      <RouterProvider router={router}/>
  )
}

export default App
