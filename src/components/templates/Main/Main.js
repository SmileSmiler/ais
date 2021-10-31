import { Switch, Route } from 'react-router-dom'
import Home from '../../Pages/Home/Home'

const Main = () => {

  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  )
}

export default Main;