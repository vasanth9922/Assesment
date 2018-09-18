import React from 'react';
import NavLink from './Navlink'
import ItemsTotalAmt from './ItemsTotalAmt';

/*const Nav = ({ items, activeTab, onTabChange }) => (
    <nav className="App-nav">
        <ul>
            <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
                <NavLink index={0} onClick={onTabChange}>Items</NavLink>
            </li>
            <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
                <NavLink index={1} onClick={onTabChange}>Cart</NavLink>
            </li>
        </ul>
    </nav>
);
*/

function Nav({ items, activeTab, onTabChange }) {

    if(items == null) {
        console.log("neeeeeeeee")
    }
    else {
        console.log("pqqqqqqqq")
        console.log(items)
    }

    return (
        <nav className="App-nav">
        <ul>
            <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
                <NavLink index={0} onClick={onTabChange}>Items</NavLink>
            </li>
            <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
                <NavLink index={1} onClick={onTabChange}>Cart</NavLink>
            </li>
            <li className='AApp-nav-item'>
                <ItemsTotalAmt items={items}></ItemsTotalAmt>
            </li>
        </ul>
    </nav>
    );
}

export default Nav;