/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgia0i046cfjbfi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "orfrk6n3",
    "name": "identifier",
    "type": "text",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("sgia0i046cfjbfi")

  // remove
  collection.schema.removeField("orfrk6n3")

  return dao.saveCollection(collection)
})
