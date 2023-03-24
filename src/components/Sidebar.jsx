import React from "react"

export default function Sidebar(props) {

    const noteElements = props.notes.map((note, index) => {
        const firstLine = note.body.split('\n')[0];
        return (

            <div key={note.id}>
                <div

                    className={`title ${note.id === props.currentNote.id ? "selected-note" : "unselected-note"
                        }`}
                    onClick={() => props.setCurrentNoteId(note.id)}
                >
                    <h4 className="text-snippet">{firstLine}</h4>
                    <button
                        className="delete-btn"
                        onClick={(event) => props.deleteNote(event, note.id)}
                    >
                        <i className="gg-trash trash-icon"></i>
                    </button>
                </div>
            </div>
        )
    })

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <div className="wrapper nine">
                    <div>
                        <h3 className="rotate">
                            <span>N</span>
                            <span>O</span>
                            <span>T</span>
                            <span>E</span>
                            <span>S</span>
                            <span className="a">A</span>
                            <span className="a">P</span>
                            <span className="a">P</span>
                        </h3>
                    </div>
                </div>
                <button className="new-note" onClick={props.newNote}>+ ADD NOTE</button>
            </div>
            {noteElements}
        </section >
    )
}