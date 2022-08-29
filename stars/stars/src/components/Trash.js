import { FaTrash } from "react-icons/fa";

import '../scss/components/Trash.scss'

function Trash() {
    return (
        <div className="trash">
            <button>
                <FaTrash />
            </button>
        </div>
    )
}

export default Trash;