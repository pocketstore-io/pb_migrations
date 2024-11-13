/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("64fro9hhscmxxhn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fiszphef",
    "name": "lang",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "de",
        "en",
        "fr"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("64fro9hhscmxxhn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fiszphef",
    "name": "lang",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "de",
        "en.fr"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
