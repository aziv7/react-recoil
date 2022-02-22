import { RecoilRoot } from 'recoil';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Navigate,
} from 'react-router-dom';
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Link to='/users'>Users</Link> <Link to='/user-form'>Form</Link>
        <Routes>
          <Route path='/' element={<Navigate to='/users' />} />{' '}
          <Route exact path='/user-form' element={<UserForm />}></Route>
          <Route exact path='/users' element={<UsersList />}></Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
