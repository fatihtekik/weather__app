import './componens/Home.css'
import { createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter,Link, Outlet, Route , RouterProvider} from "react-router-dom"
import HomePage from "./componens/Home.js";
import ProfilePage from "./componens/ProfilePage.js";
import Search from './componens/Search.js'
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
