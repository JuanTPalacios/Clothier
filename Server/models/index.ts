import fs from 'fs';
import path from 'path';
import { Dialect, Sequelize } from 'sequelize';
import {DataTypes} from 'sequelize';
  
const config = {
  host: 'Localhost',
  dialect: 'postgres' as Dialect,
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000, 
  },
};

const sequelize = new Sequelize(process.env.DB ? process.env.DB : 'postgres', 'postgres', 'admin', config);
const localDb:any = {};

const files = fs.readdirSync(__dirname);

for (const file of files) {
  if (file !== 'index.ts' && file !== 'db.ts') {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    localDb[model.name] = model;
  }
}

for (const model in localDb) {
  if (localDb[model].associate) localDb[model].associate(localDb);
}

localDb.sequelize = sequelize;
localDb.Sequelize = Sequelize;

//Users to ADQ Association (1 to many)
localDb.users.hasMany(localDb.ADQ, {
  foreignKey: {
    name: 'userPrimaryKey',
    type: DataTypes.INTEGER,
    allowNull: false 
  }
});
localDb.ADQ.belongsTo(localDb.users);

//Items to ADQ Association (1 to many)
localDb.items.hasMany(localDb.ADQ, {
  foreignKey: {
    name: 'itemPrimaryKey',
    type: DataTypes.INTEGER,
    allowNull: false
  }
});
localDb.ADQ.belongsTo(localDb.items);

//Follow: many 2 many association
localDb.users.belongsToMany(localDb.users, {as: "User", foreignKey: "userPrimaryKey", through: "Follows"})
localDb.users.belongsToMany(localDb.users, {as: "Followed", foreignKey: "FollowedId", through: "Follows"})


//Relationship w/ Follow>
localDb.users.hasMany(localDb.Follows, {
  foreignKey: {
    name: 'userPrimaryKey',
    type: DataTypes.INTEGER,
    allowNull: false 
  }
});
localDb.Follows.belongsTo(localDb.users);

localDb.users.hasMany(localDb.Follows, {
  foreignKey: {
    name: 'FollowedId',
    type: DataTypes.INTEGER,
    allowNull: false 
  }
});
localDb.Follows.belongsTo(localDb.users);

export default localDb;
