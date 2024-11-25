/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const settings = app.settings()
  settings.meta.appName = "PocketStore.io - Demo"
  settings.logs.maxDays = 1

  app.save(settings)
}, (db) => {
  // add down queries...
})
