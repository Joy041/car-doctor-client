


const ShowBooking = ({ booking , deleteBtn, handleConfirm }) => {
    const { img, title, name, price, date, _id, status } = booking;

    

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => deleteBtn(_id)} className="btn">X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                ${price}
            </td>
            <td>{date}</td>
            <th>
                {
                    status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> : <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                }
            </th>
        </tr>
    );
};

export default ShowBooking;

{/* <div className="overflow-x-auto w-full">
            <table className="w-full table"></table> */}