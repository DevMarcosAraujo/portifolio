import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Conteiner.css"

function Conteiner() {
    return (
        <div className="container">
            <div className="image-container">
                <div className="image-placeholder">
                  <img src="./../img/1.jpeg" alt="" />
                    <div className="content">
                        <h2>Marcos Araújo</h2>
                <p> Dev Full-Stack </p>
                <div className="social-icons">
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-github"></i>
                </div>  
                <div className='infor'> 
                <p>TECNOLOGIAS</p>
                    

                </div>  
            </div>
                </div>
            </div>
           
        </div>
    )
}
export default Conteiner ;