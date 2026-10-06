function VendorCard() {
  // TODO: replace with a real stall from YOUR mahallah
  const vendor = {
    name: 'Chuchana Bros',
    location: 'Mahallah Ali, Ground Floor',
    openHours: '9:00 AM - 10:00 PM',
    isOpen: false,
  }

  return (
    <div className="vendor-card">
      <div className="thumb">{vendor.name[0]}</div>
      <div>
        <h3>{vendor.name}</h3>
        <p>{vendor.location}</p>
        <p>{vendor.openHours}</p>
        <span className={vendor.isOpen ? 'status open' : 'status closed'}>
          {vendor.isOpen ? 'Open now' : 'Closed'}
        </span>
      </div>
    </div>
  )
}

export default VendorCard
