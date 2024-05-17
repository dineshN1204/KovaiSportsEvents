import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

export default function AddEvents() {
    const [eventName, setEventName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    
    const handleAddEvents = (e) => {
        e.preventDefault() //to prevent the page reloading when submitting the form
        if (eventName && category && description !== "") {
            axios.post(`http://localhost:3001/events/post`, {
                eventName, description, category
            })
                .then(res => { console.log(res) })
                .catch(err => { console.log(err) })
        } else alert('Please fill all the required fields')
        setEventName('');
        setDescription('');
        setCategory('')
        inputRef.current.focus()// when page reloading it focus to the selected inpt field
    }
    return (

        <div>
            <img className='add-event-img' src='https://images5.alphacoders.com/109/1093585.jpg'></img>
            <div className='add-event-form-div'>
                <form className='add-event-form' onSubmit={handleAddEvents}>
                    <h2 className=''>Add Events</h2>
                    <label htmlFor='event-name'>Event name:</label><br/>
                    <input id='event-name' className='text inputs mb-2' placeholder='Event Name' style={{ textTransform: 'capitalize' }} ref={inputRef} type='text' value={eventName} onChange={(e) => { setEventName(e.target.value) }} required /><br />
                    <label htmlFor='text-description'>Description:</label><br/>
                    <textarea id='text-description' className='text inputs mb-2' placeholder='Event Description' style={{ textTransform: 'capitalize' }} value={description} onChange={(e) => { setDescription(e.target.value) }} /><br />
                    <label htmlFor='event-select'>Category:</label><br/>
                    <select id='event-select' className='inputs' value={category} onChange={(e) => { setCategory(e.target.value) }} aria-required='true'>
                        <option value='select-an-option'>Select an option</option>
                        <option value='tennis'>Tennis</option>
                        <option value='cricket'>Cricket</option>
                        <option value='football'>Football</option>
                        <option value='hockey'>Hockey</option>
                        <option value='marathon'>Marathon</option>
                        <option value='badminton'>Badminton</option>
                        <option value='athletics'>Athletics</option>
                        <option value='badminton'>Badminton</option>
                        <option value='kickboxing'>Kick-boxing</option>
                    </select><br />
                    <button className='btn-add-events' type='submit'>Add Events</button>
                </form>
            </div>
        </div>

    )
}