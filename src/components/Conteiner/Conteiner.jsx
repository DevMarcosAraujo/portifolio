import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Conteiner.css"
function Conteiner() {
    return (
        <div className="container">
            <div className="image-container">
                <div className="image-placeholder">
                    <img src="../../../img/1.jpeg" alt="" />
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
                <h3>Data de nascimento</h3> 
                <p>23 de maio de 1991</p>
                <h3>Naturalidade</h3>
                <p>Brasileiro</p>
                <h3>Carteira de motorista</h3>
                <p>AB</p>
                </div>  
            </div>
                </div>
            </div>
           
        </div>
    )
}
export default Conteiner ;