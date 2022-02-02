import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material'

import usersMock from '../../mocks/users'
import { UsersArray, User } from './types/user'

import Table from './_components/Table'
import Dialog from '../../components/Dialog'
import Form from './_components/Form'

const Users = () => {
  const [users, setUsers] = useState<UsersArray>(usersMock)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const formSubmit = (values: User) => {
    setUsers([...users, { ...values, id: users.length+1 }])
    setModalIsOpen(false)
  }

  const deleteUserById = (userId: number) => {
    setUsers([...users.filter(user => userId !== user.id)])
  }


  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
      <Box width="1000px" mt={3}>
        <Box width="100%">
          <Box display="flex" justifyContent="flex-end" >
            <Button variant="contained" onClick={() => setModalIsOpen(true)}>+ Add user</Button>
          </Box>
        </Box>
        <Box mt={4}>
          <Table users={users} deleteUserById={deleteUserById}/>
        </Box>
      </Box>
      <Dialog isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} isForm>
        <Typography variant="h6" component="h2">
          Create new user
        </Typography>
        <Box my={3}>
          <Form onSubmit={(values: User) => formSubmit(values)} onClose={() => setModalIsOpen(false)}/>
        </Box>
      </Dialog>
    </Box>
  )
}

export default Users