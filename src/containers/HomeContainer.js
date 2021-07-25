import { connect } from "react-redux";
import { addToCart } from "../Services/Actions/Action";
import Home from "../components/Home";

const mapStateToProps = (state) => ({
  cardData: state,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});
//data is come from after click the button addToCart  this data send to addToCartHandler and after all data send to action with the help of dispatch
export default connect(mapStateToProps, mapDispatchToProps)(Home); //here, home and mapdispatch is connecting
// export default HomeContainer

// mapStateToProps is sending data or sharing data  and  mapDispatchToProps  for getting data or saving data
