import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import Textfield from '@material-ui/core/TextField';

export const UserList = props => (
     <div> 
          <Textfield id="standard-basic" label="search" />
     
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            {/* <TextField source="address.street" /> */}
            <TextField source="phone" />
            {/* <TextField source="website" /> */}
            <TextField source="company.name" />
        </Datagrid>
    </List>
    </div>
);


// export const PostEdit = props => (
//     <Edit  title = { <PostTitle /> } {...props}>
//         <SimpleForm>
//             <TextInput  disabled source="id" />
//             <ReferenceInput source="userId" reference="users">
//                 <SelectInput optionText="name" />
//             </ReferenceInput>
//             {/* <TextInput source="id" /> */}
//             <TextInput source="title" />
//             <TextInput multiline source="body" />
//         </SimpleForm>
//     </Edit>
// );


// export const UserCreate = props => (
//     <Create {...props}>
//         <SimpleForm>
//             <ReferenceInput source="userId" reference="users">
//                 <SelectInput optionText="name" />
//             </ReferenceInput>
//             <TextInput source="title" />
//             <TextInput multiline source="body" />
//         </SimpleForm>
//     </Create>
// );


// const PostFilter = (props) => (
//     <Filter {...props}>
//         <TextInput label="Search" source="q" alwaysOn />
//         <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
//             <SelectInput optionText="name" />
//         </ReferenceInput>
//     </Filter>
// );
