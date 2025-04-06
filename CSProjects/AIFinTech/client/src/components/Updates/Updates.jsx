import React from "react";
import "./Updates.css";
import { UpdatesData } from "../../Data/Data";

const RecentActivity = () => {
  return (
    <div className="RecentActivity">
      <table className="activityTable">
        <tbody>
          {UpdatesData.map((item, idx) => (
            <tr key={idx} className="activityRow">
              <td className="activityImgCell">
                <img src={item.img} alt="user" className="activityImg" />
              </td>
              <td className="activityInfoCell">
                <div className="activityName">{item.name}</div>
                <div className="activityMessage">{item.noti}</div>
              </td>
              <td className="activityTimeCell">
                {item.time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentActivity;
