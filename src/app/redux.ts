import { toast } from "react-toastify";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import baseURL from "../api/api";
import { setUser, setUserRole } from "../utils/localStorage";
import { useDispatch } from "react-redux";

type defaultStudentSignin = {
  maHs: string;
  password: string;
};
type defaultTeacherSignin = {
  maGiaoVien: string;
  password: string;
};
type defaultAdminSignin = {
  username: string;
  password: string;
};
type defaultInitialState = {
  userId: string;
  userRole: string;
  userDetail: any;
  userClass: any;
  studentFullMark: any;
  semester: any;
  studentMark: any;
  error: boolean;
  isSuccess: boolean;
  teacherClassList: any;
  teacherClassStudentMarksList: any;
  studentInClassList: any;
  classList: any;
  teacherList: any;
  studentList: any;
  subjectList: any;
  gradeList: any;
  studentAccountRegisterDetailList: any;
  teacherAccountRegisterDetailList: any;
  fullStudentDetailList: any;
};
const initialState: defaultInitialState = {
  userId: "",
  userRole: "",
  error: false,
  isSuccess: false,
  userDetail: {},
  userClass: {},
  studentMark: [],
  studentFullMark: [],
  semester: [],
  teacherClassList: [],
  teacherClassStudentMarksList: [],
  studentInClassList: [],
  classList: [],
  teacherList: [],
  studentList: [],
  subjectList: [],
  gradeList: [],
  studentAccountRegisterDetailList: [],
  teacherAccountRegisterDetailList: [],
  fullStudentDetailList: [],
};
//other
export const getSemester = createAsyncThunk("users/getSemester", async () => {
  const respond = await baseURL.get(`api/semester`);
  return respond.data;
});
export const updateMultiMarks = createAsyncThunk(
  "users/updateMultiMarks",
  async (value: any) => {
    const respond = await baseURL.put(`api/mark/multiMark`, {
      markArr: value,
    });
    return respond.data;
  }
);
export const getStudentInClass = createAsyncThunk(
  "users/getStudentInClass",
  async (id: string) => {
    const respond = await baseURL.get(`api/class/${id}/student`);
    return respond.data;
  }
);
export const getAllClasses = createAsyncThunk(
  "users/getAllClasses",
  async () => {
    const respond = await baseURL.get(`api/class`);
    return respond.data;
  }
);
export const getAllTeachers = createAsyncThunk(
  "users/getAllTeachers",
  async () => {
    const respond = await baseURL.get(`api/teacher`);
    return respond.data;
  }
);
export const getAllStudents = createAsyncThunk(
  "users/getAllStudents",
  async () => {
    const respond = await baseURL.get(`api/student`);
    return respond.data;
  }
);
export const getAllSubjects = createAsyncThunk(
  "users/getAllSubjects",
  async () => {
    const respond = await baseURL.get(`api/subject`);
    return respond.data;
  }
);
export const getAllGrades = createAsyncThunk("users/getAllGrades", async () => {
  const respond = await baseURL.get(`api/grade`);
  return respond.data;
});
//student
export const getStudentSignin = createAsyncThunk(
  "users/getStudentSignin",
  async (signinInfo: defaultStudentSignin, ThunkAPI) => {
    try {
      const response = await baseURL.post("/api/login/student", signinInfo);
      return response.data;
    } catch (error: any) {
      return ThunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getStudentUser = createAsyncThunk(
  "users/getStudentUser",
  async (id: string) => {
    const respond = await baseURL.get(`api/student/${id}`);
    return respond.data;
  }
);
export const updateStudentUser = createAsyncThunk(
  "users/updateStudentUser",
  async ({ id, data }: any) => {
    const respond = await baseURL.put(`api/student/${id}`, data);
    return respond.data;
  }
);
export const updateStudentUserPassword = createAsyncThunk(
  "users/updateStudentUserPassword",
  async ({ id, data }: any) => {
    const respond = await baseURL.put(
      `api/student/change-password/${id}`,
      data
    );
    return respond.data;
  }
);
export const getStudentMarks = createAsyncThunk(
  "users/getStudentMarks",
  async ({ userId, semesterId }: { userId: string; semesterId: string }) => {
    const respond = await baseURL.get(
      `api/student/${userId}/marks/${semesterId}`
    );
    return respond.data;
  }
);
export const getStudentFullMarks = createAsyncThunk(
  "users/getStudentFullMarks",
  async ({ userId, semesterId }: { userId: string; semesterId: string }) => {
    const respond = await baseURL.get(
      `api/student/${userId}/marks/${semesterId}`
    );
    return respond.data;
  }
);

//teacher
export const getTeacherSignin = createAsyncThunk(
  "users/getTeacherSignin",
  async (signinInfo: defaultTeacherSignin, ThunkAPI) => {
    try {
      const response = await baseURL.post("/api/login/teacher", signinInfo);
      return response.data;
    } catch (error: any) {
      return ThunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getTeacherUser = createAsyncThunk(
  "users/getTeacherUser",
  async (id: string) => {
    const respond = await baseURL.get(`api/teacher/${id}`);
    return respond.data;
  }
);
export const updateTeacherUser = createAsyncThunk(
  "users/updateTeacherUser",
  async ({ id, data }: any) => {
    const respond = await baseURL.put(`api/teacher/${id}`, data);
    return respond.data;
  }
);
export const getTeacherClassList = createAsyncThunk(
  "users/getTeacherClassList",
  async (userId: string) => {
    const respond = await baseURL.get(`api/teacher/${userId}/class/`);
    return respond.data;
  }
);
export const getTeacherClassStudentMarksList = createAsyncThunk(
  "users/getTeacherClassStudentList",
  async ({
    subjectId,
    classId,
    semesterId,
  }: {
    subjectId: string;
    classId: string;
    semesterId: string;
  }) => {
    const respond = await baseURL.get(
      `api/mark/${subjectId}/${classId}/${semesterId}`
    );
    return respond.data;
  }
);
//admin
export const getAdminSignin = createAsyncThunk(
  "users/getAdminSignin",
  async (signinInfo: defaultAdminSignin, ThunkAPI) => {
    try {
      const response = await baseURL.post("/api/login/admin", signinInfo);
      return response.data;
    } catch (error: any) {
      return ThunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getAllStudentData = createAsyncThunk(
  "users/getAllStudentData",
  async ({
    listId,
    listSemester,
  }: {
    listId: string[];
    listSemester: string[];
  }) => {
    const data: any = [];
    listSemester.forEach((semester) => {
      const newArr: any = listId.map((id) => {
        const respond_mark = new Promise((resolve, reject) => {
          setTimeout(
            resolve,
            5000,
            baseURL.get(`api/student/${id}/marks/${semester}`)
          );
        });
        const respond_class = new Promise((resolve, reject) => {
          setTimeout(resolve, 5000, baseURL.get(`api/student/${id}`));
        });
        Promise.all([respond_mark, respond_class]).then((values: any) => {
          const newRespond = {
            ...values[0].data,
            lop_maLop: values[1].data.lop_maLop,
          };
          return newRespond;
        });
      });
      data.push(newArr);
    });
    return data;
  }
);
export const getAllStudentAccountRegisterDetail = createAsyncThunk(
  "users/getAllStudentAccountRegisterDetail",
  async () => {
    const respond = await baseURL.get(`api/admin/studentAccount`);
    return respond.data;
  }
);
export const getAllTeacherAccountRegisterDetail = createAsyncThunk(
  "users/getAllTeacherAccountRegisterDetail",
  async () => {
    const respond = await baseURL.get(`api/admin/teacherAccount`);
    return respond.data;
  }
);

export const deleteStudent = createAsyncThunk(
  "users/deleteStudent",
  async (id: string) => {
    const respond = await baseURL.delete(`api/student/${id}`);
    return respond.data;
  }
);
export const deleteTeacher = createAsyncThunk(
  "users/deleteTeacher",
  async (id: string) => {
    const respond = await baseURL.delete(`api/teacher/${id}`);
    return respond.data;
  }
);
export const reduxSlice = createSlice({
  name: "redux",
  initialState,
  reducers: {
    signoutSuccess: (state) => {
      state.userRole = "";
      state.error = false;
      state.isSuccess = false;
      localStorage.removeItem("user");
      localStorage.removeItem("userRole");
    },
  },
  extraReducers: (builder) => {
    //other
    builder
      .addCase(getSemester.fulfilled, (state, action) => {
        state.semester = action.payload;
        toast.success("Get semester success", { autoClose: 2000 });
      })
      .addCase(getSemester.rejected, (state) => {
        state.semester = [];
        toast.error("Get semester fail", { autoClose: 2000 });
      })
      .addCase(updateMultiMarks.fulfilled, (state, action) => {
        toast.success("Update marks success", { autoClose: 2000 });
      })
      .addCase(updateMultiMarks.rejected, (state) => {
        toast.error("Update marks fail", { autoClose: 2000 });
      })
      .addCase(getStudentInClass.fulfilled, (state, action) => {
        state.studentInClassList = action.payload.students;
        toast.success("Get student in class success", { autoClose: 2000 });
      })
      .addCase(getStudentInClass.rejected, (state) => {
        state.studentInClassList = [];
        toast.error("Get student in class fail", { autoClose: 2000 });
      })
      .addCase(getAllClasses.fulfilled, (state, action) => {
        state.classList = action.payload;
        toast.success("Get student in class success", { autoClose: 2000 });
      })
      .addCase(getAllClasses.rejected, (state) => {
        state.classList = [];
        toast.error("Get student in class fail", { autoClose: 2000 });
      })
      .addCase(getAllTeachers.fulfilled, (state, action) => {
        state.teacherList = action.payload;
        toast.success("Get all teacher success", { autoClose: 2000 });
      })
      .addCase(getAllTeachers.rejected, (state) => {
        state.teacherList = [];
        toast.error("Get all teacher fail", { autoClose: 2000 });
      })
      .addCase(getAllStudents.fulfilled, (state, action) => {
        state.studentList = action.payload;
        toast.success("Get all student success", { autoClose: 2000 });
      })
      .addCase(getAllStudents.rejected, (state) => {
        state.studentList = [];
        toast.error("Get all student fail", { autoClose: 2000 });
      })
      .addCase(getAllSubjects.fulfilled, (state, action) => {
        state.subjectList = action.payload;
        toast.success("Get all subject success", { autoClose: 2000 });
      })
      .addCase(getAllSubjects.rejected, (state) => {
        state.subjectList = [];
        toast.error("Get all subject fail", { autoClose: 2000 });
      })
      .addCase(getAllGrades.fulfilled, (state, action) => {
        state.gradeList = action.payload;
        toast.success("Get all grade success", { autoClose: 2000 });
      })
      .addCase(getAllGrades.rejected, (state) => {
        state.gradeList = [];
        toast.error("Get all grade fail", { autoClose: 2000 });
      });
    //student
    builder
      .addCase(getStudentSignin.fulfilled, (state, action) => {
        state.userRole = action.payload.role;
        state.error = false;
        state.isSuccess = true;
        setUser(action.payload.user.maHs);
        setUserRole("ROLE_STUDENT");
        toast.success("login success", { autoClose: 2000 });
      })
      .addCase(getStudentSignin.rejected, (state, action: any) => {
        state.userRole = "";
        state.error = true;
        state.isSuccess = false;
        localStorage.removeItem("user");
        toast.error(action.payload.message, { autoClose: 2000 });
      })
      .addCase(getStudentUser.fulfilled, (state, action) => {
        state.userDetail = action.payload.user;
        state.userClass = action.payload.lop_maLop;
        toast.success("Get student success", { autoClose: 2000 });
      })
      .addCase(getStudentUser.rejected, (state) => {
        state.userDetail = {};
        state.userClass = {};
        toast.error("Get student fail", { autoClose: 2000 });
      })
      .addCase(updateStudentUser.fulfilled, (state) => {
        toast.success("Update student success", { autoClose: 2000 });
      })
      .addCase(updateStudentUser.rejected, (state) => {
        toast.error("Update student fail", { autoClose: 2000 });
      })
      .addCase(updateStudentUserPassword.fulfilled, (state) => {
        toast.success("Update student password success", { autoClose: 2000 });
      })
      .addCase(updateStudentUserPassword.rejected, (state) => {
        toast.error("Update student password fail", { autoClose: 2000 });
      })
      .addCase(getStudentMarks.fulfilled, (state, action) => {
        state.studentMark = action.payload.studentMark;
        toast.success("Get marks success", { autoClose: 2000 });
      })
      .addCase(getStudentMarks.rejected, (state) => {
        state.studentMark = [];
        toast.error("Get marks fail", { autoClose: 2000 });
      })
      .addCase(getStudentFullMarks.fulfilled, (state, action) => {
        state.studentFullMark = action.payload.studentMark;
        toast.success("Get marks success", { autoClose: 2000 });
      })
      .addCase(getStudentFullMarks.rejected, (state) => {
        state.studentFullMark = [];
        toast.error("Get marks fail", { autoClose: 2000 });
      });

    //teacher
    builder
      .addCase(getTeacherSignin.fulfilled, (state, action) => {
        state.userRole = action.payload.role;
        state.error = false;
        state.isSuccess = true;
        setUserRole("ROLE_TEACHER");
        setUser(action.payload.user.maGiaoVien);
        toast.success("login success", { autoClose: 2000 });
      })
      .addCase(getTeacherSignin.rejected, (state, action: any) => {
        state.userRole = "";
        state.error = true;
        state.isSuccess = false;
        localStorage.removeItem("user");
        toast.error(action.payload.message, { autoClose: 2000 });
      })
      .addCase(getTeacherUser.fulfilled, (state, action) => {
        state.userDetail = action.payload;
        // state.userClass = action.payload.lop_maLop;
        toast.success("Get teacher success", { autoClose: 2000 });
      })
      .addCase(getTeacherUser.rejected, (state) => {
        state.userDetail = {};
        // state.userClass = action.payload.lop_maLop;
        toast.success("Get teacher success", { autoClose: 2000 });
      })
      .addCase(updateTeacherUser.fulfilled, (state) => {
        toast.success("Update teacher success", { autoClose: 2000 });
      })
      .addCase(updateTeacherUser.rejected, (state) => {
        toast.success("Update teacher success", { autoClose: 2000 });
      })
      .addCase(getTeacherClassList.fulfilled, (state, action) => {
        state.teacherClassList = action.payload;
        toast.success("Get class list success", { autoClose: 2000 });
      })
      .addCase(getTeacherClassList.rejected, (state) => {
        state.teacherClassList = [];
        toast.error("Get class list fail", { autoClose: 2000 });
      })
      .addCase(getTeacherClassStudentMarksList.fulfilled, (state, action) => {
        state.teacherClassStudentMarksList = action.payload;
        toast.success(
          "Get all score for student in semester in class success",
          { autoClose: 2000 }
        );
      })
      .addCase(getTeacherClassStudentMarksList.rejected, (state) => {
        state.teacherClassStudentMarksList = [];
        toast.error("Get all score for student in semester in class fail", {
          autoClose: 2000,
        });
      });
    //admin
    builder
      .addCase(getAdminSignin.fulfilled, (state, action) => {
        state.userRole = action.payload.role;
        state.error = false;
        state.isSuccess = true;
        setUserRole("ROLE_ADMIN");
        setUser(action.payload.user.username);
        toast.success("login success", { autoClose: 2000 });
      })
      .addCase(getAdminSignin.rejected, (state, action: any) => {
        state.userRole = "";
        state.error = true;
        state.isSuccess = false;
        localStorage.removeItem("user");
        toast.error(action.payload.message, { autoClose: 2000 });
      })
      .addCase(
        getAllStudentAccountRegisterDetail.fulfilled,
        (state, action) => {
          state.studentAccountRegisterDetailList = action.payload;
          toast.success("Get all student account register detail success", {
            autoClose: 2000,
          });
        }
      )
      .addCase(getAllStudentAccountRegisterDetail.rejected, (state) => {
        state.studentAccountRegisterDetailList = [];
        toast.error("Get all student account register detail fail", {
          autoClose: 2000,
        });
      })
      .addCase(
        getAllTeacherAccountRegisterDetail.fulfilled,
        (state, action) => {
          state.teacherAccountRegisterDetailList = action.payload;
          toast.success("Get all teacher account register detail success", {
            autoClose: 2000,
          });
        }
      )
      .addCase(getAllTeacherAccountRegisterDetail.rejected, (state) => {
        state.teacherAccountRegisterDetailList = [];
        toast.error("Get all teacher account register detail fail", {
          autoClose: 2000,
        });
      })
      .addCase(getAllStudentData.fulfilled, (state, action) => {
        state.fullStudentDetailList = action.payload;
        toast.success("Get full student detail success", {
          autoClose: 2000,
        });
      })
      .addCase(getAllStudentData.rejected, (state) => {
        state.fullStudentDetailList = [];
        toast.error("Get  full student detail fail", {
          autoClose: 2000,
        });
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        toast.success("Delete student success", {
          autoClose: 2000,
        });
      })
      .addCase(deleteStudent.rejected, (state) => {
        toast.error("Delete student fail", {
          autoClose: 2000,
        });
      })
      .addCase(deleteTeacher.fulfilled, (state, action) => {
        toast.success("Delete teacher success", {
          autoClose: 2000,
        });
      })
      .addCase(deleteTeacher.rejected, (state) => {
        toast.error("Delete teacher fail", {
          autoClose: 2000,
        });
      });
  },
});

const { reducer, actions } = reduxSlice;
export const { signoutSuccess } = actions;
export const profileValue = (state: RootState) => state.redux;
export default reducer;
