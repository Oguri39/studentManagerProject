import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudentInClass,
  getTeacherClassList,
  getTeacherUser,
} from "../../../app/redux";
import { RootState } from "../../../app/store";
import { ClassListComponent } from "../../../components";
import { getUser } from "../../../utils/localStorage";

const ClassListScreen = () => {
  const { teacherClassList, studentList } = useSelector(
    (state: RootState) => state.redux
  );
  console.log(studentList);
  const dispatch = useDispatch();
  const userId = getUser();
  const [currentClass, setCurrentClass] = useState(
    teacherClassList[0]?.maLop ? teacherClassList[0]?.maLop : ""
  );
  useEffect(() => {
    dispatch(getTeacherClassList(userId));
  }, []);
  useEffect(() => {
    if (currentClass !== "") {
      dispatch(getStudentInClass(currentClass));
    }
  }, [currentClass]);
  const onChangeClass = (event: SelectChangeEvent) => {
    setCurrentClass(event.target.value as string);
  };
  const classList = teacherClassList
    .map((element: any) => ({
      maLop: element.maLop,
      tenLop: element.tenLop,
      maHocKi: element.maHocKi,
    }))
    .filter(
      (value: any, index: number, self: any) =>
        index ===
        self.findIndex(
          (t: any) =>
            t.maLop === value.maLop &&
            t.tenLop === value.tenLop &&
            t.maHocKi === value.maHocKi
        )
    );
  const createData = (
    id: string,
    name: string,
    gender: boolean,
    dob: string,
    homeTown: string,
    address: string
  ) => {
    return { id, name, gender, dob, homeTown, address };
  };
  const rows =
    studentList &&
    studentList?.map((element: any) => {
      return createData(
        element.maHs,
        element.hoTen,
        element.gioiTinh,
        element.ngaySinh,
        element.queQuan,
        element.diaChi
      );
    });
  return (
    <ClassListComponent
      rows={rows}
      currentClass={currentClass}
      classList={classList}
      onChangeClass={onChangeClass}
    />
  );
};

export default ClassListScreen;
