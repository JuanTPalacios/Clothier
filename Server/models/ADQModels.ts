
module.exports = (sequelize : any, DataTypes : any) => {
  const ADQ = sequelize.define('ADQ', {
    primaryKey: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  });
  return ADQ;
};
