
import { Button,Card } from "react-bootstrap";
const CardList=(props)=>{  
    return(
        <div key={props?.product?.catalogDate}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props?.product?.searchImage} />
      <Card.Body>
        <Card.Title>{props?.product?.category}</Card.Title>
        <Card.Text>
         {props.des}
        </Card.Text>
        <Card.Text>
         {props?.product?.additionalInfo}
        </Card.Text>
        <Card.Text>
         Rs.{props?.product?.price}<del style={{color:'red'}} className="mr-2">{props.product.mrp}</del>
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    )
}
 export default CardList;