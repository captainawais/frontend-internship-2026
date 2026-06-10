"use client"
type Props = {
  search: string
  setSearch: (value: string) => void
}

export default function SearchBar({
  search,
  setSearch,
}: Props) {
  return (
    <input
      type="text"
      placeholder="Search user..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-bar"
    />
  )
}