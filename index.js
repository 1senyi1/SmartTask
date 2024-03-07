// Welcome to SmartTask!
// SmartTask is an intelligent task management system designed to streamline your workflow and boost productivity.
// Whether you're a busy professional, a student, or a freelancer,
// SmartTask provides an intuitive platform to organize tasks, set deadlines, and collaborate with team members.
// Say goodbye to chaos and hello to efficiency with SmartTask!

// Sample code to demonstrate basic functionality of SmartTask

// Define a Task class to represent tasks in SmartTask
class Task {
    constructor(title, deadline, assignedTo) {
        this.title = title;
        this.deadline = deadline;
        this.assignedTo = assignedTo;
        this.completed = false;
    }

    markAsCompleted() {
        this.completed = true;
    }
}

// Define a TaskManager class to manage tasks in SmartTask
class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(title, deadline, assignedTo) {
        const task = new Task(title, deadline, assignedTo);
        this.tasks.push(task);
    }

    displayTasks() {
        this.tasks.forEach(task => {
            console.log(`Title: ${task.title}, Deadline: ${task.deadline}, Assigned To: ${task.assignedTo}`);
        });
    }
}

// Example usage of SmartTask functionality
const taskManager = new TaskManager();
taskManager.addTask('Complete project proposal', '2024-03-15', 'John Doe');
taskManager.addTask('Prepare presentation slides', '2024-03-20', 'Jane Smith');

// Display tasks in the task manager
console.log('Tasks in SmartTask:');
taskManager.displayTasks();
