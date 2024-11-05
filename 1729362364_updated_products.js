/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ttvuhtggynzfyjh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hs5jsqop",
    "name": "price",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ttvuhtggynzfyjh")

  // remove
  collection.schema.removeField("hs5jsqop")

  return dao.saveCollection(collection)
})
