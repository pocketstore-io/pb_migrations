/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("okmus6luz9ups4e")

  collection.listRule = "public = true"
  collection.viewRule = "public = true"
  collection.createRule = "@request.data.public = false"
  collection.updateRule = "public = false"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("okmus6luz9ups4e")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
