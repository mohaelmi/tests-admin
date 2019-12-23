import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList } from './component/users';
import { PostList, PostEdit, PostCreate } from './component/posts';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import { Dashboard }  from './component/dashboard';


const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
    <Admin  dashboard={Dashboard}  dataProvider={dataProvider}>
      <Resource name="users" list={UserList}  icon = { UserIcon } />
      <Resource name="posts" list={PostList}  edit={ PostEdit } create = {PostCreate} icon = { PostIcon } />
    </Admin>
);

export default App;