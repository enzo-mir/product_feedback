import Product from '#models/product'

export default class PrductServices {
  async getAll() {
    const products = await Product.query().select('*')
    return products
  }

  async getOne(id: number) {
    const product = await Product.query().select('*').where('id', id).first()
    return product
  }
}
