"use client";
import React, { useState } from 'react';
import { addCourse } from '../lib/actions';

type ListItem = {
    text: string;
};

type ImportantNote = {
    quote: string;
    list: ListItem[];
};

type Resource = {
    icon: string;
    text: string;
    link: string;
};

type Week = {
    weekName: string;
    resources: Resource[];
};

const AddCourseForm: React.FC = () => {
    const [importantNotes, setImportantNotes] = useState<ImportantNote[]>([{ quote: '', list: [{ text: '' }] }]);
    const [weeks, setWeeks] = useState<Week[]>([{ weekName: '', resources: [{ icon: '', text: '', link: '' }] }]);

    const addImportantNote = () => {
        setImportantNotes([...importantNotes, { quote: '', list: [{ text: '' }] }]);
    };

    const handleImportantNoteChange = (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        const newNotes = [...importantNotes];
        newNotes[index] = { ...newNotes[index], [name]: value };
        setImportantNotes(newNotes);
    };

    const handleListItemChange = (noteIndex: number, itemIndex: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const newNotes = [...importantNotes];
        newNotes[noteIndex].list[itemIndex] = { ...newNotes[noteIndex].list[itemIndex], [name]: value };
        setImportantNotes(newNotes);
    };

    const addWeek = () => {
        setWeeks([...weeks, { weekName: '', resources: [{ icon: '', text: '', link: '' }] }]);
    };

    const handleWeekChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const newWeeks = [...weeks];
        newWeeks[index] = { ...newWeeks[index], [name]: value };
        setWeeks(newWeeks);
    };

    const handleResourceChange = (weekIndex: number, resourceIndex: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const newWeeks = [...weeks];
        newWeeks[weekIndex].resources[resourceIndex] = { ...newWeeks[weekIndex].resources[resourceIndex], [name]: value };
        setWeeks(newWeeks);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        formData.set('importantNotes', JSON.stringify(importantNotes));
        formData.set('weeks', JSON.stringify(weeks));
        await addCourse(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 bg-gray-100 rounded-lg shadow-md">
            <div className="form-section flex flex-col gap-4 bg-slate-300 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Course Information</h3>
                <input type="text" name="courseName" placeholder="Course Name" className="p-2 border rounded" required />
                <input type="text" name="playlist" placeholder="Course Playlist" className="p-2 border rounded" required />
                <input type="text" name="playlist2" placeholder="Course Playlist 2" className="p-2 border rounded" />
                <input type="text" name="drive" placeholder="Course Drive Link" className="p-2 border rounded" />
            </div>
            
            <div className="form-section my-4">
                <h3 className="text-lg font-semibold">Important Notes</h3>
                <div id="importantNotes-container" className="space-y-4">
                    {importantNotes.map((note, noteIndex) => (
                        <div key={noteIndex} className="important-note-entry flex flex-col gap-2 p-4 bg-white border rounded-lg">
                            <textarea
                                name="quote"
                                placeholder="Quote"
                                rows={2}
                                className="p-2 border rounded w-full"
                                value={note.quote}
                                onChange={(e) => handleImportantNoteChange(noteIndex, e)}
                            ></textarea>
                            {note.list.map((item, itemIndex) => (
                                <input
                                    key={itemIndex}
                                    type="text"
                                    name="text"
                                    placeholder="List Item Text"
                                    className="p-2 border rounded"
                                    value={item.text}
                                    onChange={(e) => handleListItemChange(noteIndex, itemIndex, e)}
                                />
                            ))}
                        </div>
                    ))}
                </div>
                <button type="button" onClick={addImportantNote} className="mt-4 p-2 bg-blue-500 text-white rounded">
                    Add Another Important Note
                </button>
            </div>
            
            <div className="form-section my-4">
                <h3 className="text-lg font-semibold">Weeks</h3>
                <div id="weeks-container" className="space-y-4">
                    {weeks.map((week, weekIndex) => (
                        <div key={weekIndex} className="week-entry flex flex-col gap-2 p-4 bg-white border rounded-lg">
                            <input
                                type="text"
                                name="weekName"
                                placeholder="Week Name"
                                className="p-2 border rounded"
                                required
                                value={week.weekName}
                                onChange={(e) => handleWeekChange(weekIndex, e)}
                            />
                            {week.resources.map((resource, resourceIndex) => (
                                <div key={resourceIndex} className="flex flex-col gap-2">
                                    <input
                                        type="text"
                                        name="icon"
                                        placeholder="Resource Icon"
                                        className="p-2 border rounded"
                                        value={resource.icon}
                                        onChange={(e) => handleResourceChange(weekIndex, resourceIndex, e)}
                                    />
                                    <input
                                        type="text"
                                        name="text"
                                        placeholder="Resource Text"
                                        className="p-2 border rounded"
                                        value={resource.text}
                                        onChange={(e) => handleResourceChange(weekIndex, resourceIndex, e)}
                                    />
                                    <input
                                        type="text"
                                        name="link"
                                        placeholder="Resource Link"
                                        className="p-2 border rounded"
                                        value={resource.link}
                                        onChange={(e) => handleResourceChange(weekIndex, resourceIndex, e)}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <button type="button" onClick={addWeek} className="mt-4 p-2 bg-blue-500 text-white rounded">
                    Add Another Week
                </button>
            </div>
            
            <button type="submit" className="mt-4 p-2 bg-green-500 text-white rounded">
                Submit Course
            </button>
        </form>
    );
};

export default AddCourseForm;
