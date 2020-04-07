// import ImageModel from "../models/image-model.js";
// import store from "../store.js";

// // @ts-ignore
// const imgApi = axios.create({
//   baseURL: "//bcw-sandbox.herokuapp.com/api/images",
//   timeout: 8000
// });

// // //TODO create methods to retrieve data trigger the update window when it is complete
// class ImageService {

//   // constructor() {
//   //   this.getImage();
//   // }

//   // async 
//   getImage() {
//     console.log("Calling the Imageman");

//     // return await 
    
//     imgApi.get()
//       .then(res => {
//       console.log(res.data);
//       let rawDataObject = res.data
//       let image = new ImageModel(rawDataObject)
//       store.commit('image', image)

//   //     store.commit("photo", res.data);
//   //     console.log("store photo", store.State.photo);
//     })
//     .catch(err => console.error(err))
//   }
// }

// const imageService = new ImageService();
// export default imageService;
