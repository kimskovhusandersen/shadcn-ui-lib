# Perform tests, build, and other checks
npm test
npm run build

# Bump the version and create a new commit
npm version patch

# Publish the package
npm npm publish --access public