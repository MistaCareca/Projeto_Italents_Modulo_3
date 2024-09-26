import './Forms.css';
import Button from './componentes-Forms/Button/Button';
import Inputs from './componentes-Forms/Inputs/Inputs';

const Forms = () =>{
    return(
        <div className = 'Formulario'>
            <h2 className = 'titulo'>Alguma Duvida?</h2>
            <p>Entre em contato</p>
            <Inputs type = 'text' name = 'nome' holder = 'Nome'></Inputs>
            <Inputs type = 'email' name = 'email' holder = 'E-mail'></Inputs>
            <Button type ='submit' name = 'Enviar'/>
        </div>
    );
}

export default Forms;