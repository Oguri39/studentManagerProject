import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./routers";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getAllClasses,
  getAllGrades,
  getAllStudentAccountRegisterDetail,
  getAllStudents,
  getAllSubjects,
  getAllTeacherAccountRegisterDetail,
  getAllTeachers,
  getSemester,
  getStudentUser,
  getTeacherClassList,
  getTeacherUser,
} from "./app/redux";
import { getUser, getUserRole } from "./utils/localStorage";

function App() {
  const userId = getUser();
  const userRole = getUserRole();
  const dispatch = useDispatch();
  useEffect(() => {
    if (userId) {
      if (userRole === "ROLE_STUDENT") {
        dispatch(getSemester());
        dispatch(getStudentUser(userId));
      }
      if (userRole === "ROLE_TEACHER") {
        dispatch(getSemester());
        dispatch(getTeacherUser(userId));
        dispatch(getTeacherClassList(userId));
      }
      if (userRole === "ROLE_ADMIN") {
        dispatch(getSemester());
        dispatch(getAllClasses());
        dispatch(getAllTeachers());
        dispatch(getAllStudents());
        dispatch(getAllSubjects());
        dispatch(getAllGrades());
        dispatch(getAllTeacherAccountRegisterDetail());
        dispatch(getAllStudentAccountRegisterDetail());
      }
    }
  }, [userId, userRole]);
  return (
    <div className="App">
      <Router />
      <ToastContainer />
    </div>
  );
}

export default App;
