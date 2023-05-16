import { useContext } from "react";
import Swal from "sweetalert2";
import { CarContext } from "../../Routes/AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";


const Checkout = () => {
    const service = useLoaderData()
    const {_id, price, img, title} = service
    const {user} = useContext(CarContext)

    const handleCheckoutForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;

        const order = {
            name, 
            date,
            phone,
            email,
            message,
            service: _id,
            price,
            img,
            title
        }

        console.log(order)

        fetch('https://car-doctor-server2.vercel.app/bookings', {
            method: "POST",
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Go to My Booking for confirm your order',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
          })

    }

    return (
        <div className="mt-16 bg-sky-100 p-14 rounded-xl">
            <form onSubmit={handleCheckoutForm}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <input type="text" placeholder="Name" name="name" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="date" name="date" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="number" placeholder="Your Phone" name="phone" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="email" placeholder="Your Email" name="email" required defaultValue={user?.email} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <textarea className="textarea textarea-black border-inherit w-full h-52 mt-6" name="message" placeholder="Your Message"></textarea>
                </div>
                <div className="form-control mt-6">
                   <input className="btn bg-orange-600 border-0 btn-block" type="submit" value="Order" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;