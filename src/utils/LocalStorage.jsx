
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employe1@example.com",
    password: "123",
    tasks: [
      {
        title: "Update Report",
        description: "Update the quarterly sales report.",
        date: "2024-10-22",
        category: "Reporting",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team Meeting",
        description: "Attend the team meeting to discuss project progress.",
        date: "2024-10-21",
        category: "Meetings",
        active: false,
        new_task: false,
        completed: true,
        failed: false,
      },
      {
        title: "Client Follow-up",
        description: "Follow up with Client X regarding the proposal.",
        date: "2024-10-23",
        category: "Client Relations",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumber: {
      active: 2,
      new_task: 2,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Inventory Check",
        description: "Check inventory levels for product Y.",
        date: "2024-10-21",
        category: "Inventory",
        active: true,
        new_task: false,
        completed: true,
        failed: false,
      },
      {
        title: "System Update",
        description:
          "Update the internal software system to the latest version.",
        date: "2024-10-22",
        category: "IT",
        active: false,
        new_task: false,
        completed: false,
        failed: true,
      },
      {
        title: "Prepare Presentation",
        description: "Prepare the presentation for the upcoming conference.",
        date: "2024-10-24",
        category: "Presentations",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Submit Budget Plan",
        description: "Submit the budget plan for Q1.",
        date: "2024-10-25",
        category: "Finance",
        active: true,
        new_task: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumber: {
      active: 3,
      new_task: 1,
      completed: 2,
      failed: 1,
    },
  },
  {
    id: 3,
    firstName: "Vihaan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Customer Feedback",
        description: "Analyze customer feedback for recent product launch.",
        date: "2024-10-21",
        category: "Customer Service",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Marketing Strategy",
        description: "Develop a marketing strategy for the next quarter.",
        date: "2024-10-26",
        category: "Marketing",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Website Maintenance",
        description: "Perform routine maintenance on the company website.",
        date: "2024-10-22",
        category: "IT",
        active: false,
        new_task: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumber: {
      active: 2,
      new_task: 2,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstName: "Ananya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Project Deadline",
        description: "Meet the deadline for the ongoing project.",
        date: "2024-10-22",
        category: "Project Management",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client Presentation",
        description: "Present the project updates to Client Z.",
        date: "2024-10-24",
        category: "Client Relations",
        active: false,
        new_task: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumber: {
      active: 1,
      new_task: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Kavya",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Security Audit",
        description: "Conduct a security audit of the internal systems.",
        date: "2024-10-23",
        category: "IT",
        active: true,
        new_task: false,
        completed: true,
        failed: false,
      },
      {
        title: "Training Session",
        description: "Attend the cybersecurity training session.",
        date: "2024-10-25",
        category: "Training",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Review Contracts",
        description: "Review contracts for the new vendors.",
        date: "2024-10-26",
        category: "Legal",
        active: false,
        new_task: false,
        completed: false,
        failed: true,
      },
    ],
    taskNumber: {
      active: 2,
      new_task: 1,
      completed: 1,
      failed: 1,
    },
  },
];

const admin = [
  {
    id: 1,
    firstName: "Harsh",
    email: 'h@g.com',
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
