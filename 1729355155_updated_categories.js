/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k6mrcz91e2tprp0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wdgvimcx",
    "name": "slug",
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
  const collection = dao.findCollectionByNameOrId("k6mrcz91e2tprp0")

  // remove
  collection.schema.removeField("wdgvimcx")

  return dao.saveCollection(collection)
})
