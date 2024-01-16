import React from 'react'
import JobDuties from './JobDuties';

const JobInfo = ({ jobs, currentItem }) => {
    const {company, desc, id, order, title, dates, duties} = jobs[currentItem];
    return (
        <article className='job-info'>
            <h3>{title}</h3>
            <span className='job-company'>{company}</span>
            <p className='job-date'>{dates}</p>
            <JobDuties duties={duties} index={id}/>

            

        </article>
    )
}

export default JobInfo
