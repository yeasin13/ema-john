import React from 'react';
import useProducts from '../../hooks/useProduct';

const Orders = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h2>This is order: {products.length}</h2>
        </div>
    );
};

export default Orders;<h2>This is order</h2>