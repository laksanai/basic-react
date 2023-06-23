import {useState} from 'react'
import './App.css';

function App() {

    //State
    const [note, setNote] = useState({
        content:'', author:''
    });
    const [allNote, setAllNote] = useState([]);


    //Function
    function onNoteValueChange(event) {
        const { name, value } = event.target;
        setNote((prevNote)=>{
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function onNoteSubmit(event) {
        event.preventDefault();

        setAllNote((prevAllNote) =>{

            const newNote = { ...note };
            newNote.id = Date.now().toString();
            return [newNote, ...prevAllNote];
        });
    }

    //Elements
    const noteElements = allNote.map((theNote)=>{
        return (
            <div key={theNote.id} className='app-note'>
                <p>{theNote.content}</p>
                <h5>{theNote.author}</h5>
            </div>
        )
    });


    return (
        <section className="app-section">
            <div className='app-container'>
                <form onSubmit={onNoteSubmit}>
                    <h3>สักหน่อยไหมล่ะ</h3>
                    <p>
                        <textarea
                            rows="3"
                            placeholder="บันทึกความในใจ"
                            name='content'
                            value={note.content}
                            onChange={onNoteValueChange}
                            
                        />
                    </p>
                    <p>
                        <input 
                            type="text"
                            placeholder="ลงชื่อ"
                            name='author'
                            value={note.author}
                            onChange={onNoteValueChange}
                        />
                    </p>
                    <p>
                        <button type='submit'>เพิ่มข้อมูล</button>
                    </p>
                </form>
                <div className='app-notes'>
                    {noteElements}
                </div>
            </div>
        </section>
    );
}

export default App;
