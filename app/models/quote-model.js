export default class QuoteModel {
  constructor(data) {
    console.log('[RAW QUOTE API DATA]', data);

    this.quote = data.response.contents.quotes.quote;
    this.author = data.response.contents.quotes.author;
  }


get QuoteTemplate() {
  return `
      <h5>${this.quote}</h5>
      <p><i>${this.author}</i></p>
      `
  }
}