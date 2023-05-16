import { useLoaderData } from "react-router-dom";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Footer from "../../../SharedPage/Footer/Footer";


const Home = () => {
    const loaderService = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <div className="my-24">
                <h1 className="text-center text-5xl font-bold text-orange-600 mb-5">Our Service Area</h1>
                <p className="text-gray-400 mb-12 text-center">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                <div className="grid grid-cols-3 gap-8">
                    {
                        loaderService.map(service => <Services
                            key={service._id}
                            service={service}
                        ></Services>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;