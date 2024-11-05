/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2w15d304ljs2zt2")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_8wsrcAn` ON `payment_methods` (`code`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2w15d304ljs2zt2")

  collection.indexes = []

  return dao.saveCollection(collection)
})
