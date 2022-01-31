export class UserDataService {
    saveGroup(group: any) {
        localStorage.setItem('group', JSON.stringify(group));
    }
    getGroup(): { label: string; value: string; } {
        const group = localStorage.getItem('group')
        if (group === null) {
            return { label: "IC11-mn", value: "IC11mn" };
        }
        return JSON.parse(group);
    }

    saveSubjects(subjects: any[]) {
        localStorage.setItem('subjects', JSON.stringify(subjects));
    }
    getSubjects(): string[] {
        const subject = localStorage.getItem('subjects')
        if (subject === null) {
            return [];
        }
        return JSON.parse(subject);
    }
}