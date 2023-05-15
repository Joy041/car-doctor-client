import { FaArrowRight } from "react-icons/fa";

const Services = ({ service }) => {
    const { img, title, price } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className="h-64" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <div className="flex items-center">
                    <p className="text-xl text-orange-600 font-semibold">Price : ${price}</p>
                    <div className="card-actions justify-end">
                        <button className=" text-orange-600"><FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;