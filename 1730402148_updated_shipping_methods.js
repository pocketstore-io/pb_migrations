/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6p5uq8tyo0akpya")

  // remove
  collection.schema.removeField("7dkiusxr")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6p5uq8tyo0akpya")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7dkiusxr",
    "name": "label",
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
})
