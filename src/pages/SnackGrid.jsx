
import SnackCard from '../components/SnackCard.jsx'
function SnackGrid({ snacks , onOrder }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {snacks.map((snack) => (
        <SnackCard key={snack.id} snack={snack} onOrder={onOrder} />
      ))}
    </div>
  )
}
export default SnackGrid
