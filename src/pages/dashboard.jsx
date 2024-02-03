import "../styles/dashboardStyle.css";
import { blueGrey } from "@mui/material/colors";
import { TextField, Button, Typography, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

const Dashboard = () => {
  const color = blueGrey[900];
  const [images, setImages] = useState("");
  const getImageData = async () => {
    let response = await axios.get("http://localhost:2000/images");
    // console.log(response.data[0].url);
    setImages(response.data[0].url);
  };
  useEffect(() => {
    getImageData();
  });

  return (
    // <ThemeProvider theme={darkTheme}>
    //   <CssBaseline />
    <div className="dashboardPage">
      {/* //header of dashboard page/ */}
      <div className="dashboardHead">
        {/* *****leftMenu***** */}
        <div className="leftMenu">
          <ul className="list leftList mt-2">
            <Breadcrumb className=" mt-3">
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item >
              Dashboard
              </Breadcrumb.Item>
              <Breadcrumb.Item active>setting</Breadcrumb.Item>
            </Breadcrumb>
          </ul>
        </div>
        {/* ****rightMenu**** */}
        <div className="rightMenu">
          <div className="moodBtn">
            <Button align="center" variant="text" color="primary" title="lightMood">
            <img className="moodItems" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZ0lEQVR4nO2Zy2oUQRSGP5IMjiFBFFtcqHtjXkFF3QhCFNGH0BBvG3EjrnSvT+DtQUyWwpgY8TJu3IluxAQvUUzLgX+gHGZGq7u6ugz9QcFQ03UufapPnzoNDQ0NdfMEeMoWINf478kbRxIjuYjsAtoRHWkBO6nAiS/ACpBFcCQDngGfgR0EZBuwLIOeezqzBCx6XJ9JRy6dFpmguApeAXtDK+BPHS8r0lG5M9GcGBb6Igmgn3aJrVuKTIq/DlA6BhwB7qo8eQ980O97wGFd47IH+CaZ0Zxw7+LuvrmjQMfJVMNGR866mKwQ0S3NDWBThlqavgTMAJMaM5rrbUu79jqJcUvGfQcuDNg6LvbfRWBDa26SCKd0d82JYx7rjsuZX8BJamYCeKM7a5HwZd5J5SarNs45KXPUdhrGOLAqGWepkccyYqGEjCuScZ8a6cqIgyVkHJKM1wHtYgp4NyL/WwHosq55W1eUaclYK2GHtyP9Veya5qcjO7JIYHoZy152RZmtYmsVfdgvU5xrkvGAGjkvI1aVSn2xNS8kw1J5bdjp7a0MsbLDlwWt7VZxEvTljIzZUNnxr5zQGitv5kiEO44z83/ZZuOKRK9ovE1CjDnO5Nr3V5WRpjRmNdd7JjblRJHSJigTOme4nHbe9qNGd8B2srZP9Ock0ynv44BTXUsZ6JGq2nUNayg81H/9BlvEPsU+6rrNh06g8rulhlweq/lQZcsmRt8sWt8pq9qZSTUUioTe94tV5jhjOrcTkP3Az8hN7BXgB7CPwByI/FmhLZ3JkNyHnqI0jqTGlonIUhVn7IaGBrz4DejQ596rineIAAAAAElFTkSuQmCC"/>
            </Button>
            <Button align="center" variant="text" color="primary" title="darkMood">
            <img className="moodItems" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACIElEQVR4nO2Yz0tVQRTHP5pYpq6CQoh6ugiX4qIwRUFaGNGmaCO0sZD+h6Bw46KFovhftHAnJmrqwyAKUZB+0aoSUyhDS6iQJwPfB8Pj+bzqm3fn6nxgFu/OmZlz3pk593sHAoFA4CQxC7zhGJBRSyRlwKIVRLalSRjlwEKeQOZIMJkkby2bdNIzcSK5DjwBXgDrQBsJq2z39ygKF0kIDcCM5fg/YAzY0e8qEkAHsCmH/wD9wDn1ZZ/X4jk35Lxx9jWQyun/qL4rPmupFLAhR58DlXlsptXfRYwyJF3A9hTwSnYTewRh6JPNMDHKkLkCtt2yMaX1QgG7Ztl9UfBevbnLgWU5+CBClj/ItgfPaJFjKwW2lM1d2X8FavCIPjk2ENHeZGVeY0aVUS+YlVO3DjAmpfNkxg36EsxnOZT7ztiPduCvlZnYt9lvOXP2EGNbge8a/w3oBSqIiaPKjnrrzGRL8whwE2hUpqokNNt0xpxQDNlhnLsDvMujlO22hkOKLTuagKfAFPAe2LICMd8zziiF7BjXGo8druFcdpwH/muNazjEtex4prlLcpvpSnY0ANua2whT57iQHWeAt5pz0mXZdSk7TusPMXP9Ai5TYoohO+qUgYxUQ2xXR+1WZozseBixmpmt9Aj4obE/gU5iJorsqNZhvg0MAas5X6OX8ISossNuS8A9X2R9VNlh9v8n4KWuU6+WsjIFAoFAIHBs2QWe3b+gIxja2wAAAABJRU5ErkJggg=="/>
            </Button>
          </div>

          <ul className="list rightList mt-3">
            <li>
              <img
                className="iconsMenuHeader"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADaklEQVR4nO2a+2uOYRjHP9jGjJm1XxxCk+NCJEVSyj9Aw2bzkx8soyXllMRPKMnwE4U0yWHI+Uzvi5XktDGHpuQ0pNCwOWy667t6sufZ+77b+7zPvXo/9fyw57qf677u977v67ru6x4kSWI9g4G5wBagErgH1AEf9NTp3TG1yQcGYQnDgY3AI6DF4/mix0v+ANgA5AYxgOnAOeCvwyDza28HCoFJQJbLd1mSmTblwH3H90bXGWBqIgZgfrXTjs7NclkJDO2EzmHAauClQ+9JvY873YAy4Ls6eqr90D2OfRhdBcAz9dEAlMZRPxnAYSn/AawCUvCPVGAt8FN9HpINnaI/UOWYhbEkjnHAc/V9y2PPRUUf4K4UXQMySTz9gBuy4U5HZqaHPIhRcAHoRXCkA5dly6lY9+UafWjcY1+CJxN4KJuMl4yK8cAv4JsCni2MkCdrAvKi+eCSRl6CfSyVbecjNZyhhtXaJ7aRAjyWjSa78OSoGi2IoDDcTu7U2Sccoe9iR3zx3FBmb9QDaQEOJBSh757AR6BRIaIN+VK0B/vZK1vnuAm3STgP+ymQrVvdhK1BZxT2M0a2XnQT1kpokjbbSZOtT9yE7xRw/Nzc4Q7oDnvYZI4Ub90Eb5Sm+zmQUAd0h2IdSLU+DDJBjMvSat3sJqfp0pt9s4RF2E9he+53toS7sZ99stXY3IYMea3PAaco4ShSlE8607umKIaDUlZoca61UO2MrZ6Y4lmzCg02pvGpjsA9LVLjE2q4DPsok21no60mNijgjMQeRsumRrnfqCjVyKtVkgmaLKBGNq2ItUS631HTMiWZoOgtG1q07GMu0xoXfEUKbgLZBDMTIdlQpUF1iHRH9d0UlyeSOCYALxyxJTMeLm+XFDYloEyUCqzTpjZ9VnRmJtyYL8Um3fcDE7eKHLNgCoSL/ehooDq4HWe9ubpGeCX9zbqDHILPB/6dHvISFTAWAZOBHJdjc7ZkxdLjvHv8o5uqKfhMa3V+lkv1r7yd3MkEsa/tyM3d43q/rtr+ZwDwW9Pv9OMm8l+XQe9VSjLV8gPyNDU6jtbrvtHccRwBNikFN3oTyg4Zu0R/5+hQ06T3tUohrCZPBpslshw47nCNrem057nAJq66rOtmLamZdCEqgNf6D4VKzUpXqEYmSUIc+Af+05ebWLVawwAAAABJRU5ErkJggg=="
              />
            </li>
            <li>
              <img
                className="iconsMenuHeader"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD5klEQVR4nO1YWUgVURj+zMyutlJRmSJFRWVRBCEV9FBPWZBkWr1klEVUGgRhb5VB21NEL0ULRJRBQftDaRFBGy22vohtpr203koTUuO3b+DnNDP3zp3rcmE+GLjnO9/855w75/zLAQIECBAgwD/0AbAXQCOABgC7ySUc9gBoN55dSEA0cPKzAMzmb+G6BPMAhOJky/oKTm0/CAGY69Q5EsAvALUA0n0MMhrAZjXx7wC+qPZqAIN92E/nHH8CGGEnOMiBzvpYgLzbanM2zKcZwD4Ag2Ic6xztHDA7hgNoAfAHwETFLwOwCUByBMOL+Q+186seBpAPIBtAGp9scoeoEW0dgKkRbCdzDjIXC5M4198AhmlxGQ2fV1xfAO/IL3IZaKH6CqecPrcB0ZzmO18BTHHR5lP3FkCq4i+S36jF90kWKm4DuUcAejkMMhbAN+oq4A1JAHbyXfnD+jvoZOwn1K1T/FJydy0iSx1K7bEeki9wmUwlNZWcmFck8VyJjf0uukJqHiguxDm3AcjUosvGHhTuk0s0Hs8t1USPFysyudfFzhAHTaryfBMUf4XcEtB7SGObEpSSO+oygS3UHIF/nLDb7waO22i2k5NUCNVs5CnBSXIlcMa1KLZetFgehetfS40sWjsa4aqk8YIN2U4WnpGb5mK4jhqJH34xTrljJ0ynpkZxk8nJGvCRDe027TgTVtzwkwVYGEBbYRdNBjUfbLiOHK6JDe2xLE5iiRPimTtFYy/E/iYnrtlm0naL8zqwV0Syl85+2QkW0vRCGtnQLrSeXKaPgb0ikr1sFTwtjNLbzTrsOUrwmFyuj4G9IpK9meyXQG0e9ueg6zLd7zFypT4G9opI9sps4pblfq+DwcQMiGtU6hHrwF4Ryd4ZVc9Y2EFOyuqO8N7OcG9hDHOYHy7utSsX0o9zaTPi1lUdlLMoMJPG2xStiGHgWOBmbyX7bhkeK6yTRsE9CouUcJU6SGYaP5R9n+O4EPkjxeZAm8LqJfuKbdL4O3YH6YLiJOt9TV4qQI055MW7xQuW95xh8AUqfUlR/CXyUjfZlro65yriIns73Fm51RBeISWw6XTAscuM3ZLDEuK/UldfPkhh74YUdWfleCUTA+bTZr1R0nq6fPByHVRMI69irAqdIOewlrbX+7kOiuaCTvKxNzYHL14ooe33ERJW1wu6aGAFz6dRXBHFgmRVC3VUfZ2BXDqDVt7lJuw4NSpoddVT0xkLudkNC7mBbkSYk5Ay1IRVP8ilXo9HNSdbbtO3Vd969HQs4GRbuJgMPuXk2hn8EgIVLvteaoiEQh63UJhPVSJ9iQABAgRAp+IvTmWYETv6gIMAAAAASUVORK5CYII="
              />
            </li>
          </ul>
          <div className="moodBtn">
            <Button
              align="center"
              variant="text"
              color="primary"
              title="profile"
            >
              <img className="profileImage" src={images} alt="" />
            </Button>
            <Button align="center" variant="text" color="primary" title="tasks">
            <img className="iconsMenuHeader" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeklEQVR4nO3VwQmAQAxE0SnA/svJIWnETuJVFgze3MT/IAdv+0EYCQDwMZOUy4UayodrJ5eH378PSWcR+9XFlBAf/WvF22IAvRnLvplsOIgxJcSrEJYdQA/Gsm8mGw5iTAnxKoRlB9CDseybyYaDGFNCvAph2QEAv3MBD9CoDPxj23UAAAAASUVORK5CYII="/>
            </Button>
          </div>
        </div>
      </div>

      {/* //content of dashboard page/ */}
      <div className="dashboardContent"></div>
    </div>
    // </ThemeProvider>
  );
};
export default Dashboard;
