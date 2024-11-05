/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6p5uq8tyo0akpya")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tvzamiye",
    "name": "active",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6p5uq8tyo0akpya")

  // remove
  collection.schema.removeField("tvzamiye")

  return dao.saveCollection(collection)
})
