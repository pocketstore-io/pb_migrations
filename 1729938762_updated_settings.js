/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gnnv6wvhrxdcb1v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fwqg2a8x",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gnnv6wvhrxdcb1v")

  // remove
  collection.schema.removeField("fwqg2a8x")

  return dao.saveCollection(collection)
})
