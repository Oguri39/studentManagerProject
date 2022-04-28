import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeacherUser, updateTeacherUser } from "../../../app/redux";
import { RootState } from "../../../app/store";
import { ProfileTeacherComponent } from "../../../components";
import { getUser } from "../../../utils/localStorage";

const ProfileTeacherScreen = () => {
  const { userDetail } = useSelector((state: RootState) => state.redux);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditPassword, setIsEditPassword] = useState(false);
  const [value, setValue] = useState<any>();
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const userId = getUser();
  useEffect(() => {
    setValue(userDetail);
    dispatch(getTeacherUser(userId));
  }, []);
  const handleOnSubmit = () => {
    const newValue = {
      ngaySinh: moment(JSON.parse(JSON.stringify(value.ngaySinh))).format(
        "YYYY-MM-DD"
      ),
      diaChi: value.diaChi,
      soDienThoai: value.soDienThoai,
      email: value.email,
    };
    dispatch(updateTeacherUser({ id: userId, data: newValue }));
    window.location.reload();
  };
  const handleOnSubmitPasswordChange = () => {
    let count = 0;
    if (password.newPassword !== password.confirmPassword) {
      count++;
    }
    if (password.currentPassword === password.newPassword) {
      count++;
    }
    if (
      password.newPassword === "" ||
      password.confirmPassword === "" ||
      password.currentPassword === ""
    ) {
      count++;
    }
    if (count === 0) {
      // dispatch(
      //   updateStudentUserPassword({
      //     id: userId,
      //     data: {
      //       oldPassword: password.currentPassword,
      //       newPassword: password.newPassword,
      //     },
      //   })
      // );
      setIsError(false);
      alert("no API");
    } else {
      setIsError(true);
    }
  };
  const handleOnCancle = () => {
    setValue(userDetail);
    setIsEdit(false);
    setIsEditPassword(false);
  };
  const onUpdateValue = (key: string, updateValue: string | Date | null) => {
    setValue({ ...value, [key]: updateValue });
  };
  const onUpdatePassword = (key: string, updateValue: string) => {
    setPassword({ ...password, [key]: updateValue });
  };
  console.log(value);
  return (
    <ProfileTeacherComponent
      userDetail={userDetail}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      handleOnSubmit={handleOnSubmit}
      onUpdateValue={onUpdateValue}
      value={value}
      handleOnCancle={handleOnCancle}
      isEditPassword={isEditPassword}
      setIsEditPassword={setIsEditPassword}
      password={password}
      onUpdatePassword={onUpdatePassword}
      isError={isError}
      handleOnSubmitPasswordChange={handleOnSubmitPasswordChange}
    />
  );
};

export default ProfileTeacherScreen;
