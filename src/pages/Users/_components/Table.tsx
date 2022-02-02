import usersMock from '../../../mocks/users'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {UsersArray} from '.././types/user'

type UsersTableProps = {
  users: UsersArray
}

const UsersTable = ({ users } : UsersTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Time zone</TableCell>
            <TableCell>Phone number</TableCell>
            <TableCell>About user</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
            >
              <TableCell>
                {user.firstName}
              </TableCell>
              <TableCell>
                {user.lastName}
              </TableCell>
              <TableCell>{user.userName}</TableCell>
              <TableCell>{user.timezone}</TableCell>
              <TableCell>{user.phoneNumber}</TableCell>
              <TableCell>{user.aboutMe}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UsersTable