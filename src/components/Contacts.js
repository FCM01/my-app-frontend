import React from 'react'
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const Contacts = () => {
    const [show,setShow] = useState(false)
    const [receiver,setReciever] = useState("")
    const [contacts, setContacts] = useState({data: [] });

    useEffect(() => {
      fetch("http://localhost:8000/get/all/crew")
        .then((res) => res.json())
        .then((data) => setCrew(data));
    }, []);
  return (
    <div>
    <ListGroup>
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
  </div>
  )
}

export default Contacts