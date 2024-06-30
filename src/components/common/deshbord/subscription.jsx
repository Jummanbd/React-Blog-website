import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';


const Subscription = () => {
  return (
    <div className='subscript-wrapper deshboardfrom'>
      <div className="section-heading">
        <h3 className="sec-title">Package Information</h3>
        <p className="decs-decs mt-2">You`ve subscribed to the follwing package</p>
      </div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="starter">
      <div className="button-btn">

          <Nav variant="pills" className="flex-row my-5">
            <Nav.Item>
              <Nav.Link eventKey="starter" >STARTER</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="basic">BASIC</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="plus">PLUS</Nav.Link>
            </Nav.Item>
          </Nav>
          </div>
     

          <Tab.Content>
            <Tab.Pane eventKey="starter">
              <div>
                <div className="d-flex align-items-center  py-3">
                  <p className="sec_decs me-4 fw-medium">Subcription Name :</p>
                  <p className='text-black fw-medium'>Starter</p>
                </div>
                <div className="d-flex align-items-center  py-3">
                  <p className="sec_decs me-4 fw-medium">Package & billing details :</p>
                  <p className='text-black fw-medium'>$15.50</p>
                </div>
                <div className="d-flex align-items-center  py-3">
                  <p className="sec_decs me-4 fw-medium">Remaining post :</p>
                  <p className='text-black fw-medium'>18</p>
                </div>
                <div className="d-flex align-items-center  py-3">
                  <p className="sec_decs me-4 fw-medium">Expire date :</p>
                  <p className='text-black fw-medium'>
                  October 10, 2019</p>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="basic">
            <div>
                <div className="d-flex align-items-center  py-3">
                  <p className="sec_decs me-4 fw-medium">Subcription Name :</p>
                  <p className='text-black fw-medium'>Basic</p>
                </div>
                <div className="d-flex align-items-center  py-3">
                  <p className="sec_decs me-4 fw-medium">Package & billing details :</p>
                  <p className='text-black fw-medium'>$45.50</p>
                </div>
                <div className="d-flex align-items-center  py-3">
                  <p className="sec_decs me-4 fw-medium">Remaining post :</p>
                  <p className='text-black fw-medium'>18</p>
                </div>
                <div className="d-flex align-items-center  py-3">
                  <p className="sec_decs me-4 fw-medium">Expire date :</p>
                  <p className='text-black fw-medium'>
                  October 10, 2019</p>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="plus">
            <div>
                <div className="d-flex align-items-center  py-3">
                  <p className="sec_decs me-4 fw-medium">Subcription Name :</p>
                  <p className='text-black fw-medium'>Plues</p>
                </div>
                <div className="d-flex align-items-center  py-3">
                  <p className="sec_decs me-4 fw-medium">Package & billing details :</p>
                  <p className='text-black fw-medium'>$222.50</p>
                </div>
                <div className="d-flex align-items-center  py-3">
                  <p className="sec_decs me-4 fw-medium">Remaining post :</p>
                  <p className='text-black fw-medium'>18</p>
                </div>
                <div className="d-flex align-items-center  py-3">
                  <p className="sec_decs me-4 fw-medium">Expire date :</p>
                  <p className='text-black fw-medium'>
                  October 10, 2019</p>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
 
    </Tab.Container>
    </div>
  )
}

export default Subscription
