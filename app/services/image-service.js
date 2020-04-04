import _store

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {

  async getPhoto() {
    return await _photoApi.get().then(res => {
      console.log("from sandbox photos", res);
      store.commit("photo", res.data);
      console.log("store photo", store.State.photo);

    });
  }
}

const imageService = new ImageService();
export default imageService;
