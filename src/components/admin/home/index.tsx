import * as React from "react";
import Box from "@mui/material/Box";
import "./styles.scss";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { Typography } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

type Iprops = {
  handleOnMenuPlateClick: (name: string) => void;
  totalUser: number;
  totalClass: number;
  data1: {
    id: string;
    label: string;
    value: number;
    color: string;
  }[];
  data2: {
    id: string;
    label: string;
    value: number;
    color: string;
  }[];
};
export const HomeAdminComponent = (props: Iprops) => {
  const { handleOnMenuPlateClick, totalUser, totalClass, data1, data2 } = props;
  return (
    <Box className="homeAdminContainer">
      <Box className="homeAdminMenuPlateContainer">
        <Box
          className="homeAdminMenuPlate"
          sx={{ backgroundColor: "#fba046" }}
          onClick={() => handleOnMenuPlateClick("/classManager")}
        >
          <Box className="homeAdminMenuPlateIcon">
            <AccountTreeIcon htmlColor="white" sx={{ fontSize: "150px" }} />
          </Box>
          <Box className="homeAdminMenuPlateContent">
            <Typography component="h1" color="white" fontSize={30}>
              Classes
            </Typography>
            <Typography component="h1" color="white" fontSize={20}>
              {`Number of classes: ${totalClass}`}
            </Typography>
          </Box>
        </Box>
        <Box
          className="homeAdminMenuPlate"
          sx={{ backgroundColor: "#46c5fb" }}
          onClick={() => handleOnMenuPlateClick("/usersManager")}
        >
          <Box className="homeAdminMenuPlateIcon">
            <AccountTreeIcon htmlColor="white" sx={{ fontSize: "150px" }} />
          </Box>
          <Box className="homeAdminMenuPlateContent">
            <Typography component="h1" color="white" fontSize={30}>
              Users
            </Typography>
            <Typography component="h1" color="white" fontSize={20}>
              {`Number of Users: ${totalUser}`}
            </Typography>
          </Box>
        </Box>
        <Box
          className="homeAdminMenuPlate"
          sx={{ backgroundColor: "#fb4669" }}
          onClick={() => handleOnMenuPlateClick("/scheduleManager")}
        >
          <Box className="homeAdminMenuPlateIcon">
            <AccountTreeIcon htmlColor="white" sx={{ fontSize: "150px" }} />
          </Box>
          <Box className="homeAdminMenuPlateContent">
            <Typography component="h1" color="white" fontSize={30}>
              Schedule
            </Typography>
            <Typography component="h1" color="white" fontSize={20}>
              Schedule Manager
            </Typography>
          </Box>
        </Box>
        <Box
          className="homeAdminMenuPlate"
          sx={{ backgroundColor: "#4654fb" }}
          onClick={() => handleOnMenuPlateClick("/scoreManager")}
        >
          <Box className="homeAdminMenuPlateIcon">
            <AccountTreeIcon htmlColor="white" sx={{ fontSize: "150px" }} />
          </Box>
          <Box className="homeAdminMenuPlateContent">
            <Typography component="h1" color="white" fontSize={30}>
              Scores
            </Typography>
            <Typography component="h1" color="white" fontSize={20}>
              Score Manager
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="homeAdminChartContainer">
        <ResponsivePie
          data={data2}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
        <ResponsivePie
          data={data1}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "gioi",
              },
              id: "dots",
            },
            {
              match: {
                id: "kha",
              },
              id: "lines",
            },
            {
              match: {
                id: "trungBinh",
              },
              id: "dots",
            },
            {
              match: {
                id: "yeu",
              },
              id: "lines",
            },
          ]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </Box>
    </Box>
  );
};
