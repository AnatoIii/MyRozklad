import React, { ChangeEvent } from 'react';
import { SingleValue } from 'react-select';
import { UserDataService } from '../services/userDataService';
import styles from './styles.module.scss';
import Select from 'react-select';
import subjects, { ISubject } from '../services/subjectsInfo';
import subjectSchedule, { Days, Weeks } from '../services/rozklad';
import Subject from './Subject';
import moment from 'moment';

const SubjectsList: React.FC = () => {
    const dataService = new UserDataService();
    const group = dataService.getGroup();
    const selectableItems = dataService.getSubjects();

    const groupSubjects = subjects.find(el => el.name === group.value)?.list || []; 
    const userSubjects = groupSubjects.filter(el => !el.isSelectable || selectableItems.includes(el.name));
    const schedule = subjectSchedule.find(el => el.groupName === group.value)?.pairs || [];

    const days = [Days.Monday, Days.Tuesday, Days.Wednesday, Days.Thursday, Days.Friday];
    const pairs = [1, 2, 3, 4, 5, 6];
    
    const nearestActive = (day: Days, pair: number, week: Weeks) => {
        const currentDate = moment();

        if (currentDate.week() % 2 !== (week - 1))
        {
            return false;
        }
        const currentDay = new Date().getDay();
        const selectedDay = days.findIndex(el => el === day) + 1;

        const nextDay = currentDate.hours() > 20 ? currentDay + 1 : currentDay; 
        const noWeekend = nextDay > 5 ? 1 : nextDay;
        if (noWeekend !== selectedDay) {
            return false;
        } 

        if (noWeekend !== currentDay && pair !== 1) {
            return false;
        }

        const hours = currentDate.hours();
        if (hours > 18 && pair === 6) {
            return true;
        }
        else if (hours >= 16 && hours < 18 && pair === 5) {
            return true;
        }
        else if (hours >= 14 && hours < 16 && pair === 4) {
            return true;
        }
        else if (hours >= 12 && hours < 14 && pair === 3) {
            return true;
        }
        else if (hours >= 10 && hours < 12 && pair === 2) {
            return true;
        }

        return false;
    }

    return (
        <div className={styles.scheduleBlock}>
            <div className={styles.first}>
                <div className={styles.weekName}>Week 1</div>
                <div className={styles.weekData}>
                    <div></div>
                    {days.map(el => <div className={styles.dayName}>{el.toString()}</div>)}
                    {pairs.map(pair => { // Line
                        const pairsList = schedule.filter(el => (el.week === Weeks.First || el.week === Weeks.Both) && el.pair === pair);

                        return (
                            <>
                                <div className={styles.pairNumber}>{pair}</div>
                                {days.map(day => { // Pair
                                    const scheduleInPair = pairsList.filter(el => el.day === day);

                                    return (
                                        <div className={`${styles.pair} ${nearestActive(day, pair, Weeks.First) ? styles.active : null}`}>
                                            {scheduleInPair.map(sip => { // Pair object
                                                const subjectInPair = userSubjects.find(el => el.name === sip.name);

                                                return (
                                                    <Subject subject={subjectInPair} />
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </>
                        )}
                    )}
                </div>
            </div>
            <div className={styles.second}>
                <div className={styles.weekName}>Week 2</div>
                <div className={styles.weekData}>
                    <div></div>
                    {days.map(el => <div className={styles.dayName}>{el.toString()}</div>)}
                    {pairs.map(pair => { // Line
                        const pairsList = schedule.filter(el => (el.week === Weeks.Second || el.week === Weeks.Both) && el.pair === pair);

                        return (
                            <>
                                <div className={styles.pairNumber}>{pair}</div>
                                {days.map(day => { // Pair
                                    const scheduleInPair = pairsList.filter(el => el.day === day);

                                    return (
                                        <div className={`${styles.pair} ${nearestActive(day, pair, Weeks.Second) ? styles.active : null}`}>
                                            {scheduleInPair.map(sip => { // Pair object
                                                const subjectInPair = userSubjects.find(el => el.name === sip.name);

                                                return (
                                                    <Subject subject={subjectInPair} />
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </>
                        )}
                    )}
                </div>
            </div>
        </div>
    );
}

export default SubjectsList;