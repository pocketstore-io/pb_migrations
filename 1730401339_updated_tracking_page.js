/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgia0i046cfjbfi")

  collection.name = "tracking_pages"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgia0i046cfjbfi")

  collection.name = "tracking_page"

  return dao.saveCollection(collection)
})
