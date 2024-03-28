import PropTypes from 'prop-types';
import './Bottle.css'
const Bottle = ({bottle, handleAddToCart}) => {
    const{name, seller, price, img,} = bottle;
    return (
        <div className="bottle">

         <img src={img} alt="" />   
        <h2>Name: {name}</h2>
         <h3>Seller: {seller}</h3>
         <h3>Price: {price}</h3>
         <button onClick={()=>handleAddToCart(bottle)}>Purches</button>
        </div>
    );
};
Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;