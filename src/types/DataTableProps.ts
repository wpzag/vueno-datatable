export type DTProps = {
  headers: DTHeader[]
  rows: any[]
  noWrap?: boolean
  pagination?: DTPagination
  perPage?: string | { default?: number; options: number[] }
}
export type DTPagination = {
  page: number
  from: number
  to: number
  total: number
  rowsPerPage: number
  sortBy: string
  sortDirection: 'asc' | 'desc' | null
  lastPage: number
}

export type DTHeader = {
  label: string
  value: string
  sortable?: boolean
  width?: string
  align?: 'left' | 'center' | 'right'
  format?: (value: any) => string
}
export interface DTProvider {
  props: DTProps
  rows: any[]
  pagination: DTPagination
  goToPrevPage: () => void
  goToNextPage: () => void
  updatePerPage: (newRowsPerPage: number) => void
  sort: (header: DTHeader) => void
}
