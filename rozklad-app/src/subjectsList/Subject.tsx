import React, { ChangeEvent } from 'react';
import { SingleValue } from 'react-select';
import { UserDataService } from '../services/userDataService';
import styles from './styles.module.scss';
import Select from 'react-select';
import subjects, { ISubject, LessonType } from '../services/subjectsInfo';

interface IProps {
    subject: ISubject | undefined;
}

const Subject: React.FC<IProps> = ({ subject }: IProps) => {
    if (subject === undefined) {
        return null;
    }

    const classByType = (type: LessonType) => {
        switch (type)
        {
            case LessonType.Lab:
                return styles.lab;
            case LessonType.Lecture:
                return styles.lecture;
            case LessonType.Practical:
                return styles.practical;
        }
    } 
    
    return (
        <div className={`${styles.subject} ${classByType(subject.type)}`} key={subject.name}>
            <div className={styles.subjectName}>{subject.viewName}</div>
            <div className={styles.lecturer}>{subject.lecturer}</div>
            <div className={styles.links}>
                {subject.links?.map(el => (
                    <div className={styles.link} key={el.name}><a href={el.link}>{el.name}</a></div>
                ))}
            </div>
        </div>
    );
}

export default Subject;