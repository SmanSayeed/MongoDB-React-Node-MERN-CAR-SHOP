import axios from 'axios';
import React,{useEffect,useState} from 'react';
import PageTopBanner from '../../PageTopBanner/PageTopBanner';
import './AllBookings.css'
const AllBookings = () => {

    const [booking,setBooking] = useState({});
    const [loading,setLoading] = useState(false);

    const changeStatus = id => {
        const confirm = window.confirm('Are you sure?');
        if(confirm){
            axios.put(`update-status/${id}`).then(res=>{
                console.log(res.data);
      
                if(res.data.matchedCount > 0){
                    alert('Status updated successfully');
                    axios.get('bookings').then(res=>{
                        console.log(res.data);
                        setBooking(res.data);
                    })
                }
            })
        }
    }
    

    useEffect(()=>{
        axios.get('orders').then(res=>{
            console.log(res.data);
            setBooking(res.data);
        })
    },[]);

    const cancelBooking = (id) => {
        const confirm = window.confirm('Are you sure?');
        if(confirm){
            axios.delete(`delete-order/${id}`).then(res=>{
                console.log(res.data);
      
                if(res.data.deletedCount > 0){
                    alert('Deleted successfully');
                    const remainingBookings = booking.filter(item=>item._id!==id);
                    setBooking(remainingBookings);
                }
            })
        }
     
    }

  


    let bookingTable = (
        <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>

            <td>-</td>
            <td>-</td>
            <td>-</td>

            <td>-</td>
        </tr>
        );
    let sl = 1;
    if(booking.length>0){
        bookingTable =  booking.map(item=>(
      
                <tr key={item._id} >
                    <td>{sl++}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.service}</td>
                    <td>
                
                        <div className='card'>

                            {
                            item.status==='Pending' 
                            
                            ? 
                            
                            (
                                <>
                                    <div className='card-header bg-warning'>
                                        <h5> {item.status}   </h5>    
                                    </div>
                                    <div className='card-body'>
                                        <button className='mx-auto btn bg-primary color-white w-100' onClick={()=>changeStatus(item._id)}>Complete</button>
                                    </div>
                                </>
                            ) 
                            
                            : 
                            

                            (
                                <>
                                    <div className='card-header bg-success'>
                                        <h5> {item.status}</h5>    
                                    </div>
                                    </>
                            )
                            }
                        
                        
                        </div>

                    </td>
                    <td>
                        <button className='mx-auto mt-2 btn bg-danger color-white w-100' onClick={()=>cancelBooking(item._id)}>Cancel</button>
                    </td>


                </tr>
        
        ))
    }

    return (
        <>
       
            <div className='container'>
                <h1>
                    Manage All Orders
                </h1>
          <div className='row'>
                    <div className='my-5 col-md-12 booking-table'>
                        <blockquote className='blockquote'>
                            <i>This table is large, please scroll left right in small device</i> 
                        </blockquote>
                  <table className='table table-striped booking-table'>
                      <thead>
                      <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Sl</th>
                          <th scope="col">Email</th>
                          <th scope="col">Shipping Address</th>
                          <th scope="col">Car</th>
                          <th scope="col">Status</th>
                          <th scope="col">Cancel Booking</th>
                      </tr>
                      </thead>
                      <tbody>
                      {bookingTable}
                      </tbody>
                   
                    

                    
                  </table>
              </div>
          </div>
            </div>
        </>
    );
};

export default AllBookings;