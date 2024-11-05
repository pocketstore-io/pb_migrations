/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "p6yg6jui4fdfpuu",
    "created": "2024-11-01 13:48:31.220Z",
    "updated": "2024-11-01 13:48:31.220Z",
    "name": "product_similiar",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zfsx8qnw",
        "name": "product",
        "type": "relation",
        "required": false,
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
        "id": "iwv5zqvs",
        "name": "related",
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
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("p6yg6jui4fdfpuu");

  return dao.deleteCollection(collection);
})
