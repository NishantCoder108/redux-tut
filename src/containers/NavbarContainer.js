import { connect } from "react-redux";
import Navbar from "../components/Navbar";

const mapStateToProps = (state) => ({
  data : state.cardItems
});

const mapDispatchToProps = (dispatch) => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar); 
