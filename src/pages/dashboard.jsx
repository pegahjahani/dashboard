import "../styles/dashboardStyle.css";
const Dashboard = () => {
  return (
    <div className="dashboardPage">
      {/* //header of dashboard page/ */}
      <div className="dashboardHead">
        {/* *****leftMenu***** */}
        <div className="leftMenu">
          <ul className="list">
            <li>dashboard</li>
            /
            <li>users</li>
            /
            <li>settings</li>
          </ul>
        </div>
        {/* ****rightMenu**** */}
        <div className="rightMenu">
          <div>
            <ul className="list rightList">
              <li>
                <div className="moodBtn">
                  <button>lightMood</button>
                  <button>darkMood</button>
                </div>
              </li>
              <li>***</li>
              <li>***</li>
              <li>***</li>
              <li>
              <div className="moodBtn">
                  <button>profile</button>
                  <button>tasks</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* //content of dashboard page/ */}
      <div className="dashboardContent"></div>
    </div>
  );
};
export default Dashboard;
