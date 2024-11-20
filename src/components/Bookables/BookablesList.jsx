import static1 from '../../static.json';
import {useState} from "react";

const BookablesList = () => {
    const bookables = static1.bookables;
    const group = "Rooms";
    const bookablesInGroup = bookables.filter(b => b.group === group);
    const [bookableIndex, setBookableIndex] = useState(1);
    return (
        <ul className={"bookables items-list-nav"}>
            {bookablesInGroup.map((b, i) => (
                <li key={b.id} className={i === bookableIndex ? "selected" : null}>
                    <button className={"btn"} onClick={() => setBookableIndex(i)}>
                        {b.title}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default BookablesList;