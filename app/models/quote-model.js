export default class QuoteModel {
  constructor(data) {
    console.log('[RAW QUOTE API DATA]', data);

    this.quote = data.quote.body
    this.author = data.quote.author
  }


get QuoteTemplate() {
  return `
      <h6>${this.quote}</h6>
      <p><i>- ${this.author}</i></p>
      `
  }
}