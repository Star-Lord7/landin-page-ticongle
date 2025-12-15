import Navbar from "~/design/Navbar";
import imgBanner from "./../images/image.png";
import ServicesSection from "~/content/home/ServicesSection";
import Footer from "~/design/Footer";
import serviceImg from "./../images/serviceInfo.png";
import Sidebar from "~/design/Sidebar";

export function Servicios() {
    return (
        <>
            <Sidebar/>

            <header>
                <img className="" src={imgBanner} alt="" width="100%" />
            </header>

            <main>
                <div className="text-center p-6 m-3">
                    {/* <h2 className="font-extrabold text-3xl">Servicios</h2> */}
                    <p className="text-3xl py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum commodi illum rerum ducimus maxime ea atque expedita dicta quod modi, saepe ullam ipsam voluptatum magni, ipsa accusamus vero blanditiis minus.</p>
                </div>
                <div className="flex flex-wrap ">
                    <img className="w-1/2 p-4" src={serviceImg} alt="" />
                    <div className="w-1/2 p-4">
                        <h2 className="p-4 text-3xl">Tenemos todo lo que buscas</h2>
                        <p className="p-4 text-shadow-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt earum libero et veniam qui reiciendis maxime, illum possimus deleniti fugit expedita asperiores? Ex aspernatur dolorem temporibus, odio molestiae ab unde?</p>
                    </div>
                </div>
                <ServicesSection/>
            </main>

            <Footer/>
        </>
    );
}