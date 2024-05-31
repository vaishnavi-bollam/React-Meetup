import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import ProtectedRoute from './components/protectedRoute'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />

    <ProtectedRoute exact path="/register" component={Register} />
    <Route path="/bad-path" component={NotFound} />
    <Redirect to="/bad-path" />
  </Switch>
)

export default App
