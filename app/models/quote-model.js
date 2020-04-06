export default class QuoteModel {
  constructor(data) {
    console.log('[RAW QUOTE API DATA]', data);

    this.quote = data.quote
    this.author = data.author
  }


get QuoteTemplate() {
  return `
      <h5>${this.quote}</h5>
      <p>${this.author}</p>
      `
  }
}