import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { DefaultButton } from './components/styles'
import './App.css'
import { httpService, itemService } from './services'

import { ChildItem, EditItem } from './components'

function App() {

  const [data, setData] = useState(itemService.DEFAULT_DATA)
  const [total, setTotal] = useState(0)

  const ref = React.useRef()
  const appState = useSelector(state => state.appState)

  useEffect(() => setTotal(itemService.countItems(data)), [appState, data])

  async function importJson(e) {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async e => {
      const dataJson = JSON.parse(e.target.result)
      if ((dataJson || {}).name) {
        itemService.save(dataJson)
        setData(dataJson)
      }
    }
    reader.readAsText(e.target.files[0])
    ref.current.value = ''
  }

  function exportJson() {
    httpService.exportJson()
      .then(res => {
        const link = document.createElement('a')
        link.href = URL.createObjectURL(res.data)
        link.setAttribute('download', 'data.json')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      })
      .catch(err => console.log(err))
  }

  function save(editItem) {
    const currentData = itemService.getData()
    const item = itemService.findChild(currentData, editItem.id)
    if (item) {
      item.name = editItem.name
      item.children = editItem.children
      itemService.saveData(currentData)
      setData({...currentData})
    }
  }

  return (
    <div>
      <div className="App" style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <div style={{ margin: 50 }}>
            <span>Total: {total - 1}</span>
            <div className="tree">
              <ChildItem item={data} />
            </div>
          </div>
        </div>
        <div>
          {appState.editItem && <EditItem item={appState.editItem} onSave={item => save(item)} />}
        </div>
        <div style={{ flex: 1 }}></div>
      </div>
      <DefaultButton onClick={() => exportJson()}>EXPORT</DefaultButton>
      <DefaultButton style={{ marginLeft: 20 }} onClick={() => ref.current.click()}>IMPORT</DefaultButton>
      <br /><br />
      <div style={{ display: 'none', overflow: 'hidden' }}>
        <input ref={ref} type="file" onChange={e => importJson(e)} />
      </div>
    </div>
  )
}

export default App