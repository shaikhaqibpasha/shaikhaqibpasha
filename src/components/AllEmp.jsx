
import React, { useState } from "react";
export const AllEmp = () => {
    const [hrc, setHrc] = useState(0);
    const [Devc, setDevc] = useState(0);
    return (
        <table className="count">
            <tr>
                <td>HR Count</td>
                <td>
                    <input type="text" onChange={e => setHrc(e.target.value)} />
                </td>
            </tr>
            <tr>
                <td>Dev Count</td>
                <td>
                    <input type="text" onChange={e => setDevc(e.target.value)} />
                </td>
                <td>{Devc}</td>
            </tr>
            <tr>
                <td><br />
                    <span>Total Count :</span>
                </td>
                <td><br />
                    <p>{ Number(hrc) +  Number(Devc)}</p>
                </td>
            </tr>
        </table>
    )
}