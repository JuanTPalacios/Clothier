
module.exports = (sequelize: any, DataTypes:any) => {
  const items = sequelize.define('items', {
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    image: DataTypes.STRING,
    primaryKey: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    brand: DataTypes.STRING,
    productId: DataTypes.STRING,
    productUrl: DataTypes.STRING,
   
    
  });
  return items; 
};
