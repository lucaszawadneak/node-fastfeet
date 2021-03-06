import Sequelize from 'sequelize';

import User from '../app/models/User';
import DeliveryProblem from '../app/models/DeliveryProblem';
import Recipient from '../app/models/Recipient';
import Provider from '../app/models/Provider';
import File from '../app/models/File';
import Delivery from '../app/models/Delivery';
import databaseConfig from '../config/database';

const models = [User, Recipient, Provider, File, Delivery, DeliveryProblem];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
