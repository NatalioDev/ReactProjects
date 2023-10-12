
export default function FilterPerson({filterName, handleFilterChange}) {
  return (
    <div>
      Filter by name:
      <input
        type="text"
        value={filterName}
        onChange={handleFilterChange}
      />
    </div>
  )
}
