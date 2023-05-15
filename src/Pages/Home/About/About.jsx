import parson from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero bg-base-200 rounded-xl px-6 py-32">
            <div className="hero-content flex-col lg:flex-row p-6">
                <div className='lg:w-1/2 relative'>
                    <img src={parson} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-7 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2'>
                    <h1 className="text-xl text-orange-400 font-bold">About Us</h1>
                    <p className="py-6 text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</p>
                    <p className='text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className='text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-primary mt-8 bg-red-500">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;