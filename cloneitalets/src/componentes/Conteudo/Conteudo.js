import './Conteudo.css';

const Conteudo = () => {
    const conteudos = [
        {
            nome: 'Material complementar',
            indicador: '4 / 4'
        },
        {
            nome: 'Apresentação',
            indicador: '1 / 1'
        },
        {
            nome: 'Unidade 1 - Revisão JavaScritp para React',
            indicador: '8 / 8'
        },
        {
            nome: 'Unidade 2 - Começando com React',
            indicador: '7 / 7'
        },
        {
            nome: 'Unidade 3 - Componentes',
            indicador: '6 / 7'
        },
        {
            nome: 'Unidade 4 - Eventos e Estado',
            indicador: '0 / 6'
        }
    ];
        return (
            <div className="ContentCard">
                {conteudos.map((conteudo, index) => (
                    <div key={index} className="CardNav">
                        <p className="nome">{conteudo.nome}</p>
                        <p className="indicador">{conteudo.indicador}</p>
                    </div>
                ))}
            </div>
    );
};

export default Conteudo;