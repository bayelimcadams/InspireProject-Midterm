export default class QuoteModel {
  constructor(data) {

    this.quote = data.quote;
    this.author = data.author;
  }



get QuoteTemplate() {
  return `
      <h5>${this.quote}</h5>
      <h7><i>${this.author}</i></h7>
      `
  }
}