export default async function downloadUrl(
  url: string,
  extension: string = 'mp4',
  name?: string
) {
  return await fetch(url, {
    method: 'GET',
  })
    .then((response) => response.blob())
    .then((blob) => {
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = name
        ? `saint_gobain_${name}.${extension}`
        : `saint_gobain.${extension}`;
      document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
      a.click();
      a.remove(); //afterwards we remove the element again
    });
}
