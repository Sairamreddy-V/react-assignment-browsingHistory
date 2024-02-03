// These are the list used in the application. You can move them to any component needed.

import {Component} from 'react'

import './App.css'

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

const List = props => {
  const {recentHistory, onDeleteList} = props
  const {timeAccessed, logoUrl, title, domainUrl} = recentHistory
  console.log(timeAccessed)

  const onDelete = () => {
    const {id} = recentHistory
    onDeleteList(id)
  }

  return (
    <li className="list-container">
      <div className="container">
        <p className="time">{timeAccessed}</p>
        <div className="sub-container">
          <img alt="domain logo" className="logos" src={logoUrl} />
          <p className="title">{title}</p>
          <p className="domainUrl">{domainUrl}</p>
        </div>
      </div>
      <button testid="delete">
        <img
          className="delete-img"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          onClick={onDelete}
        />
      </button>
    </li>
  )
}

class App extends Component {
  state = {
    initialHistoryList: initialHistoryList,
    historyList: initialHistoryList,
    deleteHistoryList:initialHistoryList
  }

  OnChangeInput = event => {
    const {initialHistoryList} = this.state
    const text = event.target.value
    console.log(text)
    const result = initialHistoryList.filter(eacItem => {
      return eacItem.title.toLowerCase().includes(text.toLowerCase())
    })

    this.setState({historyList: result})
  }

  OnDelete = id => {
    const {initialHistoryList} = this.state
    console.log(id)
    const result = initialHistoryList.filter(eacItem => {
      return eacItem.id !== id
    })
    this.setState({initialHistoryList:result,historyList: initialHistoryList})
    console.log(result)
  }

  render() {
    const {historyList} = this.state
    console.log(historyList)

    return (
      <div className="page-container">
        <navbar className="nav-container">
          <img
            className="app-logo-img"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <div className="search-container">
            <img
              className="search-image"
              alt="Search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search history"
              onChange={this.OnChangeInput}
            />
          </div>
        </navbar>
        <div className="bottom-container">
          {historyList.length !== 0 ? (
            <ul>
              {' '}
              {historyList.map(eacItem => (
                <List
                  recentHistory={eacItem}
                  key={eacItem.id}
                  onDeleteList={this.OnDelete}
                />
              ))}
            </ul>
          ) : (
            <div> <p>There is no history to show</p> </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
