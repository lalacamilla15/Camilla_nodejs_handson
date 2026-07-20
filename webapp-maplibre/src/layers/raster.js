import spongebobImg from "../data/spongebob.jpg";


console.log(spongebobImg);

export function addSpongebobImage (map) {
map.addSource ("spongebob", {
    type: "image",
    url: spongebobImg,
    coordinates: [
      [129.42, 16.53],// top-left
      [134.33, 16.24],// top-right
      [133.54, 13.26],// bottom-right
      [129.67, 13.43]// bottom-left
    ]
  })

  map.addLayer({
    id: "spongebob-image",
    type: "raster",
    source: "spongebob",
  })
}
  