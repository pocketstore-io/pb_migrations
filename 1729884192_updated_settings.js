/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gnnv6wvhrxdcb1v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0to7zleg",
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
  const collection = dao.findCollectionByNameOrId("gnnv6wvhrxdcb1v")

  // remove
  collection.schema.removeField("0to7zleg")

  return dao.saveCollection(collection)
})
