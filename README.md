**Infinite Load for Meteor** (`zodiase:infinite-load`), starting from version `0.2.0`, uses `api.mainModule` instead of the old-style `api.export` and `api.addFiles`.
This change forces apps using Infinite Load to `import` the package or otherwise it won't be available, which could be a problem for apps that have not migrated to the new module system.
For example, some of my apps are still using CoffeeScript, which doesn't support `import` at the moment of this writing. Trying to add `es5-shim` to add `import` support for `.js` files results in a freeze when building.
So I created this package to import Infinite Load into global scope.