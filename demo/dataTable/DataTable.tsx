import {
  Data,
  DefaultColumn,
  useTable,
  UseTableValues,
} from '../../src/hooks/useTable/useTable'
import { FilterInput } from './components/FilterInput'
import { PageSizeSelect } from './components/PageSizeSelect'
import { Pagination } from './components/Pagination'
import { Summary } from './components/Summary'
import { Table } from './components/Table'

interface DataTableProps {
  columns: DefaultColumn[]
  data: Data[]
  options?: number[]
}

export const DataTable = ({
  columns,
  data,
  options = [10, 20, 50, 100],
}: DataTableProps) => {
  const {
    headers,
    rows,
    pagination,
    summary,
    handleSorting,
    handlePageSizing,
    handleFiltering,
  }: UseTableValues = useTable({
    columns,
    data,
    pageSizeOptions: options,
  })

  return (
    <section className="dataTable">
      <PageSizeSelect options={options} handlePageSizing={handlePageSizing} />
      <FilterInput handleFiltering={handleFiltering} />
      <Table
        headers={headers}
        rows={rows}
        handleSorting={handleSorting}
        isFiltered={summary.isFiltered}
      />
      <Summary {...summary} />
      <Pagination pagination={pagination} />
    </section>
  )
}
