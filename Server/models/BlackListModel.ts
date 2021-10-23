module.exports = (sequelize : any, DataTypes : any) => {
  const BlackList = sequelize.define('BlackList', {
    primaryKey: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    sessionKey: {
      type: DataTypes.STRING,
    }
  });
  return BlackList;
};
