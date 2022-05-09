
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import api, { endpoints } from '../api';

export default function Home(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const loadPosts = async () => {
            let res = await api.get(endpoints['posts'])
            console.log(res.data)
            setPosts(res.data)
        }
        loadPosts()
    },[])
    return(
<>
        <h1>trang home

        </h1>
    <Row>
   {posts.map(c => 
        <Col md={4} xs={12}>
        <Card >  
           <Card.Img variant="top" src="holder.js/100px180" />
           <Card.Body>
               <Card.Title>{c.title} </Card.Title>
               <Card.Text>
               <h3>Nội dung:</h3> {c.body}
               </Card.Text>
              
           </Card.Body>
       </Card>         
        </Col>
   )}
    </Row>
</>
    )}