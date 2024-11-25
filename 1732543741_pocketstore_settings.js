/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const settings = app.settings()
  settings.meta.appName = "PocketStore.io - Demo"
  settings.logs.maxDays = 1

  app.save(settings)
}, (app) => {
  // add down queries...
})
