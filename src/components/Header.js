import React from "react";
import {Link} from "react-router-dom";

const Header = () => (
    <div>
        <table border={1} >
            <tr>
                <th> 학번 </th> <th>이름</th>
            </tr>
            <tr>
                <td><Link to ="/Ahn">202021224</Link></td> <td>안승현</td>
            </tr>
            <tr>
                <td><Link to ="/Kim">19951221</Link></td> <td>김지원</td>
            </tr>
            <tr>
                <td><Link to ="/Ku">19970331</Link></td> <td>구준회</td>
            </tr>
        </table>
    </div>
)
export default Header;