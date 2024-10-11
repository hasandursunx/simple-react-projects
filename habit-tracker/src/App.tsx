
import { Provider } from 'react-redux'
import store from './store/store'
import './App.css'
import { Container, Typography } from '@mui/material'
import HabitForm from './components/HabitForm'
import HabitList from './components/HabitList'
import HabitStats from './components/HabitStats'

function App() {

  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Typography component='h1' variant='h2' align='center'>Habit Tracker</Typography>
        <HabitForm />
        <HabitList />
        <HabitStats />
      </Container>
    </Provider>

  )
}

export default App
