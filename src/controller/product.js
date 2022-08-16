const productModel = require("../models/product");
const productController = {
  showAllProductLimited: async(req, res) => {
    try{
      const page = Number(req.query.page) || 1;
      const dataPage = Number(req.query.dataPage) || 5;
      const startPages = (page - 1) * dataPage;
      const sortby = req.query.sortby || "id";
      const sort = req.query.sort || "ASC";
      const result = await productModel.selectAll(dataPage,startPages,sort,sortby);
      const {rows: [count]} = await productModel.countProduct();
      const totalData = parseInt(count.count);
      const totalPages = Math.ceil(totalData/dataPage);
      res.status(200).json({
        pagination:
                {
                  page: page,
                  dataPage: dataPage,
                  totalData: totalData,
                  totalPages: totalPages
                },
                data:result.rows,
              });
            }catch(error){
              console.log(error);
            }
          },
      searching:(req, res) =>{
        const search = req.query.search ||"";
        productModel.searching(search)
        .then(result => res.json(result.rows))
        .catch(err => res.send(err));
      },

    getAllproduct: (req, res) =>{
        productModel.selectAll()
        .then(
            result => res.json(result.rows)
          )
          .catch(err => res.send(err)
          );
    },
    getproduct: (req, res) =>{
        const id = Number(req.params.id);
        productModel.select(id)
        .then(
            result => res.json(result.rows)
        )
        .catch(err => res.send(err));
    },
    insert: (req, res) =>{
        const {id, name, stock, price, size, color, category_id, transaksi_id } = req.body;
        productModel.insert(id, name, stock, price, size, color, category_id, transaksi_id)
          .then(
            res.json("product created")
          )
          .catch(err => res.send(err)
          );
      },
    update : (req, res) => {
      const id = Number(req.params.id);
      const { name , stock, price, size, color, category_id, transaksi_id } = req.body;
      productModel.update(id, name, stock, price, size, color, category_id, transaksi_id)
        .then(
           res.json("Product updated")
        )
        .catch(err => res.send(err.message)
        );
    },
    delete: (req, res)=>{
      const id = Number(req.params.id);
      productModel.deleteProduct(id)
      .then(
        res.json("Product deleted")
      )
      .catch(err => res.send(err)
      );
    }
};

module.exports = productController;