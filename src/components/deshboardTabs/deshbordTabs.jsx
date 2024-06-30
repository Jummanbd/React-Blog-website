import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import BillingAddress from '../common/deshbord/billingaddress';
import Deshboard from '../common/deshbord/deshboardfrom';
import Editor from '../common/deshbord/editor';
import Posts from '../common/deshbord/posts';
import Subscription from '../common/deshbord/subscription';

const DeshbordTabs = () => {
  return (
    <div className="container">
    <Tab.Container id="left-tabs-example" defaultActiveKey="dash-board">
      <Row>
        <Col lg={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="dash-board">⏳ Dash board</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="posts">📕 Posts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="edit-profile">🛠 Edit profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="subscription">📃 Subscription</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="billing-address">✈ Billing address</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="submit-post">✍ Submit post</Nav.Link>
            </Nav.Item>
            <hr/>
            <Nav.Item>
              <Nav.Link href="/">💡 Sign out</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col lg={9}>
          <Tab.Content>
            <Tab.Pane eventKey="dash-board"><Deshboard/></Tab.Pane>
            <Tab.Pane eventKey="posts"><Posts/></Tab.Pane>
            <Tab.Pane eventKey="edit-profile"><Editor/></Tab.Pane>
            <Tab.Pane eventKey="subscription"><Subscription/></Tab.Pane>
            <Tab.Pane eventKey="billing-address"><BillingAddress/></Tab.Pane>
            <Tab.Pane eventKey="submit-post"><Deshboard/></Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

    </div>
  )
}

export default DeshbordTabs
