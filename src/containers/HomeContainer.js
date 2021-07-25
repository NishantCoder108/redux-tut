import { connect } from "react-redux";
import { addToCart ,removeToCart } from "../Services/Actions/Action";
import Home from "../components/Home";

const mapStateToProps = (state) => ({
  /*cardData: state,   // it is very long to reach data so for that we use direct write */
  data : state.cardItems
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeToCartHandler: (data) => dispatch(removeToCart(data)),
});
//data is come from after click the button addToCart  this data send to addToCartHandler and after all data send to action with the help of dispatch
export default connect(mapStateToProps, mapDispatchToProps)(Home); //here, home and mapdispatch is connecting
// export default HomeContainer

// mapStateToProps is sending data or sharing data  and  mapDispatchToProps  for getting data or saving data
