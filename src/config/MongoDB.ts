import { Db, MongoClient } from 'mongodb'

export class MongoDB {
  static connection;
  static db: Db;

  static async createConnection () {
    this.connection = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    this.db = await this.connection.db()

    return this
  }

  static async closeConnection () {
    await this.connection.close()
  }

  static async getCollection <T> (name: string) {
    if (!this.db) {
      await this.createConnection()
    }

    return this.db.collection<T>(name)
  }
}
