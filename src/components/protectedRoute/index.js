import {Redirect, Route} from 'react-router-dom'

// const protectedRoute = props => {
//   const token = Cookies.get('jwt_token')
//   if (token === undefined) {
//     return <Redirect to="/login" />
//   }
//   return <Route {...props} />
// }

// export default protectedRoute

// import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = ({component: Component, ...rest}) => {
  const token = true // Replace with actual authentication logic

  return (
    <Route
      {...rest}
      render={props =>
        token ? <Component {...props} /> : <Redirect to="/bad-path" />
      }
    />
  )
}

export default ProtectedRoute
