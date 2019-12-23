import React from 'react';
import { List, Edit, Datagrid, TextField, EmailField, EditButton, TextInput, SimpleForm } from 'react-admin';
import Textfield from '@material-ui/core/TextField';

export const UserList = props => (  
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            {/* <TextField source="address.street" /> */}
            <TextField source="phone" />
            {/* <TextField source="website" /> */}
            <TextField source="company.name" />
            <EditButton />
        </Datagrid>
    </List>
    
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput  disabled source="id" />
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="address.street" />
            <TextInput source="phone" />
            <TextInput source="website" />
            <TextInput source="company.name" />
        </SimpleForm>
    </Edit>
);


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
