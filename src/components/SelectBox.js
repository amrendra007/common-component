import React, { useState } from 'react'

import { SelectBox, Checkbox, AsyncSelectBox } from '@contentstack/venus-components'

const getSampleData = (size = 50) => {
  let data = []
  for (let i = 0; i < size; ++i) {
    data.push({
      value: i + 1,
      label: `Option ${i + 1}`,
      id: i,
    })
  }
  return data
}

const Default = props => {
  const options = getSampleData()

  const [isMulti, setIsMulti] = useState(false)
  const [isClearable, setIsClearable] = useState(false)
  const [isSearchable, setIsSearchable] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [hideSelectedOptions, setHideSelectedOptions] = useState(false)
  const [maxMenuHeight, updateMaxMenuHeight] = useState(200)

  const [value, updateValue] = useState(isMulti ? [] : null)

  const handleValueUpdate = data => {
    updateValue(data)
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          width: '600px',
          height: '100px',
          alignContent: 'space-evenly',
          color: '#010101',
        }}
      >
        <div>
          <Checkbox
            onChange={() => {
              setIsMulti(!isMulti)
              handleValueUpdate(isMulti ? [] : null)
            }}
            checked={isMulti}
          />
          <label style={{ padding: '5px' }}>isMulti</label>
        </div>
        <div>
          <Checkbox onChange={() => setIsClearable(!isClearable)} checked={isClearable} />
          <label style={{ padding: '5px' }}>isClearable</label>
        </div>
        <div>
          <Checkbox onChange={() => setIsSearchable(!isSearchable)} checked={isSearchable} />
          <label style={{ padding: '5px' }}>isSearchable</label>
        </div>
        <div>
          <Checkbox onChange={() => setIsDisabled(!isDisabled)} checked={isDisabled} />
          <label style={{ padding: '5px' }}>isDisabled</label>
        </div>
        <div>
          <Checkbox
            onChange={() => setHideSelectedOptions(!hideSelectedOptions)}
            checked={hideSelectedOptions}
          />
          <label style={{ padding: '5px' }}>hideSelectedOptions</label>
        </div>
        <div>
          <div style={{ display: 'inline-block' }}>
            <label style={{ padding: '5px' }}>MaxMenuHeight: </label>
            <input
              style={{ width: '50px' }}
              type="text"
              value={maxMenuHeight}
              onChange={e => {
                updateMaxMenuHeight(+e.target.value)
              }}
            />
          </div>
        </div>
      </div>

      <SelectBox
        value={value}
        onChange={handleValueUpdate}
        isMulti={isMulti}
        options={options}
        placeholder={isMulti ? 'Select Options' : 'Select Option'}
        // updateOption={handleValueUpdate}
        isClearable={isClearable}
        isSearchable={isSearchable}
        isDisabled={isDisabled}
        hideSelectedOptions={hideSelectedOptions}
        width="400px"
        maxMenuHeight={maxMenuHeight}
      />
    </div>
  )
}

const GroupSelectOptions = () => {
  const data = [
    {
      label: 'Group 1',
      options: [
        { label: 'item 1', value: 'value_1' },
        { label: 'item 2', value: 'value_2' },
        { label: 'item 3', value: 'value_3' },
        { label: 'item 4', value: 'value_4' },
      ],
    },
    {
      label: 'Group 2',
      options: [
        { label: 'item 5', value: 'value_5' },
        { label: 'item 6', value: 'value_6' },
        { label: 'item 7', value: 'value_7' },
        { label: 'item 8', value: 'value_8' },
      ],
    },
    { label: 'root option 1', value: 'value_root_1' },
    { label: 'root option 2', value: 'value_root_2' },
  ]

  const [value, updateValue] = useState(null)

  return (
    <div>
      <SelectBox
        value={value}
        onChange={updateValue}
        options={data}
        placeholder="Select value"
        isSearchable={true}
        width="300px"
      />
    </div>
  )
}

const SingleSelectEditable = () => {
  const [value, updateValue] = useState(null)

  let [options, updateOptions] = useState(getSampleData())

  const handleOptionsUpdate = updatedOption => {
    console.log('singel update', updatedOption)
    let optionsCopy = [...options]
    let newOptions = optionsCopy.find(opt => opt.id === updatedOption.id)
    newOptions.label = updatedOption.label
    updateOptions(options)
  }

  return (
    <div>
      <SelectBox
        value={value}
        onChange={updateValue}
        options={options}
        placeholder="Select value"
        updateOption={handleOptionsUpdate}
        canEditOption={true}
        isClearable={true}
        isSearchable={true}
        width="300px"
      />
    </div>
  )
}

const MultiSelectEditable = () => {
  const [value, updateValue] = useState([])

  let [options, updateOptions] = useState(getSampleData())

  const handleOptionsUpdate = updatedOption => {
    console.log('multi onupdate', updatedOption)
    let optionsCopy = [...options]
    let newOptions = optionsCopy.find(opt => opt.id === updatedOption.id)
    newOptions.label = updatedOption.label
    updateOptions(options)
  }

  return (
    <div>
      <SelectBox
        value={value}
        onChange={updateValue}
        options={options}
        placeholder="Select value"
        updateOption={handleOptionsUpdate}
        canEditOption={true}
        isClearable={true}
        isSearchable={true}
        isMulti
        width="300px"
      />
    </div>
  )
}

const serveData = ({ search, skip, limit }) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = filterData({ search, skip, limit })
      return resolve(data)
    }, 1000)
  })
}

const filterData = ({ search, skip, limit }) => {
  console.log('filterData ', { search, skip, limit })

  let filteredData = getSampleData()
  if (search) {
    filteredData = filteredData.filter(i => i.label.toLowerCase().includes(search.toLowerCase()))
  }

  const skippedData = filteredData.slice(skip, filteredData.length)
  // console.log('filterData -> skippedData', skippedData)
  const limitedData = skippedData.slice(0, limit)
  return { data: limitedData, count: filteredData.length }
}

export const AsyncSelect = () => {
  let pageSize = 10

  const [value, updateValue] = useState(null)
  const [totalCounts, updtaeTotalCount] = useState(50)

  const handleValueUpdate = data => {
    updateValue(data)
  }

  const loadMoreOptions = async ({ search, skip, limit }) => {
    const response = await serveData({ search, skip, limit })
    console.log('handleLoadMoreOptions -> response', response)
    updtaeTotalCount(response.count)
    return response.data
  }

  return (
    <div>
      <AsyncSelectBox
        value={value}
        onChange={handleValueUpdate}
        placeholder="Select value"
        loadMoreOptions={loadMoreOptions}
        isSearchable={true}
        limit={pageSize}
        width="300px"
        totalCounts={totalCounts}
        isMulti
        isClearable
      />
    </div>
  )
}

const SelectBoxComponent = () => (
  <div>
    <div style={{ marginBottom: '40px' }}>
      <h3>Default</h3>
      <Default />
    </div>
    <div style={{ marginBottom: '40px' }}>
      <h3>GroupSelectOptions</h3>
      <GroupSelectOptions />
    </div>
    <div style={{ marginBottom: '40px' }}>
      <h3>SingleSelectEditable</h3>
      <SingleSelectEditable />
    </div>
    <div style={{ marginBottom: '40px' }}>
      <h3>MultiSelectEditable</h3>
      <MultiSelectEditable />
    </div>
    <div style={{ marginBottom: '40px' }}>
      <h3>AsyncSelect</h3>
      <AsyncSelect />
    </div>
  </div>
)

export default SelectBoxComponent
