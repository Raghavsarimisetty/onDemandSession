import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  function clicked() {
    updateTabId(tabId)
  }
  const activated = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        onClick={clicked}
        type="button"
        className={`tab-btn ${activated}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
