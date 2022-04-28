import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getAllClasses,
  getAllGrades,
  getAllStudentAccountRegisterDetail,
  getAllStudentData,
  getAllStudents,
  getAllSubjects,
  getAllTeacherAccountRegisterDetail,
  getAllTeachers,
  getSemester,
} from "../../../app/redux";
import { RootState } from "../../../app/store";
import { HomeAdminComponent } from "../../../components";
import { setPath } from "../../../utils/localStorage";

const HomeAdminScreen = () => {
  const {
    semester,
    classList,
    teacherList,
    studentList,
    subjectList,
    gradeList,
    fullStudentDetailList,
  } = useSelector((state: RootState) => state.redux);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSemester());
    dispatch(getAllClasses());
    dispatch(getAllTeachers());
    dispatch(getAllStudents());
    dispatch(getAllSubjects());
    dispatch(getAllGrades());
  }, []);
  const [listSemester, setListSemester] = useState(
    // semester.length !== 0
    //   ? semester.map((element: any) => element.maHocKi)
    //   :
    null
  );
  const [listId, setListId] = useState(
    // studentList.length !== 0
    //   ? studentList.map((element: any) => element.maHs)
    //   :
    null
  );
  useEffect(() => {
    if (semester.length !== 0 && studentList.length !== 0) {
      setListSemester(semester.map((element: any) => element.maHocKi));
      setListId(studentList.map((element: any) => element.maHs));
    }
  }, [semester, studentList]);
  console.log(listId, listSemester);
  const history = useHistory();
  const totalUser = teacherList.length + studentList.length + 1;
  const totalClass = classList.length;
  // useEffect(() => {
  //   if (listId !== null && listSemester !== null) {
  //     dispatch(
  //       getAllStudentData({
  //         listId: listId,
  //         listSemester: listSemester,
  //       })
  //     );
  //   }
  // }, [listSemester, listId]);
  // console.log(fullStudentDetailList);
  const handleOnMenuPlateClick = (name: string) => {
    setPath(name);
    history.push(name);
  };
  const data1 = [
    {
      id: "gioi",
      label: "Giỏi",
      value: 128,
      color: "hsl(360, 70%, 50%)",
    },
    {
      id: "kha",
      label: "Khá",
      value: 110,
      color: "hsl(153, 70%, 50%)",
    },
    {
      id: "trungBinh",
      label: "Trung Bình",
      value: 90,
      color: "hsl(250, 70%, 50%)",
    },
    {
      id: "yeu",
      label: "Yếu",
      value: 10,
      color: "hsl(129, 70%, 50%)",
    },
  ];
  const data2 = [
    {
      id: ">8.0",
      label: ">8.0",
      value: 228,
      color: "hsl(360, 70%, 50%)",
    },
    {
      id: ">6.5",
      label: ">6.5",
      value: 269,
      color: "hsl(153, 70%, 50%)",
    },
    {
      id: ">5.0",
      label: ">5.0",
      value: 197,
      color: "hsl(250, 70%, 50%)",
    },
    {
      id: "<5.0",
      label: "<5.0",
      value: 37,
      color: "hsl(198, 70%, 50%)",
    },
  ];
  return (
    <HomeAdminComponent
      handleOnMenuPlateClick={handleOnMenuPlateClick}
      totalUser={totalUser}
      totalClass={totalClass}
      data1={data1}
      data2={data2}
    />
  );
};

export default HomeAdminScreen;
