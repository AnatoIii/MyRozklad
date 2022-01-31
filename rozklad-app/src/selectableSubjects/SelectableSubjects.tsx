import React, { useState } from 'react';
import { UserDataService } from '../services/userDataService';
import styles from './styles.module.scss';
import subjects, { ISubject } from '../services/subjectsInfo';

const SelectableSubjects: React.FC = () => {

    const userDataService = new UserDataService();
    const group: string = userDataService.getGroup().value || "IC11mn";
    const selectableSubjects: ISubject[] = (subjects.find(el => el.name === group)?.list || []).filter((el: ISubject) => el.isSelectable).sort(function(a, b) { return a.viewName > b.viewName ? -1 : 1 });
    let selectedSubjects: string[] = userDataService.getSubjects() ?? [];
    
    const [checkboxes, setChecked] = useState(
        selectableSubjects.map(el => selectedSubjects.some(ss => el.name === ss))
    );

    const selectItem = (subject: string, index: number) => () => {
        const checked = selectedSubjects.find(el => el === subject) === undefined;

        const subjects = checked 
            ? [...selectedSubjects, subject]
            : selectedSubjects.filter(el => el !== subject);

        userDataService.saveSubjects(subjects);
        selectedSubjects = subjects;
        setChecked(checkboxes.map((el, i) => index === i ? !el : el));
    }

    return (
        <div className={styles.subjects}>
            <div className={styles.select}>Select your subjects</div>
            <div className={styles.list}>
                {selectableSubjects.map((el, index) => (
                    <div className={styles.checkbox} key={el.name} onClick={selectItem(el.name, index)}>
                        <input type="checkbox" checked={checkboxes[index]} onChange={selectItem(el.name, index)} />
                        {el.viewName}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SelectableSubjects;