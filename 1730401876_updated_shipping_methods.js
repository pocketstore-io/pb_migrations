/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6p5uq8tyo0akpya")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6p5uq8tyo0akpya")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
