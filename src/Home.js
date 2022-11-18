import CardList from "./Card";
import { useEffect, useState } from "react";
import productData from "./const";
import { Container, Row, Col, Form } from "react-bootstrap";
import DragDrop from "./Drag";
import { connect, useDispatch, useSelector } from "react-redux";
import { setProducts } from "./redux/action/action";
const FilterProduct=(props)=>{
  return(
    <Col className="mb-2 col d-flex justify-content-center" >
      <>
            <CardList product={props.product} />
      </>
    </Col>);
}
const Home = (props) => {
  // const product=JSON.parse(productData);
  console.log(productData.filters.inlineFilters);
  const dispatch=useDispatch();

  const [data, setData] = useState(productData.products);

  const [initialFilter, setInitialFilter] = useState();
  const [gender, setGender] = useState();
  const [filterValue, setFilterValue] = useState();
  const product=useSelector((state)=>state);

  useEffect(() => {
    productData.filters.inlineFilters.map((gender) => {
      setGender(gender);
    });
    
  }, []);
  useEffect(() => {
    data.map((filter) => {
      setFilterValue(filter.gender);
    });
  }, [data,gender]);

    function productApi() {
      const url = "http://localhost:8081/api/product";
      fetch(url, {
        method: "GET",
        "Accept": "application/json",
        "Content-type": "application/json",
      })
        .then((res) => res.json())
        .then((data) => props.setProduct(data)
        );
    }
    useEffect(() => {
      // const url = "https://demo7303877.mockable.io/";
      // fetch(url)
      //   .then((res) => res.json())
      //   .then((data) => setData(data));
      // console.log(data);
      productApi();
      console.log(product,"product",props.product,"propsstate",props.ownitem,"propsitem");
    }, []);
  function handleOnChange(e) {
    const value = e.target.value;
    setFilterValue(value);
  }
  return (
    <Container>
      <DragDrop />
      <Row className="mt-2 mb-2">
        <Col className="col">
          <Form.Select
            style={{ width: "20rem" }}
            onChange={(e) => {
              handleOnChange(e);
            }}
          >
            {gender?.filterValues?.map((gender) => {
              return <option value={gender?.id}>{gender?.id}</option>;
            })}
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <>
          {data?.map((product) => {
            return (
              <Col className="mb-2 col d-flex justify-content-center">
                <CardList product={product} />
              </Col>
            );
          })}
          <h1>Filter Data:</h1>
          {data?.map((product) => {
            if (filterValue == product.gender.toLowerCase()) {
             return( <FilterProduct product={product} />);
            }
            if((filterValue=='men women' || filterValue=='boys girls')&& (product.gender.toLowerCase()=='unisex')){
              return( <FilterProduct product={product} />);
            }
          })}
        </>
      </Row>
    </Container>
  );
};
const mapStateToProps=(state,ownProps)=>{
  ownProps={id:1,name:"sanchitha"}
  let item=ownProps;
  return{
    product:state,
    ownitem:item,
  }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
  return{
    setProduct:(e)=>dispatch(setProducts(e)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
