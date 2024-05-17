import React from 'react'

export default function About() {
    return (
        <div>
            <img className="img" src='https://th.bing.com/th/id/R.25fcf74f21a036d2df64e3bb1e066ba0?rik=%2bce1ZKfTZbljxA&riu=http%3a%2f%2fwww.barcelonaconnect.com%2fwp-content%2fuploads%2f2016%2f01%2fdeporteenimagenes.jpg&ehk=Cj29gs5%2fC87TCA8%2bVXxfPLE4%2bpm4wjWSIryE0ED4sUw%3d&risl=&pid=ImgRaw&r=0' style={{ width: "100vw", height: "95vh" }} />
            <p className='content'>Welcome to KOVAI SPORTS EVENTS, Here we have a collection of all the sports academies. We provide all the necessary information about the sports academy. We help you take admission in any sports academy like that of Cricket Academy, Football Academy, Hockey Academy, Table Tennis Academy, Kick-Boxing Academy, and Volleyball Academy. Check out our all-talented academies near your location according to your budget. Here you can compare and find the Best Academy at your nearest location. Find the best academy and Give your best.<br />
                Mission – We provide the best & selected academies to students. Those academies are known for their training performance. From these academies, students can take proper training with their learning attitude. Those academies who understand students’ dedication, passion, and hard work<br /></p>




            {/* <crad></crad> */}
            <div className='d-flex m-5 justify-content-around'>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                    <h2>Guiding purpose</h2>
                    <img width='250px' height='250px' src="https://jase.ac.in/assets/images/strategic-synergy.jpg"/>
                        <p className="card-text mt-5">We are committed to creating a positive and inclusive learning environment at Kovai Sports Events.</p>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                 <h2>Vission</h2>
                    <img width='200px' src="https://velammalsportsacademy.in/wp-content/uploads/2023/01/velammal-mission3-1.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">To empower students with a holistic education that blends academic excellence and high-quality sports training. Our vision is to cultivate well-educated, skilled, and accomplished individuals who will leave a lasting, positive imprint on society.</p>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                <h2>Mission</h2>
                    <img width='200px' src="https://velammalsportsacademy.in/wp-content/uploads/2023/01/laptop_collage-velammal-1.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Our mission revolves around establishing a world-class sports academy within our esteemed institution, emphasising the great  importance of educating our students. Through the highest standards of academic excellence and sports training, we aim to empower our students to shine brightly in both their scholastic and athletic endeavours.</p>
                    </div>
                </div>
            </div>


            {/* <list></list> */}
            <div className='about-ul'>
                <h3 className='types'>WE DEAL IN THESE SPORTS</h3>
                <ul className='li'>

                    <li>Cricket</li>
                    <li>Football</li>
                    <li>Volleyball</li>
                    <li>Hockey</li>
                    <li>Marathon</li>
                    <li>Badminton</li>
                    <li>Tennis</li>
                    <li>Basketball</li>
                    <li>Kickboxing</li>

                </ul>
            </div>



        </div>
    )
}