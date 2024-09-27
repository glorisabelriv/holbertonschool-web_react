interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTask(): string;
};

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
};

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffe a break"
    }

    workDirectorTask(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work"
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

function isDirector(employee: Teacher | Director): boolean {
    return employee instanceof Director;
}

function executeWork(employee: Teacher | Director): void{
    if (employee instanceof Director) {
        console.log(employee.workDirectorTask());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return "Teaching Math";
    }
    else if (todayClass === 'History') {
        return 'Teaching History';
    }
}

let d1: Director = new Director();
let t1: Teacher = new Teacher();

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

console.log(teachClass('Math'));
console.log(teachClass('History'));

console.log(createEmployee(200));

console.log(createEmployee(1000));

console.log(createEmployee('$500'));
