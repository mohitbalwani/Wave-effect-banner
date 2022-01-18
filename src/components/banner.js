import "./banner.css";
import bg from "../assets/bg.png";
import side from "../assets/side.png";

function Banner(){
    return(
        <div>
        <section>
            <div className="content">
                <h1>Wave Banner</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum incidunt illum adipisci alias qui possimus modi quas animi dicta voluptate beatae perspiciatis ipsum, inventore quidem dolorum recusandae iure in quos accusantium similique, nulla voluptatem repellat. Ullam quisquam recusandae libero neque repellendus rem eligendi optio soluta iusto, nobis exercitationem perferendis nostrum minima accusamus alias officiis cum ipsum incidunt velit eum!</p>
            </div>
            <img src={side} alt="girl with long hairs" />
            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,0L48,5.3C96,11,192,21,288,58.7C384,96,480,160,576,154.7C672,149,768,75,864,74.7C960,75,1056,149,1152,165.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </section>
        </div>
    );
}

export default Banner;