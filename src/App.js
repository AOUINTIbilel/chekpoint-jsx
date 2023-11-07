import Description from "./components/Description";
import Link from "./components/Link";
import Name from "./components/Name";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import productJS from "./product";

function App() {
  return (
    <div>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productJS.url} />
      <Card.Body>
        <Card.Title>  <Name /></Card.Title>
        <Card.Text>
        <Description />
        </Card.Text>
        <Button variant="primary" onClick={()=>alert(productJS.name)}>>Click Here </Button>
      </Card.Body>
    </Card>




     {/* <Price />
    <Description />
    <Link /> */}
    </div>
  );
}

export default App;
