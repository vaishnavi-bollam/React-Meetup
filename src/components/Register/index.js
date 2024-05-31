import {Component} from 'react'
import {withRouter} from 'react-router-dom'
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

// class Register extends Component {
//   state = {
//     name: '',
//     showError: false,
//   }

//   handleInputChange = event => {
//     this.setState({name: event.target.value, showError: false})
//   }

//   handleRegisterClick = () => {
//     const {name} = this.state
//     if (name.trim() === '') {
//       this.setState({showError: true})
//     } else {
//       this.setState({showError: false})
//       const {history} = this.props
//       history.push({
//         pathname: '/',
//         state: {success: true},
//       })
//     }
//   }

//   render() {
//     const {name, showError} = this.state

//     return (
//       <div>
//         <h1>Register Page</h1>
//         <Header />
//         <div>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
//             alt="website register"
//           />
//           <h1>Let us join</h1>
//           <label htmlFor="name">NAME</label>
//           <br />
//           <input
//             type="text"
//             id="name"
//             placeholder="Your name"
//             value={name}
//             onChange={this.handleInputChange}
//           />
//           <br />
//           <br />
//           <label htmlFor="topics">TOPICS</label>
//           <br />
//           <select id="topics">
//             {topicsList.map(topic => (
//               <option key={topic.id} value={topic.id}>
//                 {topic.displayText}
//               </option>
//             ))}
//           </select>
//           <br />
//           <br />
//           <button type="button" onClick={this.handleRegisterClick}>
//             Register
//           </button>
//           {showError && <p style={{color: 'red'}}>Please enter your name</p>}
//         </div>
//       </div>
//     )
//   }
// }

// export default withRouter(Register)

class Register extends Component {
  state = {
    name: '',
    topic: topicsList[0].id, // Default to the first topic
    showError: false,
  }

  handleInputChange = event => {
    this.setState({name: event.target.value, showError: false})
  }

  handleSelectChange = event => {
    this.setState({topic: event.target.value})
  }

  handleRegisterClick = () => {
    const {name, topic} = this.state
    if (name.trim() === '') {
      this.setState({showError: true})
    } else {
      this.setState({showError: false})
      const {history} = this.props
      history.push({
        pathname: '/',
        state: {success: true, name, topic},
      })
    }
  }

  render() {
    const {name, showError, topic} = this.state

    return (
      <div>
        <h1>Register Page</h1>
        <Header />
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
          <h1>Let us join</h1>
          <label htmlFor="name">NAME</label>
          <br />
          <input
            type="text"
            id="name"
            placeholder="Your name"
            value={name}
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <label htmlFor="topics">TOPICS</label>
          <br />
          <select id="topics" value={topic} onChange={this.handleSelectChange}>
            {topicsList.map(topicName => (
              <option key={topicName.id} value={topicName.id}>
                {topicName.displayText}
              </option>
            ))}
          </select>
          <br />
          <br />
          <button type="button" onClick={this.handleRegisterClick}>
            Register Now
          </button>
          {showError && <p style={{color: 'red'}}>Please enter your name</p>}
        </div>
      </div>
    )
  }
}

export default withRouter(Register)
