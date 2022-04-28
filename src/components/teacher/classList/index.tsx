import {
  Box,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./styles.scss";

type Iprops = {
  rows: {
    id: string;
    name: string;
    gender: boolean;
    dob: string;
    homeTown: string;
    address: string;
  }[];
  currentClass: string;
  onChangeClass: (event: SelectChangeEvent) => void;
  classList: any;
};
export const ClassListComponent = (props: Iprops) => {
  const { rows, onChangeClass, currentClass, classList } = props;
  return (
    <Box>
      <Box className="classListContainer">
        <Box className="classListTable">
          <Box
            sx={{
              maxWidth: "470px",
              justifyContent: "space-between",
              flexDirection: "row",
              display: "flex",
              marginBottom: "10px",
            }}
          >
            <Box>
              <Select
                sx={{ width: "150px" }}
                defaultValue=""
                value={currentClass}
                onChange={onChangeClass}
              >
                {classList?.map((element: any, index: number) => (
                  <MenuItem key={index} value={element.maLop}>
                    {element.tenLop}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
          <TableContainer
            component={Paper}
            sx={{
              maxHeight: 440,
              overflowX: "hidden",
              "&::-webkit-scrollbar": {
                width: 5,
              },
            }}
          >
            <Table
              stickyHeader
              sx={{ minWidth: 500 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="left">Student ID</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="center">Gender</TableCell>
                  <TableCell align="center">Date of Birth</TableCell>
                  <TableCell align="center">Home town</TableCell>
                  <TableCell align="center">Address</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows?.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="center">
                      {row.gender ? "Nữ" : "Nam"}
                    </TableCell>
                    <TableCell align="center">{row.dob}</TableCell>
                    <TableCell align="center">{row.homeTown}</TableCell>
                    <TableCell align="center">{row.address}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};
