import './CardNav.css'

const CardNav = () =>{
    const funcionalidades = [
        {
            icon: 'https://img.icons8.com/fluency-systems-filled/50/home.png',
            nome:'Início' 
        },
        {
            icon: 'https://img.icons8.com/material/24/bell--v1.png',
            nome:'Avisos' 
        },
        {
            icon: 'https://img.icons8.com/material-outlined/24/books--v2.png',
            nome:'Módulos' 
        },
        {
            icon: 'https://img.icons8.com/material-outlined/24/google-docs.png',
            nome:'Documentos' 
        },
        {
            icon: 'https://img.icons8.com/fluency-systems-filled/50/speech-bubble-with-dots.png',
            nome:'Atendimentos' 
        },
        {
            icon: 'https://img.icons8.com/ios-filled/50/contract.png',
            nome:'Certificados' 
        },
        {
            icon: 'https://img.icons8.com/glyph-neue/64/smartphone.png',
            nome:'Aplicativo' 
        }
    ];

    return(
        <div className = "CardNav">
          {funcionalidades.map((funcionalidade, index) =>(
            <button key={index} className = "CardNav">
                <img className = "icon" src ={funcionalidade .icon} alt = {funcionalidade .nome}/>
                <span className = "Nome">{funcionalidade .nome}</span>
            </button>
        ))}
        </div>
    );
};

export default CardNav;