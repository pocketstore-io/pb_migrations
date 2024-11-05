/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "i7mytqrok8jiafg",
    "created": "2024-10-31 18:54:50.274Z",
    "updated": "2024-10-31 18:54:50.274Z",
    "name": "tracking_event",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kpdxgkpj",
        "name": "name",
        "type": "text",
        "required": true,
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
        "id": "vlacw7hi",
        "name": "data",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("i7mytqrok8jiafg");

  return dao.deleteCollection(collection);
})
