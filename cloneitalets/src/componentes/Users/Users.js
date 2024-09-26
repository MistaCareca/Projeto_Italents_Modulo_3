const Users = (props) => {
    return (
        <div className="users-container">
                <div className="user-card">
                    <img src={props.img} alt={props.nome} className="user-img"/>
                    <h2 className="user-name">{props.nome}</h2>
                    <p className="user-email">{props.email}</p>
                </div>
        </div>
    );
};

export default Users;