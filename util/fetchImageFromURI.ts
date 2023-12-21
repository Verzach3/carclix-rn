export default async function fetchImageFromUri(uri: string) {
  const response = await fetch(uri);
  console.log(JSON.stringify(response));
  const blob = await response.blob();
  return blob;
}
