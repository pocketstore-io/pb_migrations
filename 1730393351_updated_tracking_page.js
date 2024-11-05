/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgia0i046cfjbfi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9jowacu1",
    "name": "data",
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
  const collection = dao.findCollectionByNameOrId("sgia0i046cfjbfi")

  // remove
  collection.schema.removeField("9jowacu1")

  return dao.saveCollection(collection)
})
