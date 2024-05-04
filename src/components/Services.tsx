import Lottie from 'react-lottie-player'
import coding from "../animations/coding.json"
import responsiveDesign from "../animations/responsive-design.json"
import serverBackend from "../animations/server-backend.json"

function Services() {

    return (
        <section className={"container"}>
            <h1>
                Services
            </h1>

            <div className="services">
                <div className={"service"}>
                    <Lottie
                        loop
                        animationData={serverBackend}
                        play
                    />

                    <h3>
                        DevOps and <br/> Backend Development
                    </h3>
                </div>

                <div className={"service"}>
                    <Lottie
                        loop
                        animationData={coding}
                        play
                    />

                    <h3>
                        Web and <br/> Mobile Applications
                    </h3>
                </div>

                <div className={"service"}>
                    <Lottie
                        loop
                        animationData={responsiveDesign}
                        play
                    />

                    <h3>
                        Responsive Design
                    </h3>
                </div>
            </div>

        </section>
    );
}

export default Services;
