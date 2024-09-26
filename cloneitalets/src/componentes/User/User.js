import './User.css';
import Users from '../Users/Users';

const User = () =>{
    return(
        <div className = 'CardUser'>
            <Users nome = 'Jack Ingram' email= 'dabokal@bas.ye' img = 'https://img.icons8.com/ios-glyphs/30/user--v1.png'/>
        </div>   
    );
}

export default User;