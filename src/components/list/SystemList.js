import React from 'react'
import Form from 'react-bootstrap/Form';

function SystemList() {
    return (
        <Form.Select>
            <option>Win 64</option>
            <option>MAC</option>
            <option>Linux</option>
        </Form.Select>
    )
}

export default SystemList