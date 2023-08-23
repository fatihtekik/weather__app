import './components/Home.css'
import { createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter,Link, Outlet, Route , RouterProvider} from "react-router-dom"
import HomePage from "./components/Home/Home.js";
import ProfilePage from "./components/ProfilePage/ProfilePage.js";
import Search from './components/SearchPage/Search.js'
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route index path=":cityName" element = {<HomePage/>}/>
    <Route path='/search' element = {<Search/>}/>
      <Route path="/profile" element ={<ProfilePage/>}/>
  </Route>
))

function RootLayout(){
  return <>
  <div className="mainLinks">
    <Link to = '/'>Home</Link>
    <Link to = '/search'>search</Link>
    <Link to = '/profile'>profile</Link>
    <Outlet/>
  </div>
  
  </>
 
}

function App() {
    return <RouterProvider router={router}/>
}

export default App;
