import {useState} from 'react'
import './App.css';

function App() {

    const [noteContent, setNoteContent] = useState('')
    const [noteAuthor, setNoteAuthor] = useState('')


    return (
        <section className="app-section">
            <div className='app-container'>
                <h3>สักหน่อยไหมล่ะ</h3>
                <p>
                    <input 
                        type="text"
                        placeholder="บันทึกความในใจ"
                        value={noteContent}
                        onChange={(event)=>{setNoteContent(event.target.value)}}
                    />
                </p>
                <p>
                    <input 
                        type="text"
                        placeholder="ลงชื่อ"
                        value={noteAuthor}
                        onChange={(event)=>{setNoteAuthor(event.target.value)}}
                    />
                </p>

            </div>
        </section>
    );
}

export default App;
