/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgia0i046cfjbfi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "evifbhiy",
    "name": "customer",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgia0i046cfjbfi")

  // remove
  collection.schema.removeField("evifbhiy")

  return dao.saveCollection(collection)
})
