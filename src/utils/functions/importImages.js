  function importAll(context) {
  context.keys().map(context);
}
export default function imagesFromImport(relativePath) {
    const imageContext = require.context(relativePath, false, /\.(jpg|jpeg|png)$/);
    return importAll(imageContext);
}