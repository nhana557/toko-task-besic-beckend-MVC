
const Pool = require("../config/db");
const searching = (search) =>{
    return Pool.query( "SELECT * FROM product WHERE name ILIKE $1", [`%${search}%`] );
};

const selectAll = (numberPerPage,startPages,sort,sortby) => {
    return Pool.query(`SELECT * FROM product ORDER BY ${sortby} ${sort} LIMIT ${numberPerPage} OFFSET ${startPages}`);
};

const countProduct = () =>{
    return Pool.query("SELECT COUNT(*) FROM product");
};

const select = (id) =>{
    return Pool.query(`select * from product  where id=${id}`);
};
const insert = (id, name, stock, price, size, color, category_id, transaksi_id) =>{
    return Pool.query(`INSERT INTO product(id, name, stock, price, size, color, category_id, transaksi_id) VALUES(
        ${id},
        '${name}', 
        ${stock}, 
        ${price}, 
        '${size}', 
        '${color}',
        ${category_id}, 
        ${transaksi_id})`);
};
const update = (id, name, stock, price, size, color, category_id, transaksi_id) =>{
    return Pool.query(`UPDATE product SET
            name='${name}', 
            stock=${stock}, 
            price=${price}, 
            size='${size}', 
            color='${color}',
            category_id=${category_id}, 
            transaksi_id=${transaksi_id}
    WHERE id=${id}`);
};
const deleteProduct = (id) =>{
    return Pool.query(`DELETE FROM  product WHERE id=${id}`);
};


module.exports = {
    selectAll,
    select,
    insert,
    update,
    deleteProduct,
    countProduct,
    searching
};