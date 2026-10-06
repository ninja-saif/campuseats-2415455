function MenuItemCard() {
  // TODO: replace with a real item from your vendor
  const item = {
    name: 'Churros',
    description: 'Fried Churros, Chocolate Dip, Caramel Dip',
    price: 10,
    available: true,
  }

  return (
    <div className="item-card">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p className="price">RM {item.price.toFixed(2)}</p>
      <button className="btn" disabled={!item.available}>
        {item.available ? 'Add to cart' : 'Sold out'}
      </button>
    </div>
  )
}

export default MenuItemCard
