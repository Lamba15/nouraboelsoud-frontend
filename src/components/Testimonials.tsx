import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCreative} from "swiper";


function Testimonials() {

    const testimonials: { text: string, image: string, url: string, client: string }[] = [
        {
            text: "I've worked with Nour for the last 2 months on an AI enhanced E-commerce website project. He's taken care of all of the work related to the Front-End and most of the Backend. Nour has been great at communication and collaboration to deliver the project. He was really reasonable when it came to iterating to achieve the desired quality. Working with Nour has been a pleasure and he has delivered high quality working website despite a few technical surprises that came up as a result of integrating with 3rd party APIs.\n" +
                "I would recommend Nour to anyone looking for a high quality full-stack developer.",
            image: "Idesigns.png",
            url: "https://www.upwork.com/freelancers/~01b9f10c5ef014f48a",
            client: "Fuad from United Kingdom"
        },
        {
            text: "Nour stands out for his diligent work ethic and receptive attitude. His swift response to changes and requests ensured the smooth progress my project. Working alongside Nour has been a pleasure, and I look forward to our ongoing partnership as he continues to contribute to the development of my project.\n" +
                "Without hesitation, I highly recommend Nour to anyone seeking a top-tier full-stack developer.",
            image: "admin-website.png",
            url: "https://www.upwork.com/freelancers/~01b9f10c5ef014f48a",
            client: "Lance from United Kingdom"
        },
        {
            text: "Nour is very responsive and hardworking. We never had a problem requesting changes from him. Also very open to suggestions and feedback. Will definitely re-hire him once we have new updates for our webpage.",
            image: "space-raids-1.png",
            url: "https://www.upwork.com/freelancers/~01b9f10c5ef014f48a",
            client: "Tormod from Norway"
        },
        {
            text: "This is the second time we use Nour Abo for our projects, very active and quick and deliver quality labour! <3",
            image: "space-raids-2.png",
            url: "https://www.upwork.com/freelancers/~01b9f10c5ef014f48a",
            client: "Tormod from Norway"
        },
    ]

    return (
        <section className={"testimonials-section"}>
            <h1>
                My Clients Feedback
            </h1>
            <p>
                9 out of 10 clients who worked with me, go on to do multiple projects with me.
            </p>

            <div>
                <Swiper
                    direction="horizontal"
                    loop={true}
                    grabCursor={true}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true
                    }}
                >
                    {testimonials.map((testimonial, index) => {
                        return (
                            <SwiperSlide>
                                <div className={"testimonials-section-image-container"}>

                                    {/*<h3>{testimonial.client}</h3>*/}
                                    <img onClick={() => {
                                        window.open(testimonial.url)
                                    }}
                                         src={`/upwork-feedback/${window.innerWidth > 700 ? "desktop" : "mobile"}/${testimonial.image}`}
                                         title={testimonial.text}
                                         alt={testimonial.text}/>

                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    );
}

export default Testimonials;
