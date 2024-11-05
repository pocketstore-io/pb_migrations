/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jam7sfgzn86i62j",
    "created": "2024-10-31 19:01:04.778Z",
    "updated": "2024-10-31 19:01:04.778Z",
    "name": "currencys",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jqc8x1pp",
        "name": "code",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xdhbqb6b",
        "name": "sign",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rkzky8ad",
        "name": "default",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("jam7sfgzn86i62j");

  return dao.deleteCollection(collection);
})
