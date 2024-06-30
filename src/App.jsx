
import { Route, Routes } from 'react-router'
import './App.css'
import About from './pages/about/about'
import Author from './pages/author/author'
import CategoryAudio from './pages/category/categoryaudio'
import CategoryVideo from './pages/category/categoryvideo'
import Contact from './pages/contact/contact'
import Deshboard from './pages/dashboard/deshboard'
import Forgotpassword from './pages/forgotpassword/forgotpassword'
import Garden from './pages/garden/garden'
import Home from './pages/home/home'
import Home2 from './pages/home/home2'
import Home3 from './pages/home/home3'
import Login from './pages/login/login'
import SingleaudioPage from './pages/single/singleaudiopage'
import Singleone from './pages/single/singleone'
import Singletwo from './pages/single/singletwo'
import SinglevideoPage from './pages/single/singlevideopage'
import Signup from './pages/singup/signup'



function App() {
  
  return (
    <Routes>
     <Route  path="/" element={<Home/>} />
     <Route  path="/index2" element={<Home2/>} />
     <Route  path="/index3" element={<Home3/>} />
     <Route  path="/singles-page-one" element={<Singleone/>} />
     <Route  path="/singles-page-two" element={<Singletwo/>} />
     <Route  path="/singles-page-audio" element={<SingleaudioPage/>} />
     <Route  path="/singles-page-video" element={<SinglevideoPage/>} />
     <Route  path="/beauty" element={<Garden/>} />
     <Route  path="/category-page" element={<Garden/>} />
     <Route  path="/category-audio" element={<CategoryAudio/>} />
     <Route  path="/category-video" element={<CategoryVideo/>} />
     <Route  path="/author-page" element={<Author/>} />
     <Route  path="/about" element={<About/>} />
     <Route path='/dashboard-page' element={<Deshboard/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/forgot' element={<Forgotpassword/>}/>
    
    </Routes>
  )
}

export default App
