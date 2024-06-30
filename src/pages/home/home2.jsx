import Audiotwo from "../../components/audiotwo/audiotwo";
import Homebannertwo from "../../components/bannerslider/homebannertwo";
import GeneralHeader from "../../components/common/navbar/GeneralHeader";
import Footer from "../../components/footer/footer";
import Joninewster from "../../components/newauthors/joninewster";
import Newsauthors from "../../components/newauthors/newsauthors";
import Seatravel from "../../components/travel/seatravel";
import Seatraveltwo from "../../components/travel/seatraveltwo";
import Trendingtwo from "../../components/trending/trendingtwo";


const Home2 = () => {
  return (
    <main>
        <GeneralHeader/>
        <Homebannertwo/>
        <Trendingtwo/>
        <Seatravel/>
        <Audiotwo/>
        <Newsauthors/>
        <Joninewster/>
        <Seatraveltwo/>
        <Footer className={'footer-areatwo'}/>
    </main>
  )
}

export default Home2
