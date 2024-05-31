// import {Component} from 'react'
// import {Link} from 'react-router-dom'
// import Header from '../Header/index'

// class Home extends Component {
//   render() {
//     const {location} = this.props
//     const success = location.state && location.state.success

//     return (
//       <div>
//         <Header />
//         <div>
//           {success ? (
//             <h1>Success Login</h1>
//           ) : (
//             <>
//               <h1>Welcome to Meetup</h1>
//               <p>Please register for the topic</p>
//               <Link to="/register">
//                 <button type="button">Register</button>
//               </Link>
//               <br />
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
//                 alt="meetup"
//               />
//             </>
//           )}
//         </div>
//       </div>
//     )
//   }
// }

// export default Home

import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header/index'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Home extends Component {
  render() {
    const {location} = this.props
    const success = location.state && location.state.success
    const name = location.state && location.state.name
    const topic = location.state && location.state.topic

    const topicDisplayText = topic
      ? (topicsList.find(t => t.id === topic) || {}).displayText
      : ''

    return (
      <div>
        <Header />
        <div>
          {success ? (
            <>
              <h1>Success Login</h1>
              <h1>Hello {name}</h1>
              <p>Welcome to {topicDisplayText}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </>
          ) : (
            <>
              <h1>Welcome to Meetup</h1>
              <p>Please register for the topic</p>
              <Link to="/register">
                <button type="button">Register</button>
              </Link>
              <br />
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Home
