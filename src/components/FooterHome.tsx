import { FaPaperPlane } from "react-icons/fa"; 

const h2Styles = "font-semibold text-2xl last:py-2";
const pStyles="py-2 mt-2";
const divStyles=" p-2 text-center";

function FooterHome() {
    return (
        <>
            <div className="bg-sky-400">
                <div className="bg-sky-400 py-10 mx-5 grid grid-flow-row  md:grid-rows-1  md:grid-flow-col gap-3">
                     <div className={`${divStyles} md:text-left`}>
                        <div className="pl-2 flex justify-center ">
                        <FaPaperPlane size={50} />
                        </div>
                             <h1 className="text-2xl font-bold pl-4 md:pl-0">Planeo</h1>
                        </div>
                    <div className={divStyles}>
                        <h1 className={h2Styles}>Sobre Planeo</h1>
                        <p className={pStyles}>Descubre cómo Planeo puede ayudarte a organizar tus proyectos y tareas de manera fácil y divertida.</p>
                    </div>
                    <div className={divStyles}>
                        <h1 className={h2Styles}>Únete al equipo</h1>
                        <p className={pStyles}>¿Te apasiona la organización? Revisa nuestras vacantes y sé parte del equipo de Planeo.</p>
                    </div>
                    <div className={divStyles}>
                        <h1 className={h2Styles}>Descarga la app</h1>
                        <p className={pStyles}>Lleva Planeo a donde vayas. Descarga nuestra app en tu computadora o dispositivo móvil.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FooterHome;