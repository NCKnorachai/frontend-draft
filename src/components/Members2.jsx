import "../style/members2.css";

export default function Members1() {
  return (
    <div className="member-main">
      <table className="member-main-teble">
        <thead className="member-main-teble-thead">
          <tr>
            <th> </th>
            <th>10/เม.ย/2566</th>
            <th>11/เม.ย/2566</th>
            <th>12/เม.ย/2566</th>
            <th>13/เม.ย/2566</th>
            <th>14/เม.ย/2566</th>
            <th>15/เม.ย/2566</th>
            <th>16/เม.ย/2566</th>
          </tr>
        </thead>
        <tbody className="member-main-teble-thead">
          <tr>
            <td className="member-main-teble-thead-textA">จำนวนคนนัดทั้งหมด</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td className="member-main-teble-thead-textB">จำนวนคนตรงต่อเวลา</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
          </tr>
          <tr>
            <td className="member-main-teble-thead-textC">จำนวนคนมาก่อนเวลา</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
          </tr>
          <tr>
            <td className="member-main-teble-thead-textD">จำนวนคนมาหลังเวลา</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
          </tr>
          <tr>
            <td className="member-main-teble-thead-textE">
              จำนวนคนไม่มาตามนัด
            </td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
          </tr>
        </tbody>
      </table>
      <div className="member-main-flex-teble-lower">
        <div className="member-main-teble-lower">
          <div className="member-main-teble-lower-text">
            <p>Rows per page:</p>
            <select>
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>All</option>
            </select>
            <p>1-5 of 5</p>
        
          </div>
        </div>
      </div>
    </div>
  );
}
