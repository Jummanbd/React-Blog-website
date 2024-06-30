import GeneralHeader from "../../components/common/navbar/GeneralHeader";
import DeshbordTabs from "../../components/deshboardTabs/deshbordTabs";
import Footer from "../../components/footer/footer";
import Joninewster from "../../components/newauthors/joninewster";

const Deshboard = () => {
  return (
    <main>
     <GeneralHeader/>
      <section className="section--padding">
        <div className="container">
         <div className="deshboard-wrapper">
            <div className="row">
                <div className="col-lg-12">
                    <div className="heading-section text-center mb-4">
                        <h1 className="sec-title fw-bold pb-3">
                        Dash board
                        </h1>
                        <p className="sec_decs  ">View your dashboard, manage your posts, subscription and edit and profile.</p>
                    </div>
                </div>
            </div>
            <DeshbordTabs/>
         </div>
        </div>
      </section>
      <Joninewster/>
      <Footer className={'footer--area'}/>


    </main>
  )
}

export default Deshboard;
