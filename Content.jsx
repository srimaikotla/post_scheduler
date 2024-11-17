import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './content.css';

function Content() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [minDate, setMinDate] = useState('');

    useEffect(() => {
        const now = new Date();
        const isoString = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
            .toISOString()
            .slice(0, 16); // Convert to ISO format and remove seconds/milliseconds
        setMinDate(isoString);
    }, []);

    function submit(data) {
        console.log(data);
    }

    return (
        <div className="post">
            <h1>You wanna Post</h1>
            <form onSubmit={handleSubmit(submit)} className="form">
                <label htmlFor="describe">Write Something you want to post</label>
                <input
                    type="text"
                    name="describe"
                    id="describe"
                    {...register('describe', { maxLength: 100 })}
                    placeholder="Less than 100 letters"
                />
                {errors.describe && <span className="text-danger">This field is incorrect</span>}

                <label htmlFor="image">Want to add File</label>
                <input type="file" name="image" id="image" {...register('image')} placeholder="Image" />

                <label htmlFor="date">Schedule a date</label>
                <input
                    type="datetime-local"
                    min={minDate}
                    id="date"
                    {...register('date', {
                        required: 'Date is required',
                        validate: (value) => {
                            const selectedDate = new Date(value);
                            const now = new Date();
                            return selectedDate > now || 'Please select a future date';
                        },
                    })}
                />
                {errors.date && <span className="text-danger">{errors.date.message}</span>}

                <button type="submit">Post</button>
            </form>
        </div>
    );
}

export default Content;
