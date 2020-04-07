export default class ImageModel {
  constructor(data) {

    this.img = data.url
  }



  get ImageTemplate() {
    return `
        <img src="${this.img}" class="image-fluid">
        `
  }
}