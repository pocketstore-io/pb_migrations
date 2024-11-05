/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i7mytqrok8jiafg")

  collection.name = "tracking_events"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i7mytqrok8jiafg")

  collection.name = "tracking_event"

  return dao.saveCollection(collection)
})
