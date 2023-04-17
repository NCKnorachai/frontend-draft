import "../style/members2.css";

export default function Members1() {
  return (
    <div className="member-main">
      <table className="member-main-teble">
        <thead className="member-main-teble-thead">
          <tr>
            <th> </th>
            <th>2023-04-10</th>
            <th>2023-04-11</th>
            <th>2023-04-12</th>
            <th>2023-04-13</th>
            <th>2023-04-14</th>
            <th>2023-04-15</th>
            <th>2023-04-16</th>
          </tr>
        </thead>
        <tbody className="member-main-teble-thead">
          <tr>
            <td>จำนวนคนนัดทั้งหมด</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>จำนวนคนตรงต่อเวลา</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
          </tr>
          <tr>
            <td>จำนวนคนมาก่อนเวลา</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
          </tr>
          <tr>
            <td>จำนวนคนมาหลังเวลา</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
          </tr>
          <tr>
            <td>จำนวนคนไม่มาตามนัด</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
            <td>0 | 0%</td>
          </tr>
          <div className="member-main-teble-lower">
            <p>Rows per page:</p>
            <select>
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>All</option>
            </select>
          </div>
        </tbody>
      </table>
    </div>
  );
}
