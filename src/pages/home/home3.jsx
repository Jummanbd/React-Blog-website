import Listenpodcasts from "../../components/audiotwo/listenpodcasts"
import Hemebannerthree from "../../components/bannerslider/hemebannerthree"
import GeneralHeader from "../../components/common/navbar/GeneralHeader"
import Editorpicks from "../../components/editorpicks/editorpicks"
import Footer from '../../components/footer/footer'
import Newsauthors from "../../components/newauthors/newsauthors"
import Sidebar from "../../components/sider/sidebar"
import Travelvideo from "../../components/travel/travelvideo"
import Trendingthree from "../../components/trending/trendingthree"

const Home3 = () => {
  return (
    <main>
    <GeneralHeader/>
    <Hemebannerthree/>
    <Trendingthree/>
    <Travelvideo/>
    <Listenpodcasts/>
    <Editorpicks/>
    <Newsauthors/>
    <Sidebar/>
    <Footer className={'pagethree-footer-area'}/>
    </main>
  )
}

export default Home3
