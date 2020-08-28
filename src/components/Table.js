import React from 'react'

import { Table, InfiniteScrollTable } from '@contentstack/venus-components'
import { orderBy } from 'lodash'

const makeData = size => {
  const data = []
  for (let i = 1; i <= size; i++) {
    const dataObject = {
      title: `Can Augmented And Future Reality Build Empathy${i}`,
      uuid: `blt006d3106e3a6532b${i}`,
      age: i,
      status: i % 2 === 0 ? 'active' : 'inactive',
      uid: `test${i}`,
      _canSelect: i % 2 === 0 ? true : false,
    }
    data.push(dataObject)
  }
  return data
}

const serverData = makeData(1000)

const filterData = ({ skip, limit, sortBy }) => {
  let responseData = serverData
  //sort first and then paginate
  if (sortBy) {
    const { sortingDirection, id } = sortBy
    responseData = orderBy(serverData, [id], [sortingDirection])
  }

  const skippedData = responseData.slice(skip, responseData.length)
  const limitedData = skippedData.slice(0, limit)
  return { data: limitedData, count: responseData.length }
}

const fakeServer = ({ skip, limit, sortBy }) => {
  console.log('fakeServer -> skip, limit', skip, limit, sortBy)
  return new Promise(resolve => {
    setTimeout(() => {
      const data = filterData({ skip, limit, sortBy })
      return resolve(data)
    }, 200)
  })
}

class InfiniteScroll extends React.Component {
  state = {
    data: [],
    itemStatusMap: {},
    loading: false,
  }

  fixedlistRef = React.createRef()

  async componentDidMount() {
    try {
      await this.fetchData({})
    } catch (error) {
      console.log('componentDidMount -> error', error)
    }
  }

  fetchData = async ({ sortBy, skip, limit }) => {
    try {
      if (this.fixedlistRef && this.fixedlistRef.current) {
        this.fixedlistRef.current.scrollToItem(0)
      }
      let itemStatusMap = {}
      for (let index = 0; index <= 30; index++) {
        itemStatusMap[index] = 'loading'
      }

      this.setState({ itemStatusMap, loading: true })

      const response = await fakeServer({ skip: 0, limit: 30, sortBy })
      for (let index = 0; index <= 30; index++) {
        itemStatusMap[index] = 'loaded'
      }

      this.setState({ itemStatusMap, loading: true, data: response.data })
    } catch (error) {
      console.log('error', error)
    }
  }

  loadMoreItems = async ({ sortBy, skip, limit, startIndex, stopIndex }) => {
    try {
      let itemStatusMapCopy = { ...this.state.itemStatusMap }

      for (let index = startIndex; index <= stopIndex; index++) {
        itemStatusMapCopy[index] = 'loading'
      }

      this.setState({ itemStatusMap: itemStatusMapCopy, loading: true })

      const response = await fakeServer({ skip, limit, sortBy })

      let updateditemStatusMapCopy = { ...this.state.itemStatusMap }

      for (let index = startIndex; index <= stopIndex; index++) {
        updateditemStatusMapCopy[index] = 'loaded'
      }

      this.setState({
        itemStatusMap: updateditemStatusMapCopy,
        loading: false,
        data: [...this.state.data, ...response.data],
      })
    } catch (error) {
      console.log('loadMoreItems -> error', error)
    }
  }

  render() {
    const columns = [
      {
        Header: 'Title',
        accessor: 'title',
        default: true,
        // disableSortBy: true,
        addToColumnSelector: true,
      },
      {
        Header: 'Unique UID',
        accessor: 'uuid',
        default: false,
        // disableSortBy: true,
        addToColumnSelector: true,
      },
      {
        Header: 'Age',
        accessor: 'age',
        default: true,
        // disableSortBy: true,
        addToColumnSelector: true,
      },
      {
        Header: 'Status',
        accessor: 'status',
        default: false,
        disableSortBy: true,
        addToColumnSelector: true,
      },
    ]
    const onRowSelectProp = [
      {
        label: 'Log selected Items',
        cb: function (data) {
          console.log('selected data', data)
        },
      },
    ]

    return (
      <InfiniteScrollTable
        isRowSelect={true}
        onRowSelectProp={onRowSelectProp}
        data={this.state.data}
        columns={columns}
        uniqueKey={'uid'}
        fetchTableData={this.fetchData}
        loading={this.state.loading}
        totalCounts={1000}
        loadMoreItems={this.loadMoreItems}
        itemStatusMap={this.state.itemStatusMap}
        minimumBatchSize={50}
        dataType={{ singular: 'item', plural: 'items' }}
        fixedlistRef={this.fixedlistRef}
      />
    )
  }
}

const Default = () => {
  return <InfiniteScroll />
}

const CoulmnSelector = () => {
  const data = makeData(10)
  const columns = [
    {
      Header: 'Title',
      accessor: 'title',
      default: false,
      addToColumnSelector: true,
    },
    {
      Header: 'Age',
      accessor: 'age',
      default: false,
      addToColumnSelector: true,
    },
    {
      Header: 'Status',
      accessor: 'status',
      default: false,
      disableSortBy: true,
      addToColumnSelector: true,
    },
  ]
  return (
    <Table
      dataType={{ singular: 'item', plural: 'items' }}
      totalCounts={10}
      data={data}
      columns={columns}
      canPaginate={false}
      uniqueKey={'uid'}
    />
  )
}

const SkeletonLoading = () => {
  const data = makeData(10)
  const columns = [
    {
      Header: 'Title',
      accessor: 'title',
      default: false,
    },
    {
      Header: 'Age',
      accessor: 'age',
      default: false,
    },
    {
      Header: 'Status',
      accessor: 'status',
      default: false,
      disableSortBy: true,
    },
  ]
  return (
    <Table
      totalCounts={10}
      data={data}
      loading={true}
      columns={columns}
      canPaginate={false}
      uniqueKey={'uid'}
      isRowSelect={true}
      dataType={{ singular: 'item', plural: 'items' }}
    />
  )
}

const DisableCoulmnSelector = () => {
  const data = makeData(10)
  const columns = [
    {
      Header: 'Title',
      accessor: 'title',
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Age',
      accessor: 'age',
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Status',
      accessor: 'status',
      default: false,
      disableSortBy: true,
      addToColumnSelector: true,
    },
  ]
  return (
    <Table
      dataType={{ singular: 'item', plural: 'items' }}
      totalCounts={10}
      data={data}
      columns={columns}
      canPaginate={false}
      uniqueKey={'uid'}
    />
  )
}

const HideColumnSelector = () => {
  const data = makeData(10)
  const columns = [
    {
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'Unique UID',
      accessor: 'uuid',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
  ]
  return (
    <Table
      totalCounts={10}
      data={data}
      columns={columns}
      canPaginate={false}
      uniqueKey={'uid'}
      columnSelector={false}
      dataType={{ singular: 'item', plural: 'items' }}
    />
  )
}

const HideColumn = () => {
  const data = makeData(10)
  const columns = [
    {
      Header: 'Title',
      accessor: 'title',
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Unique UID',
      accessor: 'uuid',
      default: false,
    },
    {
      Header: 'Age',
      accessor: 'age',
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Status',
      accessor: 'status',
      default: false,
      disableSortBy: true,
    },
  ]
  return (
    <Table
      totalCounts={10}
      hiddenColumns={['status', 'uuid']}
      data={data}
      columns={columns}
      canPaginate={false}
      uniqueKey={'uid'}
      dataType={{ singular: 'item', plural: 'items' }}
    />
  )
}

const RowSelectAndOperation = () => {
  const data = makeData(10)
  const columns = [
    {
      Header: 'Title',
      accessor: 'title',
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Unique UID',
      accessor: 'uuid',
      default: false,
      addToColumnSelector: true,
    },
    {
      Header: 'Age',
      accessor: 'age',
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Status',
      accessor: 'status',
      default: false,
      disableSortBy: true,
      addToColumnSelector: true,
    },
  ]

  const onRowSelectProp = [
    {
      label: 'Log selected Items',
      cb: function (data) {
        console.log('selected data', data)
      },
    },
  ]
  return (
    <Table
      totalCounts={10}
      data={data}
      columns={columns}
      canPaginate={false}
      uniqueKey={'uid'}
      isRowSelect={true}
      onRowSelectProp={onRowSelectProp}
      dataType={{ singular: 'item', plural: 'items' }}
    />
  )
}

const ConditionallyRowSelect = () => {
  const data = makeData(10)
  const columns = [
    {
      Header: 'Title',
      accessor: 'title',
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Unique UID',
      accessor: 'uuid',
      default: false,
      addToColumnSelector: true,
    },
    {
      Header: 'Age',
      accessor: 'age',
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Status',
      accessor: 'status',
      default: false,
      disableSortBy: true,
      addToColumnSelector: true,
    },
  ]

  const onRowSelectProp = [
    {
      label: 'Log selected Items',
      cb: function (data) {
        console.log('selected data', data)
      },
    },
  ]
  //this will add check box when it find _canSelect on data to be true
  const rowSelectCheckboxProp = { key: '_canSelect', value: true }
  return (
    <Table
      totalCounts={10}
      data={data}
      columns={columns}
      canPaginate={false}
      uniqueKey={'uid'}
      isRowSelect={true}
      dataType={{ singular: 'item', plural: 'items' }}
      onRowSelectProp={onRowSelectProp}
      rowSelectCheckboxProp={rowSelectCheckboxProp}
    />
  )
}

const TableWithPagination = () => {
  const columns = [
    {
      Header: 'Title',
      accessor: 'title',
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Unique UID',
      accessor: 'uuid',
      default: false,
      addToColumnSelector: true,
    },
    {
      Header: 'Age',
      accessor: 'age',
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Status',
      accessor: 'status',
      default: false,
      disableSortBy: true,
      addToColumnSelector: true,
    },
  ]

  const [data, setData] = React.useState([])
  const [pageCount, setPageCount] = React.useState(0)
  const fetchIdRef = React.useRef(0)

  const fetchData = React.useCallback(({ pageSize, pageIndex, sortBy }) => {
    const fetchId = ++fetchIdRef.current

    setTimeout(() => {
      if (fetchId === fetchIdRef.current) {
        const startRow = pageSize * pageIndex
        const endRow = startRow + pageSize

        let DataPerPage = serverData.slice(startRow, endRow)

        if (sortBy) {
          const { sortingDirection, id } = sortBy
          DataPerPage = orderBy(DataPerPage, [id], [sortingDirection])
        }

        setData(DataPerPage)

        setPageCount(Math.ceil(serverData.length / pageSize))
      }
    }, 400)
  }, [])

  const onRowSelectProp = [
    {
      label: 'Log selected Items',
      cb: function (data) {
        console.log('selected data', data)
      },
    },
  ]

  return (
    <Table
      data={data}
      columns={columns}
      pageCount={pageCount}
      fetchTableData={fetchData}
      uniqueKey={'uid'}
      isRowSelect={true}
      onRowSelectProp={onRowSelectProp}
      dataType={{ singular: 'item', plural: 'items' }}
      totalCounts={1000}
      // initialSortBy={[{ id: 'title', desc: true }]}
    />
  )
}

const TableComponent = () => {
  return (
    <div style={{ width: '1100px' }}>
      <div style={{ marginBottom: '50px' }}>
        <h3>Default</h3>
        <Default />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h3>CoulmnSelector</h3>
        <CoulmnSelector />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h3>SkeletonLoading</h3>
        <SkeletonLoading />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h3>DisableCoulmnSelector</h3>
        <DisableCoulmnSelector />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h3>HideColumnSelector</h3>
        <HideColumnSelector />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h3>HideColumn</h3>
        <HideColumn />
      </div>

      <div style={{ marginBottom: '50px' }}>
        <h3>RowSelectAndOperation</h3>
        <RowSelectAndOperation />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h3>ConditionallyRowSelect</h3>
        <ConditionallyRowSelect />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h3>TableWithPagination</h3>
        <TableWithPagination />
      </div>
    </div>
  )
}

export default TableComponent
