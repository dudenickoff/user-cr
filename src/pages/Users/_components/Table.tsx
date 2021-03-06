import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

import { User } from ".././types/user";

type UsersTableProps = {
  users: Array<User>;
  onDelete: (id: number) => void;
};

const UsersTable = ({ users, onDelete }: UsersTableProps) => {
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
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.userName}</TableCell>
              <TableCell>{user.timezone}</TableCell>
              <TableCell>{user.phoneNumber}</TableCell>
              <TableCell>{user.aboutMe}</TableCell>
              <TableCell>
                <Button onClick={() => onDelete(user.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
