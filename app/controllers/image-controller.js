import ImageService from "../services/image-service.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function _drawImage() {
  let template = ""
  let image = _store.State.image.url;
  document.querySelector("#sandBox-image").innerHTML = template += `<img src="${image}" class="image">`
}

export default class ImageController {
  constructor() {
    ImageService.getImage()
    _store.subscribe("image", _drawImage);
  }
}
