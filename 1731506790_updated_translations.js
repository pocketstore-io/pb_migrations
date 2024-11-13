/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("64fro9hhscmxxhn")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_KSJtsUL` ON `translations` (\n  `key`,\n  `lang`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("64fro9hhscmxxhn")

  collection.indexes = []

  return dao.saveCollection(collection)
})
