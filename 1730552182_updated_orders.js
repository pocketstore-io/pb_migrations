/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jyfe7mj5xof4x35")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zl1yz01r",
    "name": "payment_method_info",
    "type": "json",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jyfe7mj5xof4x35")

  // remove
  collection.schema.removeField("zl1yz01r")

  return dao.saveCollection(collection)
})
