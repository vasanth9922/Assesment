import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import ItemsTotalAmt from './ItemsTotalAmt';
import './CartPage.css';
function CartPage({ items, onAddOne, onRemoveOne }) {

    if(items.length == 0){

        return(
        <div className="emptyCartlayout">
            <p>Your cart is Empty.</p>
            <p>Why not add some expensive products into it ??!!</p>
        </div>
        );
    }

    return (
        <div>
        <ul className="CartPage-items">
            {items.map(item =>
                <li key={item.id} className="CartPage-item">
                    <Item item={item}>
                        <div className="CartItem-controls">
                            <button
                                className="CartItem-removeOne"
                                onClick={() => onRemoveOne(item)}>&ndash;</button>
                            <span className="CartItem-count">{item.count}</span>
                            <button
                                className="CartItem-addOne"
                                onClick={() => onAddOne(item)}>+</button>
                        </div>
                    </Item>
                </li>
            )}
        </ul>
        <ItemsTotalAmt items={items}></ItemsTotalAmt>
        </div>
    );
}

CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
};
export default CartPage;