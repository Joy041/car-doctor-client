import { useContext, useEffect, useState } from "react";
import { CarContext } from "../../Routes/AuthProvider/AuthProvider";
import ShowBooking from "../ShowBooking/ShowBooking";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Bookings = () => {
    const { user } = useContext(CarContext)
    const [bookings, setBookings] = useState([])
    const navigate = useNavigate()


    const uri = `https://car-doctor-server2.vercel.app/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(uri, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-doctor-web-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBookings(data)
                }
                else{
                     navigate('/')
                }
            })
    }, [uri, navigate])

    const deleteBtn = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server2.vercel.app/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Booking information has been deleted.',
                                'success'
                            )
                        }
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    })

            }
        })
    }

    const handleConfirm = (id) => {
        fetch(`https://car-doctor-server2.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const confirm = bookings.find(booking => booking._id === id)
                    confirm.status = 'confirm'
                    const newBooking = [confirm, ...remaining]
                    setBookings(newBooking)
                }
            })
    }

    return (
        <div className="mt-14">
            <h1 className="text-center font-bold text-warning text-4xl my-8">Booking : {bookings.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Delete </th>
                            <th>Info</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <ShowBooking
                                key={booking._id}
                                booking={booking}
                                deleteBtn={deleteBtn}
                                handleConfirm={handleConfirm}
                            ></ShowBooking>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;


