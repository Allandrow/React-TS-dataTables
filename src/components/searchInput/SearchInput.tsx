import { FormEvent } from 'react'

interface SearchInputProps {
  changeSearch: (e: FormEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ changeSearch }: SearchInputProps) => {
  return (
    <label>
      <span>Search: </span>
      <input type="search" onChange={changeSearch} />
    </label>
  )
}
