/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gnnv6wvhrxdcb1v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aezfsxel",
    "name": "additional",
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
  const collection = dao.findCollectionByNameOrId("gnnv6wvhrxdcb1v")

  // remove
  collection.schema.removeField("aezfsxel")

  return dao.saveCollection(collection)
})
