
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api, { endpoints } from '../api';
import ModalExam from './Modal';
export default function Clock() {
    const [uses, setUser] = useState([])
    const [show, setShow] = useState(false);
    const [user,setDetailUser]=useState(null);
    const handleShow = (user) => {
        setShow(true);
        setDetailUser(user);
    }
    const handleClosse = () => {
        setShow(false);
        setDetailUser(null);
    }
    useEffect(() => {
        const loadUsers = async () => {
            let res = await api.get(endpoints['uses'])
            setUser(res.data)
        }
        loadUsers()
    })
    return (

        <>
            <Table className="striped bordered hover" >
                <thead>
                    <tr>
                        <th>mã số nhân viên</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {uses.map(c =>
                        <tr><td>{c.id}</td><td>{c.name}</td><td>{c.username}</td><td>{c.email}</td> <td>
                            <Link to>
                                <Button variant="primary" onClick={() => {
                                    handleShow(c);
                                }}>
                                    thông tin chi tiết
                                </Button>
                            </Link>

                        </td> </tr>)}



                </tbody>
            </Table>
            <ModalExam show={show} handleClose={handleClosse} infoUser={user}></ModalExam>
        </>

    );
}


