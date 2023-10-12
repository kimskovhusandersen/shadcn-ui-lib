# Perform tests, build, and other checks
# npm test
npm run build

# Bump the version and create a new commit
npm version patch -m "Bump to %s"

# Publish the package
npm publish --access public