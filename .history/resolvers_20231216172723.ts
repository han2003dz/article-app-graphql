import Article from "./models/article.model";

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
      const {id, article} = args;
      const record = await Article.findOne({_id: id, deleted: false})
    }

  }
};
