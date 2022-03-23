import {Admin, Resource, ListGuesser, EditGuesser} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import authProvider from './authProvider';
import Dashboard from './components/Dashboard';
import UserList from './components/UserList';
import PostList  from './components/PostList';
import PostEdit from './components/PostEdit';
import PostCreate from './components/PostCreate';


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

function App() {
  return (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
      <Resource name='users' list={UserList} icon={UserIcon}/>
    </Admin>
  );
}

export default App;
