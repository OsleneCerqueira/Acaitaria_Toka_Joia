'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produtos.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    tamanho: DataTypes.INTEGER,
    preco: DataTypes.DOUBLE,
    categoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produto',
    tableName: 'produtos',
  });
  return Produto;
};