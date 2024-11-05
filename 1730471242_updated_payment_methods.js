/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2w15d304ljs2zt2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iwqqdqqq",
    "name": "options",
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
  const collection = dao.findCollectionByNameOrId("2w15d304ljs2zt2")

  // remove
  collection.schema.removeField("iwqqdqqq")

  return dao.saveCollection(collection)
})
