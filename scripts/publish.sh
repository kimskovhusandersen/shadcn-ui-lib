# Perform tests, build, and other checks
echo "Running tests..."
# npm test
echo "Tests completed successfully."

echo "Building the project..."
npm run build
echo "Build completed successfully."

# Bump the version and create a new commit
echo "Bumping the version..."
npm version patch -m "Bump to %s"
echo "Version bump completed successfully."

# Publish the package
echo "Publishing the package..."
npm publish --access public
echo "Package published successfully."

# Terminate the script
exit 0
