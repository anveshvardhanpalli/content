import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div className="main-container">
          <h1>Layout</h1>
          <div>
            <input
              type="checkbox"
              id="content"
              onChange={onToggleShowContent}
            />
            <label htmlFor="content">content</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="leftnavbar"
              onChange={onToggleShowLeftNavbar}
            />
            <label htmlFor="leftnavbar">leftnavbar</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="rightnavbar"
              onChange={onToggleShowRightNavbar}
            />
            <label htmlFor="rightnavbar">rightnavbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
