
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css'; 

const Footer = () => {
    return (
        <div className="bg-primary p-3 d-flex justify-content-center gap-3">
            <a
                href="https://www.linkedin.com/in/bud-triplett-6bb4a927a/"
                onClick={() => {
                    console.log("Navigating to LinkedIn");
                }}
                className="bi bi-linkedin text-white fs-4"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
            ></a>

            <a
                href="https://github.com/budtriplett"
                onClick={() => {
                    console.log("Navigating to GitHub");
                }}
                className="bi bi-github text-white fs-4"
                target="_blank" 
                rel="noopener noreferrer" 
                role="button"
            ></a>

            <a
                href="mailto:bud.triplett@yahoo.com"
                onClick={() => {
                    console.log("Opening email client");
                }}
                className="bi bi-envelope text-white fs-4"
                target="_blank" 
                rel="noopener noreferrer" 
                role="button"
            ></a>
        </div>
    );
};

export default Footer;
