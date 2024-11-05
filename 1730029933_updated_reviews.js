/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("okmus6luz9ups4e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gak5xtqt",
    "name": "public",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("okmus6luz9ups4e")

  // remove
  collection.schema.removeField("gak5xtqt")

  return dao.saveCollection(collection)
})
