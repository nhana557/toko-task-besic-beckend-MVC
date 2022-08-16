const Pool = require("../config/db");

const selectAll = (numberPerPage,startPages,sort,sortby) => {
    return Pool.query(`SELECT * FROM category ORDER BY ${sortby} ${sort} LIMIT ${numberPerPage} OFFSET ${startPages}`);
};
const searching = (search) =>{
    return Pool.query( "SELECT * FROM category WHERE name ILIKE $1", [`%${search}%`] );
};

const select = (id) =>{
    return Pool.query(`select * from category where id=${id}`);
};

const insert = (id, name) =>{
    return Pool.query(`insert into category values(${id}, '${name}')`);
};

const update = (id, name) =>{
    return Pool.query(`UPDATE category SET name='${name}' WHERE id=${id}`);
};

const deleteCategory = (id) =>{
    return Pool.query(`delete from category where id=${id}`);
};

const countProduct = ()=>{
    return Pool.query("SELECT COUNT(*) FROM category");
};

module.exports = {
    selectAll,
    select,
    insert,
    update,
    deleteCategory,
    countProduct,
    searching
};