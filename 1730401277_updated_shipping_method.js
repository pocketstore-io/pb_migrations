/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6p5uq8tyo0akpya")

  collection.name = "shipping_methods"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_TMuNkoU` ON `shipping_methods` (`code`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6p5uq8tyo0akpya")

  collection.name = "shipping_method"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_TMuNkoU` ON `shipping_method` (`code`)"
  ]

  return dao.saveCollection(collection)
})
