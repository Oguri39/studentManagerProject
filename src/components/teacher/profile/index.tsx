import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import profile from "../../../assets/profile.png";
import "./styles.scss";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

type Iprops = {
  userDetail: any;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  handleOnSubmit: () => void;
  onUpdateValue: (key: string, updateValue: string | Date | null) => void;
  value: any;
  handleOnCancle: () => void;
  isEditPassword: boolean;
  setIsEditPassword: React.Dispatch<React.SetStateAction<boolean>>;
  password: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  };
  onUpdatePassword: (key: string, updateValue: string) => void;
  isError: boolean;
  handleOnSubmitPasswordChange: () => void;
};

export const ProfileTeacherComponent = (props: Iprops) => {
  const {
    userDetail,
    isEdit,
    setIsEdit,
    handleOnSubmit,
    onUpdateValue,
    value,
    handleOnCancle,
    isEditPassword,
    setIsEditPassword,
    password,
    onUpdatePassword,
    isError,
    handleOnSubmitPasswordChange,
  } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box className="profileTeacherContainer">
        <Box>
          <img
            width={300}
            src={userDetail?.img === "" ? profile : userDetail?.img}
          />
        </Box>
        {isEditPassword === false ? (
          <>
            {isEdit === false ? (
              <Box className="profileTeacherBox">
                <Box className="profileTeacherDetailContainer">
                  <Box className="profileTeacherDetailTittle">
                    <Typography>ID:</Typography>
                    <Typography>Name:</Typography>
                    <Typography>Gender:</Typography>
                    <Typography>Date of Birth:</Typography>
                    <Typography>Address:</Typography>
                    <Typography>Mobile Number:</Typography>
                    <Typography>Email:</Typography>
                    <Typography>Home Class:</Typography>
                  </Box>
                  <Box className="profileTeacherDetail">
                    <Typography>{userDetail?.maGiaoVien}</Typography>
                    <Typography>{userDetail?.tenGiaoVien}</Typography>
                    <Typography>
                      {userDetail?.gioiTinh ? "Nữ" : "Nam"}
                    </Typography>
                    <Typography>{userDetail?.ngaySinh}</Typography>
                    <Typography>{userDetail?.diaChi}</Typography>
                    <Typography>{userDetail?.soDienThoai}</Typography>
                    <Typography>{userDetail?.email}</Typography>
                    <Typography></Typography>
                  </Box>
                </Box>
                <Button
                  sx={{
                    margin: "5px",
                    width: "40%",
                    color: "white",
                    background: "#6868ac",
                    borderRadius: "40px",
                    fontSize: "18px",
                    padding: "10px",
                  }}
                  variant="contained"
                  onClick={() => setIsEdit(true)}
                >
                  Edit Profile
                </Button>
                <Button
                  sx={{
                    margin: "5px",
                    width: "40%",
                    color: "white",
                    background: "#6868ac",
                    borderRadius: "40px",
                    fontSize: "18px",
                    padding: "10px",
                  }}
                  variant="contained"
                  color="info"
                  onClick={() => setIsEditPassword(true)}
                >
                  Change Password
                </Button>
              </Box>
            ) : (
              <Box className="profileTeacherEditBox">
                <Box className="profileTeacherDetailContainer">
                  <Box sx={{ marginRight: 10 }}>
                    <FormControl fullWidth disabled variant="standard">
                      <InputLabel color="secondary" htmlFor="maGiaoVien">
                        ID
                      </InputLabel>
                      <Input
                        id="maGiaoVien"
                        color="secondary"
                        value={value?.maGiaoVien}
                        sx={{ marginBottom: "20px" }}
                      />
                    </FormControl>
                    <FormControl fullWidth disabled variant="standard">
                      <InputLabel color="secondary" htmlFor="tenGiaoVien">
                        Name
                      </InputLabel>
                      <Input
                        id="tenGiaoVien"
                        color="secondary"
                        value={value?.tenGiaoVien}
                        sx={{ marginBottom: "20px" }}
                      />
                    </FormControl>
                    <FormControl fullWidth disabled variant="standard">
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
                  </Box>
                  <Box>
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
                      <InputLabel color="secondary" htmlFor="soDienThoai">
                        Mobile Number
                      </InputLabel>
                      <Input
                        color="secondary"
                        id="soDienthoai"
                        value={value?.soDienThoai}
                        onChange={(
                          newValue: React.ChangeEvent<
                            HTMLTextAreaElement | HTMLInputElement
                          >
                        ) => onUpdateValue("soDienThoai", newValue.target.value)}
                        sx={{ marginBottom: "20px" }}
                      />
                    </FormControl>
                    <FormControl fullWidth variant="standard">
                      <InputLabel color="secondary" htmlFor="email">
                        Email
                      </InputLabel>
                      <Input
                        id="email"
                        color="secondary"
                        value={value?.email}
                        sx={{ marginBottom: "20px" }}
                      />
                    </FormControl>
                    <FormControl fullWidth disabled variant="standard">
                      <InputLabel color="secondary" htmlFor="homeClass">
                        Home Class
                      </InputLabel>
                      <Input
                        id="homeClass"
                        color="secondary"
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
                  onClick={() => handleOnSubmit()}
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
                  onClick={() => handleOnCancle()}
                >
                  Cancle
                </Button>
              </Box>
            )}
          </>
        ) : (
          <>
            <Box className="profileTeacherEditBox">
              <FormControl fullWidth variant="standard">
                <InputLabel color="secondary" htmlFor="maHs">
                  Current password
                </InputLabel>
                <Input
                  id="currentPassword"
                  color="secondary"
                  value={password.currentPassword}
                  error={isError}
                  type="password"
                  onChange={(e) =>
                    onUpdatePassword("currentPassword", e.target.value)
                  }
                  sx={{ marginBottom: "20px" }}
                />
              </FormControl>
              <FormControl fullWidth variant="standard">
                <InputLabel color="secondary" htmlFor="hoTen">
                  New password
                </InputLabel>
                <Input
                  id="newPassword"
                  color="secondary"
                  value={password.newPassword}
                  error={isError}
                  type="password"
                  onChange={(e) =>
                    onUpdatePassword("newPassword", e.target.value)
                  }
                  sx={{ marginBottom: "20px" }}
                />
              </FormControl>
              <FormControl fullWidth variant="standard">
                <InputLabel color="secondary" htmlFor="gioiTinh">
                  Confirm password
                </InputLabel>
                <Input
                  id="confirmPassword"
                  color="secondary"
                  value={password.confirmPassword}
                  type="password"
                  error={isError}
                  onChange={(e) =>
                    onUpdatePassword("confirmPassword", e.target.value)
                  }
                  sx={{ marginBottom: "20px" }}
                />
              </FormControl>
              {isError && <Typography color="error">INPUT ERROR</Typography>}
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
                onClick={() => handleOnSubmitPasswordChange()}
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
                onClick={() => setIsEditPassword(false)}
              >
                Cancle
              </Button>
            </Box>
          </>
        )}
      </Box>
    </LocalizationProvider>
  );
};
