import Card from '../../layouts/Card';
import ServicesData from '../../data/services';

const ServicesSection = ({ limit=ServicesData.length }) => {
    return (
        <section className="section">
            <h2 className="section-title text-3xl">
                Servicios
            </h2>
            <p className="section-description text-2xl mb-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus minus dolor sequi consequatur saepe sunt natus aperiam iste beatae unde perspiciatis doloremque consequuntur aliquam doloribus, rerum totam alias. Quae, ducimus!
            </p>
            <div className="flex flex-wrap">
                {ServicesData.length < 1 && (
                    <div className="w-full p-4">
                        <h4 className='text-red-500'>No hay servicios disponibles</h4>
                    </div>
                )}

                {ServicesData.map(function(item: any, index: any){
                    if(item.active === false) return null;
                    if(index >= limit) return null;
                    return (
                        <div className="w-1/3 p-4" key={index}>
                            <Card
                                title={item.title}
                                link={item.link}
                                withIcon={true}
                                icon={item.icon}
                            >
                            <p className="text-center text-base">
                                {item.description}
                            </p>
                            </Card>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ServicesSection;