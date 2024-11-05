/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ttvuhtggynzfyjh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zrnp4mm4",
    "name": "config",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ttvuhtggynzfyjh")

  // remove
  collection.schema.removeField("zrnp4mm4")

  return dao.saveCollection(collection)
})
