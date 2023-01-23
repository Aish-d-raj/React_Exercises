import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function Accordionex(props) {
    
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.myarr[0].name}</Accordion.Header>
        <Accordion.Body>
         <p>{props.myarr[0].id}</p>
         <p>{props.myarr[0].name}</p>
         <p>{props.myarr[0].email}</p>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>{props.myarr[1].name}</Accordion.Header>
        <Accordion.Body>
        <p>{props.myarr[1].id}</p>
         <p>{props.myarr[1].name}</p>
         <p>{props.myarr[1].email}</p>
        </Accordion.Body>
        
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordionex;