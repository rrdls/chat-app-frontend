import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteNote,
  loadNotes,
  selectNotes
} from '../global-states/slices/notesSlice'

const Notes = () => {
  const [selectedNote, setSelectedNote] = useState()
  const dispatch = useDispatch()
  const { notes } = useSelector(selectNotes)

  useEffect(() => {
    async function dispatchLoadNotes() {
      await dispatch(loadNotes())
    }
    dispatchLoadNotes()
  }, [dispatch])

  const renderNote = (note) => (
    <li key={note.id}>
      <strong>{note.title}</strong>
      <br />
      <span>{note.content}</span>
      <br />
      <button
        aria-label={`Delete note with title: ${note.title}`}
        onClick={() => dispatch(deleteNote(note.id))}
      >
        🗑️
      </button>
      <button
        onClick={() => setSelectedNote(note)}
        aria-label={`Edit note with title: ${note.title}`}
      >
        ✏️
      </button>
    </li>
  )

  return (
    <>
      <Head>
        <title>Next.js with Redux Toolkit | Notes App</title>
      </Head>
      <hr />
      <h3>All Notes</h3>
      <ul>{notes.map(renderNote)}</ul>
    </>
  )
}

export default Notes
