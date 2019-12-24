import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EmailField, EditButton, TextInput, SimpleForm, SelectInput, Filter, required, ReferenceInput } from 'react-admin';
// import Textfield from '@material-ui/core/TextField';

export const UserList = props => (  
    <List  filters = { <UserFilter /> } {...props}>
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


export const CreateUser = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput  disabled source="id" />
            <TextInput source="name" validate ={ required() } />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="address.street" />
            <TextInput source="phone" />
            <TextInput source="website" />
            <TextInput source="company.name" />
        </SimpleForm>
    </Create>
);


const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        
    </Filter>
);
