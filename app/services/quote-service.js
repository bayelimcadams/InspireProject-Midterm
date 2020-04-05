import QuoteModel from "../models/quote-model.js";
import store from "../store.js";

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "https://quotes.rest/qod?category=inspire&language=en",
  timeout: 3000
});


class QuoteService {

  constructor() {
    this.getQuote();
  }


  // async 
  getQuote() {
    console.log("Calling the Quoteman");

    _quoteApi.get()
      .then(res => {
        console.log(res.data)
        let rawDataObject = res.data
        let quote = new QuoteModel(rawDataObject)
        store.commit('quotes', quote)
      })
    // let res = await quoteApi.get();
    // store.commit("quote", new Quote(res.data));

    .catch(err => console.error(err))
  }

}

const quoteService = new QuoteService();
export default quoteService;
