/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2w15d304ljs2zt2",
    "created": "2024-10-31 19:01:43.703Z",
    "updated": "2024-10-31 19:01:43.703Z",
    "name": "payment_methods",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "znq4ijzb",
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
  const collection = dao.findCollectionByNameOrId("2w15d304ljs2zt2");

  return dao.deleteCollection(collection);
})
