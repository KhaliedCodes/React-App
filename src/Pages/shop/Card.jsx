import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function BasicExample({title,img,description, id}) {
  return (
    <Card style={{ width: '18rem' }}>
			<Link to={`/shop/${id}`}>
			<Card.Img variant="top" src={img} />
			</Link>
      
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;