import { DTProps, DTPagination } from '@/types/DataTableProps'
import { Ref, toRef } from 'vue'
export function useTableRows(props: any, pagination: DTPagination) {
  const rows = computed(() => {
    const { page, rowsPerPage } = pagination
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage
    const paginatedRows = props.rows.slice(start, end)
    if (pagination.sortBy && pagination.sortDirection) {
      return paginatedRows.sort((a, b) => {
        if (a[pagination.sortBy] > b[pagination.sortBy]) {
          return pagination.sortDirection === 'asc' ? 1 : -1
        }
        if (a[pagination.sortBy] < b[pagination.sortBy]) {
          return pagination.sortDirection === 'asc' ? -1 : 1
        }
        return 0
      })
    }
    return paginatedRows
  })

  return {
    rows,
  }
}
