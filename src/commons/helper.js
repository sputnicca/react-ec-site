export const formatPrice = price => {
  return price.toLocaleString('ja-JP', {
    style: 'currency',
    currency: 'JPY'
  })
}