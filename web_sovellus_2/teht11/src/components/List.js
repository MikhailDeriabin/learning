import React from "react";
import { Table } from 'react-bootstrap'

const List = (props) => {
    const {events} = props;

    return(
        <div className="container">
            <Table striped>
                <thead>
                <tr>
                    <th>
                        Content
                    </th>
                    <th>
                        Date
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    events.map(e => (
                        <tr key={e.id}>
                            <td>{e.content}</td>
                            <td>{e.date}</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>

        </div>
    )
}

export default List