
import React, { Fragment } from 'react'
import { Container, Table, Button } from 'react-bootstrap';

const HomePage = () => {
    const tours = [
        {
          date: "Jul 16",
          city: "Detroit, MI",
          venue: "DTE Energy Music Theatre"
        },
        {
          date: "Jul 19",
          city: "Toronto, ON",
          venue: "Budweiser Stage"
        },
        {
          date: "Jul 22",
          city: "Bristow, VA",
          venue: "Jiggy Lube Live"
        },
        {
          date: "Jul 29",
          city: "Phoenix, AZ",
          venue: "Ak-Chin Pavilion"
        },
        {
          date: "Aug 2",
          city: "Las Vegas, NV",
          venue: "T-Mobile Arena"
        },
        {
          date: "Aug 7",
          city: "Concord, CA",
          venue: "Concord Pavilion"
        }
      ];
      
  return (
    <Fragment>
    <Container fluid className='full-width mb-5 p-3 d-flex justify-content-center align-items-center' style={{background:'grey'}}>
        <h3 style={{width:'300px',height:'50px', border:'2px solid lightblue', color:'white'}}>Play Now</h3>
    </Container>
    <Table striped className='m-5'>
        {
            tours.map((tour)=>
            {
                return (
                    <tr>
                        <td>{tour.date}</td>
                        <td>{tour.city}</td>
                        <td>{tour.venue}</td>
                        <td><Button className="btn btn-primary">Buy Tickets</Button></td>
                    </tr>
                )
            })
        }
    </Table>
    </Fragment>
  )
}

export default HomePage