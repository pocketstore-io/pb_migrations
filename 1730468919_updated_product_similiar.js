/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p6yg6jui4fdfpuu")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_vEBNTth` ON `product_similiar` (`product`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p6yg6jui4fdfpuu")

  collection.indexes = []

  return dao.saveCollection(collection)
})
