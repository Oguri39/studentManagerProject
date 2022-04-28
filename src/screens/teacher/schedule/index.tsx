import React from "react";
import { TeacherScheduleComponent } from "../../../components";

const TeacherScheduleScreen = () => {
  const createScheduleData = (
    peroid: string,
    mon: string,
    tues: string,
    wed: string,
    thurs: string,
    fri: string,
    sat: string,
    sun: string
  ) => {
    return { peroid, mon, tues, wed, thurs, fri, sat, sun };
  };
  const rowsSchedule = [
    createScheduleData("01", "Chào cờ", "", "", "", "", "", ""),
    createScheduleData("02", "", "", "", "", "", "", ""),
    createScheduleData("03", "", "", "", "", "", "", ""),
    createScheduleData("04", "", "", "", "", "", "", ""),
    createScheduleData("05", "", "", "", "", "", "", ""),
    createScheduleData("06", "", "", "", "", "", "", ""),
    createScheduleData("07", "", "", "", "", "", "", ""),
    createScheduleData("08", "", "", "", "", "", "", ""),
    createScheduleData("09", "", "", "", "", "", "", ""),
    createScheduleData("10", "", "", "", "", "", "", ""),
  ];
  return <TeacherScheduleComponent rowsSchedule={rowsSchedule} />;
};

export default TeacherScheduleScreen;
