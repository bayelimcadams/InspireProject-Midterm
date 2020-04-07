import ImageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function drawImage() {

  document.getElementById('image-area').innerHTML = store.State.image.ImageTemplate;
  console.log("THE IMAGE MAN SAYS:", store.State.image);
  // event.preventDefault();

  // let template = ""
  // let image = ImageService.getImage();
  // document.querySelector("#sandBox-image").innerHTML = template += `<img src="${image}" class="image">`
}

export default class ImageController {
  constructor() {
    drawImage();
    store.subscribe("image", drawImage);
    ImageService.getImage();
  }
}
