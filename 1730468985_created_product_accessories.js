/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "n1wtb7bikitf248",
    "created": "2024-11-01 13:49:45.938Z",
    "updated": "2024-11-01 13:49:45.938Z",
    "name": "product_accessories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vqaf6vid",
        "name": "product",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "ttvuhtggynzfyjh",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "arrnzmn6",
        "name": "product_related",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "ttvuhtggynzfyjh",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_qI3lZ5z` ON `product_accessories` (`product`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("n1wtb7bikitf248");

  return dao.deleteCollection(collection);
})
