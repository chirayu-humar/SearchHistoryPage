import './App.css'
import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
// const App = () => <div>Hello World</div>

// this is new code
class App extends Component {
  state = {inputValue: '', historyList: initialHistoryList}

  changeStatus = event => {
    const text = event.target.value
    this.setState(prevState => ({
      inputValue: text,
      historyList: prevState.historyList,
    }))
  }

  deleteHistory = event => {
    console.log('deleteHistory function is called')
    const {id} = event.currentTarget
    const {inputValue, historyList} = this.state
    const newList = historyList.filter(
      eachItem => eachItem.id.toString() !== id.toString(),
    )
    this.setState(prevState => ({
      inputValue: prevState.inputValue,
      historyList: newList,
    }))
  }

  render() {
    const {inputValue, historyList} = this.state
    const newList = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(inputValue.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="first">
          <div>
            <img
              alt="app logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            />
          </div>
          <div className="first-child-2">
            <div className="search-container">
              <img
                alt="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              />
            </div>
            <div>
              <input
                placeholder="search history"
                type="search"
                className="searchInput"
                onChange={this.changeStatus}
              />
            </div>
          </div>
        </div>
        <ul className="second">
          {newList.length === 0 && (
            <div>
              <p>There is no history to show</p>
            </div>
          )}
          {newList.length !== 0 &&
            newList.map(eachItem => (
              <li key={eachItem.id} className="listElementClass">
                <div className="listFirst">
                  <p>{eachItem.timeAccessed}</p>
                  <img alt="domain logo" src={eachItem.logoUrl} />
                  <p>{eachItem.title}</p>
                  <p className="domain">{eachItem.domainUrl}</p>
                </div>
                <div>
                  <button
                    id={eachItem.id}
                    type="button"
                    onClick={this.deleteHistory}
                    data-testid="delete"
                  >
                    <img
                      alt="delete"
                      src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                    />
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

export default App
