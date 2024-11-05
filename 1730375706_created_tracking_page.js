/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sgia0i046cfjbfi",
    "created": "2024-10-31 11:55:06.561Z",
    "updated": "2024-10-31 11:55:06.561Z",
    "name": "tracking_page",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ye5wzga7",
        "name": "uri",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("sgia0i046cfjbfi");

  return dao.deleteCollection(collection);
})
