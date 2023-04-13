import React from 'react'
import Form from 'react-bootstrap/Form';

function StatusList() {
    return (
        <Form.Select>
            <option>ACTIVE</option>
            <option>INACTIVE</option>
            <option>STOPPED</option>
        </Form.Select>
    )
}

export default StatusList