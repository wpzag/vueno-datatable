import { DTProps, DTPagination, DTHeader } from '@/types/DataTableProps'
export function usePagination(props: any) {
  const pagination = reactive<DTPagination>(
    props.pagination ?? {
      page: 1,
      rowsPerPage: parseInt(
        typeof props.perPage === 'string'
          ? props.perPage
          : props.perPage?.default ?? 10
      ),
      sortBy: '',
      sortDirection: null,
      total: props.rows.length,
      from: 1,
      to: 10,
      lastPage: Math.ceil(props.rows.length / 10),
    }
  )
  function goToNextPage() {
    if (
      pagination.page < Math.ceil(pagination.total / pagination.rowsPerPage)
    ) {
      pagination.page += 1
      pagination.from = (pagination.page - 1) * pagination.rowsPerPage

      pagination.to = Math.min(
        pagination.total,
        pagination.page * pagination.rowsPerPage
      )
    }
  }

  function goToPrevPage() {
    if (pagination.page > 1) {
      pagination.page -= 1
      pagination.from = (pagination.page - 1) * pagination.rowsPerPage
      pagination.to = pagination.page * pagination.rowsPerPage
    }
  }
  function updatePerPage(newRowsPerPage: number) {
    pagination.rowsPerPage = newRowsPerPage
    pagination.page = 1
    pagination.from = 1
    pagination.to = Math.min(pagination.total, newRowsPerPage)
    pagination.lastPage = Math.ceil(pagination.total / newRowsPerPage)
  }
  const sort = (header: DTHeader) => {
    if (header.sortable) {
      if (pagination.sortBy === header.value) {
        pagination.sortDirection =
          pagination.sortDirection === null
            ? 'desc'
            : pagination.sortDirection === 'desc'
            ? 'asc'
            : null
      } else {
        pagination.sortBy = header.value
        pagination.sortDirection = 'desc'
      }
    }
  }

  return {
    pagination,
    goToNextPage,
    goToPrevPage,
    updatePerPage,
    sort,
  }
}
