import {connect} from 'react-redux';
import Home from "../components/Home";
import { addToCart,removeToCart } from '../Services/Actions/actions';

const mapStateToProps = state => ({
    data:state.cardItems
})

const mapDispatchToProps = dispatch => ({
    addCartToHandler:data=>dispatch(addToCart(data)),
    removeCartToHandler:data=>dispatch(removeToCart(data))

})

export default connect(mapStateToProps,mapDispatchToProps)(Home);

// export default Home;