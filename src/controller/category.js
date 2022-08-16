const categoryModel = require("../models/category");
const categoryController = {
    allCategory: async(req, res) => {
        try{
          const page = Number(req.query.page) || 1;
          const dataPage = Number(req.query.dataPage) || 5;
          const startPages = (page - 1) * dataPage;
          const sortby = req.query.sortby || "id";
          const sort = req.query.sort || "ASC";
          const result = await categoryModel.selectAll(dataPage,startPages,sort,sortby);
          const {rows: [count]} = await categoryModel.countProduct();
          const totalData = parseInt(count.count);
          const totalPages = Math.ceil(totalData/dataPage);
          res.status(200).json({
            pagination:
                {
                    page: page,
                    dataPage: dataPage,
                    totalData: totalData,
                    totalPages: totalPages,
                },
                    data:result.rows,
                });
                }catch(error){
                console.log(error);
                }
    },
    searching:(req, res) =>{
        const search = req.query.search ||"";
        categoryModel.searching(search)
        .then(result => res.json(result.rows))
        .catch(err => res.send(err));
    },
    category: (req, res) =>{
        const id = Number(req.params.id);
        categoryModel.select(id)
        .then(
            result => res.json(result.rows)
        )
        .catch(err => res.send(err));
    },
    insert: (req, res) =>{
        const {id, name } = req.body;
        categoryModel.insert(id, name)
        .then(res.json("Created Category"))
        .catch(err => res.send(err));
    },
    update: (req, res) =>{
        const id = req.params.id;
        const name = req.body.name;
        categoryModel.update(id, name)
        .then(res.json("Updated Category"))
        .catch(err => res.send(err));
    },
    deleted: (req, res)=>{
        const id = Number(req.params.id);
        categoryModel.deleteCategory(id)
        .then(res.json("Deleted Category"))
        .catch(err => res.send(err));
    }
};


module.exports = categoryController;