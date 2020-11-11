import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Temas extends BaseSchema {
  protected tableName = 'temas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('descricao', 80).notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
