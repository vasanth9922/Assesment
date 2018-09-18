import React from 'react';

import './ItemsTotalAmt.css';

function ItemsTotalAmt({ items }) {

    let totalAmt = 0;
    let totalItems = 0;
    items.map(item => {
        console.log(item);
        for (var count = 1; count <= item.count; count++) {
            totalAmt = totalAmt + item.price;
        }
        totalItems = totalItems + 1;
    })
    console.log("priya")
    console.log(totalAmt)
    return (
        <div>
            <br /><br />
            {totalItems} Item(s), Total: ${totalAmt}
        </div>
    );
}

export default ItemsTotalAmt;