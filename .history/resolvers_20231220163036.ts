import Article from "./models/article.model";
import Category from "./models/category.model";
export const resolvers = {
  Query: {
    hello: () => {
      return "Hello world";
    },
    getListArticle: async () => {
      const articles = await Article.find({
        deleted: false,
      });

      return articles;
    },
    getArticle: async (_, args) => {
      const { id } = args;
      const article = await Article.findOne({
        _id: id,
        deleted: false,
      });
      return article;
    },

    getListCategory: async () => {
      const categories = await Category.find({
        deleted: false
      });
  
      return categories;
    },
    getCategory: async (_, args) => {
      const { id } = args;
      const category = await Category.findOne({
        _id: id,
        deleted: false
      });
  
      return category;
    },
  },

  Article: {
    category: async (article) => {
      const categoryId = article.categoryId;
      const category = await Category.findOne({
        _id: categoryId,
        deleted: false
      });
      return category;
    }
  },

  Mutation: {
    createArticle: async (_,args) => {
      const {article} = args;

      const record = new Article(article);
      await record.save();
      return record;
    },
    editArticle: async (_, args) => {
      const {id, article} = args;
      await Article.updateOne({_id: id, deleted: false}, article);
      const record = await Article.findOne({_id: id, deleted: false});
      return record;
    },
    deleteArticle: async (_, args) => {
      const {id} = args;
      const record = await Article.updateOne({_id: id, deleted: false}, {
        deleted: true,
        deleteAt: new Date()
      })

      return "Đã xóa thành công!"
    }

  }
};
