import { Route, Routes } from 'react-router-dom'
import { SignIn, SignUp, Todo } from './pages'

const App = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/todo" element={<Todo />} />
  </Routes>
)

export default App
