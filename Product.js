import {Card,Button} from 'react-bootstrap';

const Product = props => {
    return(<Card className='justify-content-center'>
        <Card.Text>{props.album}</Card.Text>
        <Card.Img style={{height:"100px",width:"65px"}} src={props.imageUrl} alt={props.title}></Card.Img>
        <Card.Body>{props.title}</Card.Body>
        
        <Card.Footer><p>{`$${props.price}`}</p><Button varient="info" >Add to Card</Button></Card.Footer>
    </Card>);
};

export default Product;