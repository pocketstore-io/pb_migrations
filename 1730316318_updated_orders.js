/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jyfe7mj5xof4x35")

  collection.listRule = "@request.auth.id = customer"
  collection.viewRule = "@request.auth.id = customer"
  collection.createRule = "@request.auth.id = customer"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jyfe7mj5xof4x35")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
