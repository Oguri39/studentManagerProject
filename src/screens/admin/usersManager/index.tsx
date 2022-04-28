import { Button, Menu, MenuItem } from "@mui/material";
import { GridRowParams } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteStudent,
  deleteTeacher,
  getAllStudentAccountRegisterDetail,
  getAllStudents,
  getAllTeacherAccountRegisterDetail,
  getAllTeachers,
  getStudentUser,
  getTeacherUser,
} from "../../../app/redux";
import { RootState } from "../../../app/store";
import { UserManagerComponent } from "../../../components";
interface Iprops {
  isdelete: any;
  isEdit: any;
}
const GridMenuButton = ({ isdelete, isEdit }: Iprops) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleAction = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenEdit = () => {
    isEdit();
    handleClose();
  };
  const handleDeleteUser = () => {
    isdelete();
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleAction}>Action</Button>
      <Menu
        id="action-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleOpenEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDeleteUser}>Delete</MenuItem>
      </Menu>
    </div>
  );
};

const UserManagerScreen = () => {
  const dispatch = useDispatch();
  const {
    userClass,
    userDetail,
    teacherList,
    studentList,
    studentAccountRegisterDetailList,
    teacherAccountRegisterDetailList,
  } = useSelector((state: RootState) => state.redux);
  useEffect(() => {
    dispatch(getAllTeachers());
    dispatch(getAllStudents());
    dispatch(getAllTeacherAccountRegisterDetail());
    dispatch(getAllStudentAccountRegisterDetail());
  }, []);
  const [currentSelectedUser, setCurrentSelectedUser] = useState<any>();
  const [editModalOpen, setEdiModalOpen] = useState(false);
  const [editType, setEditType] = useState("");
  const [value, setValue] = useState(userDetail);
  const onUpdateValue = (key: string, updateValue: any) => {
    setValue({ ...value, [key]: updateValue });
  };
  useEffect(() => {
    if (editType !== "" && editType === "student") {
      dispatch(getStudentUser(currentSelectedUser));
    }
    if (editType !== "" && editType === "teacher") {
      dispatch(getTeacherUser(currentSelectedUser));
    }
  }, [currentSelectedUser]);
  const deleteSelectedUser = () => {
    if (editType === "student") {
      dispatch(deleteStudent(currentSelectedUser));
      window.location.reload();
      setEditType("");
    }
    if (editType === "teacher") {
      dispatch(deleteTeacher(currentSelectedUser));
      window.location.reload();
      setEditType("");
    }
  };
  const handleEditModalOpen = (editType: string) => {
    setEditType(editType);
    setEdiModalOpen(true);
  };
  const columnsStudent = [
    {
      field: "id",
      headerName: "User ID",
      hide: true,
    },
    {
      field: "hoTen",
      headerName: "Full Name",
      minWidth: 400,
      maxWidth: 600,
    },
    { field: "tenLop", headerName: "Class", minWidth: 150, maxWidth: 200 },
    { field: "gioiTinh", headerName: "Gender", minWidth: 100, maxWidth: 200 },
    {
      field: "ngaySinh",
      headerName: "Date of Birth",
      minWidth: 100,
      maxWidth: 200,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      flex: 0.15,
      minWidth: 100,
      maxWidth: 200,
      headerClassName: "super-app-theme--header",
      renderCell: (params: GridRowParams) => {
        return (
          params.id !== 1 && (
            <GridMenuButton
              isdelete={deleteSelectedUser}
              isEdit={() => handleEditModalOpen("student")}
            />
          )
        );
      },
    },
    ,
  ];
  const rowsStudent = studentList?.map((element: any) => {
    return {
      id: element.maHs,
      hoTen: element.hoTen,
      tenLop: element.lop_maLop?.tenLop,
      gioiTinh: element.gioiTinh ? "Nữ" : "Nam",
      ngaySinh: element.ngaySinh,
    };
  });

  const columnsTeacher = [
    {
      field: "id",
      headerName: "User ID",
      hide: true,
    },
    {
      field: "tenGiaoVien",
      headerName: "Full Name",
      minWidth: 300,
      maxWidth: 400,
    },
    { field: "soDienThoai", headerName: "Phone", minWidth: 150, maxWidth: 200 },

    { field: "email", headerName: "Email" },
    { field: "gioiTinh", headerName: "Gender" },
    { field: "ngaySinh", headerName: "Date of Birth" },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      flex: 0.15,
      headerClassName: "super-app-theme--header",
      renderCell: (params: GridRowParams) => {
        return (
          params.id !== 1 && (
            <GridMenuButton
              isdelete={deleteSelectedUser}
              isEdit={() => handleEditModalOpen("teacher")}
            />
          )
        );
      },
    },
    ,
  ];
  const rowsTeacher = teacherList?.map((element: any) => {
    return {
      id: element.maGiaoVien,
      tenGiaoVien: element.tenGiaoVien,
      soDienThoai: element.soDienThoai,
      email: element.email,
      gioiTinh: element.gioiTinh ? "Nữ" : "Nam",
      ngaySinh: element.ngaySinh,
    };
  });

  return (
    <UserManagerComponent
      userClass={userClass}
      columnsStudent={columnsStudent}
      rowsStudent={rowsStudent}
      columnsTeacher={columnsTeacher}
      rowsTeacher={rowsTeacher}
      setCurrentSelectedUser={setCurrentSelectedUser}
      studentList={studentList}
      teacherList={teacherList}
      editModalOpen={editModalOpen}
      setEdiModalOpen={setEdiModalOpen}
      editType={editType}
      value={value}
      onUpdateValue={onUpdateValue}
      setEditType={setEditType}
      studentAccountRegisterDetailList={studentAccountRegisterDetailList}
      teacherAccountRegisterDetailList={teacherAccountRegisterDetailList}
    />
  );
};

export default UserManagerScreen;
