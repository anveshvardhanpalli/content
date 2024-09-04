import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar">
              <h1>Left Navbar menu</h1>
              <ul>
                <p>Item 1</p>
                <p>Item 2</p>
                <p>Item 3</p>
                <p>Item 4</p>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content">
              <h1>Content</h1>
              <p className="content-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-navbar">
              <h1>Right Navbar</h1>
              <p>AD1</p>
              <p>AD2</p>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
