import { useState } from 'react';
import { Box, Button } from '@mui/material'
import Table from './_components/Table'
import usersMock from '../../mocks/users'
import {UsersArray} from './types/user'

const Users = () => {
  const [users, setUsers] = useState<UsersArray>(usersMock)

  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
      <Box width="1000px" mt={3}>
        <Box width="100%">
          <Box display="flex" justifyContent="flex-end" >
            <Button variant="contained">+ Add user</Button>
          </Box>
        </Box>
        <Box mt={4}>
          <Table users={users}/>
        </Box>
      </Box>
    </Box>
  )
}

export default Users