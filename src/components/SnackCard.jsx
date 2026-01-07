function SnackCard({ snack , onOrder }) {
  return (
    <div className='border p-4 rounded '>
      <h2 className='font-bold'>{snack.name}</h2>
      <p>Price: ${snack.price}</p>
      <button className=' bg-green-600 text-white rounded px-2 py-1 hover:bg-white hover:text-green-400' onClick={() => onOrder(snack.name)}>Order</button>
    </div>
  )
}

export default SnackCard
