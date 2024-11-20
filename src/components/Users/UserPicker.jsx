import static1 from '../../static.json';

const UserPicker = () => {
    const users = static1.users;
    return (
        <select>
            {users.map((e) => (
                <option key={e.id}>{e.name}</option>
            ))}
        </select>
    );
}

export default UserPicker;