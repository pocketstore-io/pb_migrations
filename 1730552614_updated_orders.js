/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jyfe7mj5xof4x35")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t98azn4j",
    "name": "shipping_method_info",
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
  const collection = dao.findCollectionByNameOrId("jyfe7mj5xof4x35")

  // remove
  collection.schema.removeField("t98azn4j")

  return dao.saveCollection(collection)
})
