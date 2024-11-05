/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ttvuhtggynzfyjh")

  collection.listRule = "stock > 0"
  collection.viewRule = "stock > 0"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ttvuhtggynzfyjh")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
