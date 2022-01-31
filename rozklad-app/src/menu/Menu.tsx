import React, { ChangeEvent } from 'react';
import { SingleValue } from 'react-select';
import { UserDataService } from '../services/userDataService';
import styles from './styles.module.scss';
import Select from 'react-select';

const options = [
    { value: "IC11mn", label: "IC-11mn" },
    { value: "IA11mn", label: "IA-11mn" }
]

interface IProps {
    onGroupChange: () => void;
}

const Menu: React.FC<IProps> = ({ onGroupChange }: IProps) => {
    const userDataService = new UserDataService();
    let currentGroup = userDataService.getGroup() ?? options[0];

    const toggleGroupChange = (selectedOption: any) => {
        userDataService.saveGroup(selectedOption);
        currentGroup = selectedOption;
        onGroupChange();
    }

    return (
        <div className={styles.header}>
            <div className={styles.rozklad}>My rozklad</div>
            <div className={styles.select}>
                <Select defaultValue={currentGroup} options={options} onChange={toggleGroupChange} />
            </div>
        </div>
    );
}

export default Menu;