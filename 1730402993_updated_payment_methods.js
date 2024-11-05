/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2w15d304ljs2zt2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5d7xtlvb",
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
  const collection = dao.findCollectionByNameOrId("2w15d304ljs2zt2")

  // remove
  collection.schema.removeField("5d7xtlvb")

  return dao.saveCollection(collection)
})
