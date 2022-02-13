import React, { ChangeEvent } from 'react';
import { SingleValue } from 'react-select';
import { UserDataService } from '../services/userDataService';
import styles from './styles.module.scss';
import Select from 'react-select';
import subjects, { ISubject, LessonType } from '../services/subjectsInfo';

interface IProps {
    subjectInfo: ISubject | undefined;
    subjectData: any;
    type: LessonType;
}

const Subject: React.FC<IProps> = ({ subjectData, subjectInfo, type }: IProps) => {
    if (subjectData === undefined || subjectInfo === undefined) {
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

    const isEmail = (name: string) => {
        return name.toLowerCase().replaceAll(/-/g, '') === 'email';
    }
    
    return (
        <div className={`${styles.subject} ${classByType(type)}`} key={subjectInfo.name}>
            <div className={styles.subjectName}>{subjectData.viewName}</div>
            <div className={styles.lecturer}>{subjectInfo.lecturer}</div>
            <div className={styles.links}>
                {subjectInfo.links?.map(el => (
                    <div className={styles.link} key={el.name}>
                        {isEmail(el.name)
                            ? (
                                <span className={styles.textlink}>{el.link}</span>
                            )
                            : (
                                <a href={el.link} target="_blank" rel="noreferrer noopener">{el.name}</a>
                            )}
                        </div>
                ))}
            </div>
        </div>
    );
}

export default Subject;