import React, { createContext, useState, useContext } from 'react';

// Create a context for the notes
const NotesContext = createContext();

// Create a provider component
export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);

    return (
        <NotesContext.Provider value={{ notes, setNotes }}>
            {children}
        </NotesContext.Provider>
    );
};

// Custom hook to use the NotesContext
export const useNotes = () => {
    return useContext(NotesContext);
};