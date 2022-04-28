import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import "./styles.scss";

type Iprops = {
  columnsStudent: any;
  rowsStudent: any;
  columnsTeacher: any;
  rowsTeacher: any;
  studentList: any;
  teacherList: any;
  editModalOpen: boolean;
  setEdiModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentSelectedUser: React.Dispatch<any>;
  studentAccountRegisterDetailList: any;
  teacherAccountRegisterDetailList: any;
  editType: string;
  setEditType: React.Dispatch<React.SetStateAction<string>>;
  value: any;
  onUpdateValue: (key: string, updateValue: any) => void;
  userClass: any;
};

export const UserManagerComponent = (props: Iprops) => {
  const {
    columnsStudent,
    rowsStudent,
    columnsTeacher,
    rowsTeacher,
    studentList,
    teacherList,
    editModalOpen,
    editType,
    setEditType,
    setEdiModalOpen,
    setCurrentSelectedUser,
    value,
    onUpdateValue,
    userClass,
  } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      {" "}
      <Box className="adminUserManagerContainer">
        <Box className="adminUserManagerStudent">
          <Box className="adminUserManagerDataGridTittle">
            <Typography component="h1" fontSize={24}>
              Student Users
            </Typography>
            <Button variant="contained" color="secondary">
              Add Student
            </Button>
          </Box>
          <DataGrid
            columns={columnsStudent}
            rows={rowsStudent}
            onSelectionModelChange={(item) => {
              setEditType("student");
              setCurrentSelectedUser(
                studentList.find((element: any) => element.maHs === item[0])
                  .maHs
              );
            }}
          />
        </Box>
        <Box className="adminUserManagerTeacher">
          <Box className="adminUserManagerDataGridTittle">
            <Typography component="h1" fontSize={24}>
              Teacher Users
            </Typography>
            <Button variant="contained" color="secondary">
              Add Teacher
            </Button>
          </Box>{" "}
          <DataGrid
            columns={columnsTeacher}
            rows={rowsTeacher}
            onSelectionModelChange={(item) => {
              setEditType("teacher");
              setCurrentSelectedUser(
                teacherList.find(
                  (element: any) => element.maGiaoVien === item[0]
                ).maGiaoVien
              );
            }}
          />
        </Box>
        <Modal
          open={editModalOpen}
          onClose={() => {
            setEdiModalOpen(!editModalOpen);
            setEditType("");
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <>
            {editType === "student" && (
              <Box
                sx={{
                  position: "absolute" as "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 800,
                  bgcolor: "background.paper",
                  border: "1px solid #000",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <Box>
                  <Box>
                    <FormControl fullWidth variant="standard">
                      <InputLabel color="secondary" htmlFor="maHs">
                        ID
                      </InputLabel>
                      <Input
                        id="maHs"
                        color="secondary"
                        value={value?.maHs}
                        onChange={(newValue) => {
                          onUpdateValue("maHs", newValue);
                        }}
                        sx={{ marginBottom: "20px" }}
                      />
                    </FormControl>
                    <FormControl fullWidth variant="standard">
                      <InputLabel color="secondary" htmlFor="hoTen">
                        Name
                      </InputLabel>
                      <Input
                        id="hoTen"
                        color="secondary"
                        value={value?.hoTen}
                        onChange={(newValue) => {
                          onUpdateValue("hoTen", newValue);
                        }}
                        sx={{ marginBottom: "20px" }}
                      />
                    </FormControl>
                    <FormControl fullWidth variant="standard">
                      <InputLabel color="secondary" htmlFor="gioiTinh">
                        Gender
                      </InputLabel>
                      <Input
                        id="gioiTinh"
                        color="secondary"
                        value={value?.gioiTinh ? "Nu" : "Nam"}
                        sx={{ marginBottom: "20px" }}
                      />
                    </FormControl>
                    <DesktopDatePicker
                      label="Date of birth"
                      inputFormat="DD/MM/YYYY"
                      value={value?.ngaySinh}
                      onChange={(newValue: Date | null) => {
                        onUpdateValue("ngaySinh", newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          fullWidth
                          variant="standard"
                          color="secondary"
                          sx={{ marginBottom: "20px" }}
                          {...params}
                        />
                      )}
                    />
                    <FormControl fullWidth variant="standard">
                      <InputLabel color="secondary" htmlFor="diaChi">
                        Address
                      </InputLabel>
                      <Input
                        color="secondary"
                        id="diaChi"
                        value={value?.diaChi}
                        sx={{ marginBottom: "20px" }}
                        onChange={(
                          newValue: React.ChangeEvent<
                            HTMLTextAreaElement | HTMLInputElement
                          >
                        ) => onUpdateValue("diaChi", newValue.target.value)}
                      />
                    </FormControl>
                    <FormControl fullWidth variant="standard">
                      <InputLabel color="secondary" htmlFor="queQuan">
                        Home town
                      </InputLabel>
                      <Input
                        color="secondary"
                        id="queQuan"
                        value={value?.queQuan}
                        onChange={(
                          newValue: React.ChangeEvent<
                            HTMLTextAreaElement | HTMLInputElement
                          >
                        ) => onUpdateValue("queQuan", newValue.target.value)}
                        sx={{ marginBottom: "20px" }}
                      />
                    </FormControl>
                    <FormControl fullWidth variant="standard">
                      <InputLabel color="secondary" htmlFor="tenLop">
                        Class
                      </InputLabel>
                      <Input
                        id="tenLop"
                        color="secondary"
                        value={userClass?.tenLop}
                        sx={{ marginBottom: "20px" }}
                      />
                    </FormControl>
                    <FormControl fullWidth variant="standard">
                      <InputLabel color="secondary" htmlFor="nienKhoa">
                        Year
                      </InputLabel>
                      <Input
                        id="nienKhoa"
                        color="secondary"
                        value={userClass?.nienKhoa}
                        sx={{ marginBottom: "20px" }}
                      />
                    </FormControl>
                  </Box>
                </Box>
                <Button
                  sx={{
                    margin: "5px",
                    width: "20%",
                    color: "white",
                    background: "#6868ac",
                    borderRadius: "40px",
                    fontSize: "18px",
                    padding: "10px",
                  }}
                  variant="contained"
                  onClick={() => console.log(value)}
                >
                  Submit
                </Button>
                <Button
                  sx={{
                    margin: "5px",
                    width: "20%",
                    color: "white",
                    borderRadius: "40px",
                    fontSize: "18px",
                    padding: "10px",
                  }}
                  variant="contained"
                  color="warning"
                  onClick={() => {
                    setEdiModalOpen(!editModalOpen);
                    setEditType("");
                  }}
                >
                  Cancle
                </Button>
              </Box>
            )}
            {editType === "teacher" && (
              <Box
                sx={{
                  position: "absolute" as "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 800,
                  bgcolor: "background.paper",
                  border: "1px solid #000",
                  boxShadow: 24,
                  p: 4,
                }}
              ></Box>
            )}
          </>
        </Modal>
      </Box>
    </LocalizationProvider>
  );
};
