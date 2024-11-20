import static1 from '../../static.json';
import {useState} from "react";

const UsersList = () => {
    const users = static1.users;
    const [userId, setUserId] = useState(1);

    function onSelectedIdx(e) {
        setUserId(e.key);
    }

    return (
        <main className={UsersList}>
            <select name="" id="">
                {users.map((e, i) => (
                    <option value={e.name} key={i} onSelect={onSelectedIdx}>{e.name}</option>
                ))}
            </select>
            <section>
                {users.filter((e) => userId === e.id).map(e => (
                    <article>
                        {e.id}<br/>
                        {e.name}<br/>
                        <img src={e.img} alt="img"/><br/>
                        {e.title}<br/>
                        {e.notes}<br/>
                    </article>
                ))}
            </section>
        </main>
    );
}

export default UsersList;