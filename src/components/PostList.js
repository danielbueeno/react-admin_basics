import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton, TextInput, ReferenceInput, SelectInput } from 'react-admin';


const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
]

export default function PostList(props){
    return(
        <List filters={postFilters} {...props}>
            <Datagrid>
                <TextField source="id" />
                <ReferenceField source="userId" reference="users">
                    <TextField source="name" />
                </ReferenceField>
                <TextField source="title" />
                <TextField source="body" />
                <EditButton />
            </Datagrid>
        </List>
    )
}
    
