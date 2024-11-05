/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2w15d304ljs2zt2")

  collection.indexes = []

  // remove
  collection.schema.removeField("znq4ijzb")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2w15d304ljs2zt2")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_gNSMegT` ON `payment_methods` (`code`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "znq4ijzb",
    "name": "code",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
