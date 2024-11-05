/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ttvuhtggynzfyjh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uxc7ekdq",
    "name": "stock",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 10,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ttvuhtggynzfyjh")

  // remove
  collection.schema.removeField("uxc7ekdq")

  return dao.saveCollection(collection)
})
