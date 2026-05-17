// Sample personal tasks data with simplified priority system
const samplePersonalTasks = [
  {
    id: 1,
    title: "Complete online coding course",
    description: "Finish JavaScript fundamentals course on learning platform",
    priority: "medium",
    status: "in-progress",
    dueDate: "2025-10-20",
    comments: ["Completed modules 1-3", "Need to practice arrays and objects"],
    createdDate: "2025-10-01",
    completedDate: null,
    category: "Learning & Development"
  },
  {
    id: 2,
    title: "Prepare for job interview",
    description: "Research company and practice technical questions",
    priority: "high",
    status: "to-do",
    dueDate: "2025-10-12",
    comments: ["Scheduled for next Friday", "Review data structures"],
    createdDate: "2025-10-05",
    completedDate: null,
    category: "Work & Career"
  },
  {
    id: 3,
    title: "Update personal website",
    description: "Add recent projects and update contact information",
    priority: "medium",
    status: "to-do",
    dueDate: "2025-10-25",
    comments: [],
    createdDate: "2025-10-03",
    completedDate: null,
    category: "Personal Projects"
  },
  {
    id: 4,
    title: "Plan weekend hiking trip",
    description: "Research trails and book accommodation",
    priority: "low",
    status: "to-do",
    dueDate: "2025-10-15",
    comments: ["Check weather forecast", "Invite friends"],
    createdDate: "2025-10-02",
    completedDate: null,
    category: "Hobbies & Recreation"
  },
  {
    id: 5,
    title: "Complete tax documentation",
    description: "Gather receipts and fill out forms",
    priority: "high",
    status: "completed",
    dueDate: "2025-10-08",
    comments: ["All documents collected", "Submitted online"],
    createdDate: "2025-09-20",
    completedDate: "2025-10-07",
    category: "Finance & Administration"
  },
  {
    id: 6,
    title: "Read productivity book",
    description: "Finish reading 'Getting Things Done' by David Allen",
    priority: "low",
    status: "in-progress",
    dueDate: "2025-11-01",
    comments: ["Halfway through", "Taking good notes"],
    createdDate: "2025-09-15",
    completedDate: null,
    category: "Learning & Development"
  },
  {
    id: 7,
    title: "Gym membership renewal",
    description: "Renew annual gym membership before expiration",
    priority: "medium",
    status: "completed",
    dueDate: "2025-10-14",
    comments: ["Found discount offer", "Renewed online"],
    createdDate: "2025-10-08",
    completedDate: "2025-10-09",
    category: "Health & Fitness"
  },
  {
    id: 8,
    title: "Organize digital photos",
    description: "Sort and backup family photos from last year",
    priority: "low",
    status: "to-do",
    dueDate: "2025-10-30",
    comments: [],
    createdDate: "2025-10-01",
    completedDate: null,
    category: "Personal Projects"
  },
  {
    id: 9,
    title: "Learn new programming language",
    description: "Start Python course for data analysis",
    priority: "high",
    status: "in-progress",
    dueDate: "2025-11-15",
    comments: ["Installed Python environment", "Started with basics"],
    createdDate: "2025-09-25",
    completedDate: null,
    category: "Learning & Development"
  },
  {
    id: 10,
    title: "Plan birthday party",
    description: "Organize surprise party for friend",
    priority: "medium",
    status: "completed",
    dueDate: "2025-10-05",
    comments: ["Venue booked", "Invitations sent", "Party was successful!"],
    createdDate: "2025-09-20",
    completedDate: "2025-10-05",
    category: "Hobbies & Recreation"
  },
  {
    id: 11,
    title: "Submit quarterly report",
    description: "Prepare and submit Q3 performance report",
    priority: "high",
    status: "to-do",
    dueDate: "2025-10-11",
    comments: ["Data collected", "Need to finalize charts"],
    createdDate: "2025-10-05",
    completedDate: null,
    category: "Work & Career"
  },
  {
    id: 12,
    title: "Doctor appointment",
    description: "Annual health checkup appointment",
    priority: "medium",
    status: "to-do",
    dueDate: "2025-10-18",
    comments: ["Scheduled for 2 PM"],
    createdDate: "2025-10-01",
    completedDate: null,
    category: "Health & Fitness"
  },
  {
    id: 13,
    title: "Buy Halloween costume",
    description: "Get costume for office Halloween party",
    priority: "low",
    status: "to-do",
    dueDate: "2025-10-28",
    comments: [],
    createdDate: "2025-10-08",
    completedDate: null,
    category: "Hobbies & Recreation"
  },
  {
    id: 14,
    title: "Pay monthly bills",
    description: "Pay utilities, rent, and credit card bills",
    priority: "high",
    status: "to-do",
    dueDate: "2025-10-10",
    comments: ["Rent due", "Electricity bill arrived"],
    createdDate: "2025-10-08",
    completedDate: null,
    category: "Finance & Administration"
  },
  {
    id: 15,
    title: "New Year resolution planning",
    description: "Plan goals and resolutions for next year",
    priority: "medium",
    status: "to-do",
    dueDate: "2025-12-31",
    comments: [],
    createdDate: "2025-10-09",
    completedDate: null,
    category: "Personal Projects"
  },
  {
    id: 16,
    title: "Summer vacation planning",
    description: "Research and book summer vacation destinations",
    priority: "low",
    status: "to-do",
    dueDate: "2025-06-15",
    comments: [],
    createdDate: "2025-10-09",
    completedDate: null,
    category: "Hobbies & Recreation"
  },
  {
    id: 17,
    title: "Complete project milestone",
    description: "Finish Q1 project deliverables",
    priority: "high",
    status: "to-do",
    dueDate: "2025-03-30",
    comments: ["Started initial research", "Need team coordination"],
    createdDate: "2025-10-09",
    completedDate: null,
    category: "Work & Career"
  }
];

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const personalCategories = [
  "Work & Career",
  "Learning & Development", 
  "Health & Fitness",
  "Personal Projects",
  "Hobbies & Recreation",
  "Finance & Administration"
];

// Application state
let currentUser = null;
let tasks = [...samplePersonalTasks];
let currentPage = 'dashboard';
let currentTaskView = 'list';
let editingTask = null;
let searchTerm = '';
let statusFilter = '';
let priorityFilter = '';
let currentCalendarDate = new Date(); // For calendar navigation

// DOM Elements
const loginPage = document.getElementById('loginPage');
const mainApp = document.getElementById('mainApp');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const registerLink = document.getElementById('registerLink');
const loginLink = document.getElementById('loginLink');
const logoutBtn = document.getElementById('logoutBtn');
const profileBtn = document.getElementById('profileBtn');
const profileDropdown = document.getElementById('profileDropdown');

// Modal elements
const taskModal = document.getElementById('taskModal');
const taskForm = document.getElementById('taskForm');
const modalTitle = document.getElementById('modalTitle');
const closeModal = document.getElementById('closeModal');
const cancelTask = document.getElementById('cancelTask');

// Navigation elements
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
const viewBtns = document.querySelectorAll('.view-btn');
const taskViews = document.querySelectorAll('.task-view');

// Button elements
const newTaskBtns = document.querySelectorAll('#newTaskBtn, #newTaskBtn2, #newTaskBtn3, #addCalendarTask');

// Calendar elements
const monthSelector = document.getElementById('monthSelector');
const yearSelector = document.getElementById('yearSelector');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
const todayBtn = document.getElementById('todayBtn');
const calendarGrid = document.getElementById('calendarGrid');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  showLogin();
}

function setupEventListeners() {
  // Login/Register events
  loginForm.addEventListener('submit', handleLogin);
  registerForm.addEventListener('submit', handleRegister);
  registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    showRegister();
  });
  loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    showLogin();
  });
  logoutBtn.addEventListener('click', handleLogout);
  
  // Profile dropdown
  profileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleProfileDropdown();
  });
  document.addEventListener('click', closeProfileDropdown);
  
  // Navigation events
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const page = item.dataset.page;
      navigateToPage(page);
    });
  });
  
  // Task view toggle events
  viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const view = btn.dataset.view;
      switchTaskView(view);
    });
  });
  
  // New task button events
  newTaskBtns.forEach(btn => {
    btn.addEventListener('click', () => openTaskModal());
  });
  
  // Modal events
  closeModal.addEventListener('click', closeTaskModal);
  cancelTask.addEventListener('click', closeTaskModal);
  taskForm.addEventListener('submit', handleTaskSubmit);
  taskModal.addEventListener('click', (e) => {
    if (e.target === taskModal) closeTaskModal();
  });
  
  // Calendar events
  if (monthSelector) {
    monthSelector.addEventListener('change', handleMonthChange);
  }
  if (yearSelector) {
    yearSelector.addEventListener('change', handleYearChange);
  }
  if (prevMonthBtn) {
    prevMonthBtn.addEventListener('click', goToPreviousMonth);
  }
  if (nextMonthBtn) {
    nextMonthBtn.addEventListener('click', goToNextMonth);
  }
  if (todayBtn) {
    todayBtn.addEventListener('click', goToToday);
  }
  
  // Filter and search events
  setupFiltersAndSearch();
}

function setupFiltersAndSearch() {
  const statusFilters = document.querySelectorAll('#statusFilter, #statusFilter2');
  const priorityFilters = document.querySelectorAll('#priorityFilter, #priorityFilter2');
  const searchInputs = document.querySelectorAll('#searchTasks, #searchTasks2');
  
  statusFilters.forEach(filter => {
    if (filter) {
      filter.addEventListener('change', (e) => {
        statusFilter = e.target.value;
        applyFilters();
      });
    }
  });
  
  priorityFilters.forEach(filter => {
    if (filter) {
      filter.addEventListener('change', (e) => {
        priorityFilter = e.target.value;
        applyFilters();
      });
    }
  });
  
  searchInputs.forEach(input => {
    if (input) {
      input.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        applyFilters();
      });
    }
  });
}

// Authentication functions
function showLogin() {
  loginForm.classList.remove('hidden');
  registerForm.classList.add('hidden');
}

function showRegister() {
  loginForm.classList.add('hidden');
  registerForm.classList.remove('hidden');
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  if (email && password) {
    currentUser = {
      name: "John Doe",
      email: email,
      initials: getInitials("John Doe")
    };
    
    showMainApp();
  } else {
    alert('Please enter valid credentials');
  }
}

function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  
  if (name && email && password) {
    currentUser = {
      name: name,
      email: email,
      initials: getInitials(name)
    };
    
    showMainApp();
  } else {
    alert('Please fill in all fields');
  }
}

function handleLogout() {
  currentUser = null;
  loginPage.classList.remove('hidden');
  mainApp.classList.add('hidden');
  
  loginForm.reset();
  registerForm.reset();
  showLogin();
}

function showMainApp() {
  loginPage.classList.add('hidden');
  mainApp.classList.remove('hidden');
  
  updateUserProfile();
  navigateToPage('dashboard');
}

function updateUserProfile() {
  if (currentUser) {
    document.querySelector('.profile-avatar').textContent = currentUser.initials;
    document.querySelector('.profile-name').textContent = currentUser.name;
  }
}

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

function toggleProfileDropdown() {
  profileDropdown.classList.toggle('hidden');
}

function closeProfileDropdown(e) {
  if (!profileBtn.contains(e.target)) {
    profileDropdown.classList.add('hidden');
  }
}

// Navigation functions
function navigateToPage(page) {
  currentPage = page;
  
  // Update navigation active state
  navItems.forEach(item => {
    if (item.dataset.page === page) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  
  // Show/hide pages
  pages.forEach(pageEl => {
    if (pageEl.id === page + 'Page') {
      pageEl.classList.add('active');
    } else {
      pageEl.classList.remove('active');
    }
  });
  
  // Initialize page content
  switch (page) {
    case 'dashboard':
      initializeDashboard();
      break;
    case 'tasks':
      initializeTasksPage();
      break;
    case 'calendar':
      initializeCalendar();
      break;
    case 'kanban':
      initializeKanbanPage();
      break;
  }
}

// Dashboard functions
function initializeDashboard() {
  updateDashboardStats();
  updateRecentTasks();
  updateProductivityInsights();
}

function updateDashboardStats() {
  const totalTasks = tasks.length;
  const inProgressTasks = tasks.filter(t => t.status === 'in-progress').length;
  const completedTasks = tasks.filter(t => t.status === 'completed').length;
  const overdueTasks = getOverdueTasks().length;
  
  document.getElementById('totalTasks').textContent = totalTasks;
  document.getElementById('inProgressTasks').textContent = inProgressTasks;
  document.getElementById('completedTasks').textContent = completedTasks;
  document.getElementById('overdueTasks').textContent = overdueTasks;
}

function getOverdueTasks() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return tasks.filter(task => {
    const dueDate = new Date(task.dueDate);
    dueDate.setHours(0, 0, 0, 0);
    return dueDate < today && task.status !== 'completed';
  });
}

function updateRecentTasks() {
  const recentTasksList = document.getElementById('recentTasksList');
  const recentTasks = tasks
    .filter(task => task.status !== 'completed')
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 5);
  
  recentTasksList.innerHTML = recentTasks.map(task => `
    <div class="task-card" onclick="openTaskModal(${task.id})">
      <div class="task-title">${task.title}</div>
      <div class="task-description">${task.description}</div>
      <div class="task-meta">
        <span class="task-category">${task.category}</span>
        <span class="task-due-date">${formatDate(task.dueDate)}</span>
      </div>
    </div>
  `).join('');
}

function updateProductivityInsights() {
  const completedTasks = tasks.filter(t => t.status === 'completed').length;
  const totalTasks = tasks.length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  
  // Calculate average completion time
  const completedWithDates = tasks.filter(t => t.status === 'completed' && t.completedDate && t.createdDate);
  const avgCompletionTime = completedWithDates.length > 0 
    ? Math.round(completedWithDates.reduce((acc, task) => {
        const created = new Date(task.createdDate);
        const completed = new Date(task.completedDate);
        return acc + (completed - created) / (1000 * 60 * 60 * 24);
      }, 0) / completedWithDates.length)
    : 0;
  
  // Get most productive priority
  const priorities = ['high', 'medium', 'low'];
  const priorityStats = priorities.map(priority => {
    const totalTasks = tasks.filter(t => t.priority === priority).length;
    const completedTasks = tasks.filter(t => t.priority === priority && t.status === 'completed').length;
    return {
      priority,
      rate: totalTasks > 0 ? completedTasks / totalTasks : 0
    };
  });
  const topPriority = priorityStats.reduce((a, b) => a.rate > b.rate ? a : b);
  
  document.getElementById('completionRate').textContent = `${completionRate}%`;
  document.getElementById('avgCompletionTime').textContent = `${avgCompletionTime} days`;
  document.getElementById('productivePriority').textContent = formatPriority(topPriority.priority);
}

// Tasks page functions
function initializeTasksPage() {
  switchTaskView(currentTaskView);
}

function switchTaskView(view) {
  currentTaskView = view;
  
  viewBtns.forEach(btn => {
    if (btn.dataset.view === view) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  taskViews.forEach(viewEl => {
    if (viewEl.id === view + 'View') {
      viewEl.classList.add('active');
    } else {
      viewEl.classList.remove('active');
    }
  });
  
  switch (view) {
    case 'list':
      renderTaskList();
      break;
    case 'grid':
      renderTaskGrid();
      break;
  }
}

function renderTaskList() {
  const taskListView = document.getElementById('taskListView');
  const filteredTasks = getFilteredTasks();
  
  taskListView.innerHTML = filteredTasks.map(task => `
    <div class="task-item" onclick="openTaskModal(${task.id})">
      <div class="task-info">
        <h4>${task.title}</h4>
        <p class="task-description">${task.description}</p>
        <div class="task-meta">
          <span class="task-category">${task.category}</span>
          <span class="task-priority priority-${task.priority}">${formatPriority(task.priority)}</span>
        </div>
      </div>
      <div class="task-status status-${task.status}">${formatStatus(task.status)}</div>
      <div class="task-due-date">${formatDate(task.dueDate)}</div>
    </div>
  `).join('');
}

function renderTaskGrid() {
  const taskGridView = document.getElementById('taskGridView');
  const filteredTasks = getFilteredTasks();
  
  taskGridView.innerHTML = filteredTasks.map(task => createTaskCard(task)).join('');
}

// Kanban page functions
function initializeKanbanPage() {
  renderKanbanBoard();
}

function renderKanbanBoard() {
  const statuses = ['to-do', 'in-progress', 'completed'];
  
  statuses.forEach(status => {
    const container = document.querySelector(`[data-status="${status}"]`);
    if (container) {
      const statusTasks = getFilteredTasks().filter(task => task.status === status);
      container.innerHTML = statusTasks.map(task => createTaskCard(task)).join('');
    }
  });
}

function createTaskCard(task) {
  return `
    <div class="task-card" onclick="openTaskModal(${task.id})">
      <div class="task-title">${task.title}</div>
      <div class="task-description">${task.description}</div>
      <div class="task-meta">
        <span class="task-category">${task.category}</span>
        <span class="task-due-date">${formatDate(task.dueDate)}</span>
      </div>
    </div>
  `;
}

// Calendar functions
function initializeCalendar() {
  setupCalendarSelectors();
  generateCalendar();
  updateCalendarStats();
}

function setupCalendarSelectors() {
  if (monthSelector && yearSelector) {
    monthSelector.value = currentCalendarDate.getMonth();
    yearSelector.value = currentCalendarDate.getFullYear();
  }
}

function handleMonthChange() {
  currentCalendarDate.setMonth(parseInt(monthSelector.value));
  generateCalendar();
  updateCalendarStats();
}

function handleYearChange() {
  currentCalendarDate.setFullYear(parseInt(yearSelector.value));
  generateCalendar();
  updateCalendarStats();
}

function goToPreviousMonth() {
  currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
  setupCalendarSelectors();
  generateCalendar();
  updateCalendarStats();
}

function goToNextMonth() {
  currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
  setupCalendarSelectors();
  generateCalendar();
  updateCalendarStats();
}

function goToToday() {
  currentCalendarDate = new Date();
  setupCalendarSelectors();
  generateCalendar();
  updateCalendarStats();
}

function generateCalendar() {
  if (!calendarGrid) return;
  
  const year = currentCalendarDate.getFullYear();
  const month = currentCalendarDate.getMonth();
  const today = new Date();
  
  // Get first day of the month and last day
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();
  
  // Get previous month's last days
  const prevMonth = new Date(year, month, 0);
  const daysInPrevMonth = prevMonth.getDate();
  
  // Clear calendar
  calendarGrid.innerHTML = '';
  
  // Generate calendar days
  let dayCount = 1;
  let nextMonthDay = 1;
  
  // Generate 6 weeks (42 days) to ensure complete calendar view
  for (let week = 0; week < 6; week++) {
    for (let day = 0; day < 7; day++) {
      const dayElement = document.createElement('div');
      dayElement.className = 'calendar-day';
      
      const dayIndex = week * 7 + day;
      let displayDate;
      let isCurrentMonth = false;
      let dateObj;
      
      if (dayIndex < startingDayOfWeek) {
        // Previous month days
        displayDate = daysInPrevMonth - startingDayOfWeek + dayIndex + 1;
        dayElement.classList.add('other-month');
        dateObj = new Date(year, month - 1, displayDate);
      } else if (dayCount <= daysInMonth) {
        // Current month days
        displayDate = dayCount;
        isCurrentMonth = true;
        dateObj = new Date(year, month, displayDate);
        dayCount++;
        
        // Check if it's today
        if (dateObj.toDateString() === today.toDateString()) {
          dayElement.classList.add('today');
        }
        
        // Check if it's weekend
        if (dateObj.getDay() === 0 || dateObj.getDay() === 6) {
          dayElement.classList.add('weekend');
        }
      } else {
        // Next month days
        displayDate = nextMonthDay;
        dayElement.classList.add('other-month');
        dateObj = new Date(year, month + 1, displayDate);
        nextMonthDay++;
      }
      
      // Create day content
      const dayNumber = document.createElement('div');
      dayNumber.className = 'day-number';
      dayNumber.textContent = displayDate;
      dayElement.appendChild(dayNumber);
      
      // Add tasks for this day
      if (isCurrentMonth) {
        const dayTasks = getTasksForDate(dateObj);
        dayTasks.forEach(task => {
          const taskBadge = document.createElement('div');
          taskBadge.className = `calendar-task-badge ${task.priority}-priority`;
          taskBadge.textContent = task.title;
          taskBadge.onclick = (e) => {
            e.stopPropagation();
            openTaskModal(task.id);
          };
          dayElement.appendChild(taskBadge);
        });
      }
      
      // Add click handler for day
      dayElement.onclick = () => {
        if (isCurrentMonth) {
          openTaskModal(null, dateObj);
        }
      };
      
      calendarGrid.appendChild(dayElement);
    }
    
    // If we've shown all days of current month and some next month days, break
    if (dayCount > daysInMonth && nextMonthDay > 7) {
      break;
    }
  }
}

function getTasksForDate(date) {
  const dateString = date.toISOString().split('T')[0];
  return tasks.filter(task => task.dueDate === dateString);
}

function updateCalendarStats() {
  const year = currentCalendarDate.getFullYear();
  const month = currentCalendarDate.getMonth();
  
  // Get tasks for current month
  const monthTasks = tasks.filter(task => {
    const taskDate = new Date(task.dueDate);
    return taskDate.getFullYear() === year && taskDate.getMonth() === month;
  });
  
  const completedTasks = monthTasks.filter(t => t.status === 'completed').length;
  const overdueTasks = monthTasks.filter(task => {
    const dueDate = new Date(task.dueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    dueDate.setHours(0, 0, 0, 0);
    return dueDate < today && task.status !== 'completed';
  }).length;
  
  const monthlyTotalEl = document.getElementById('monthlyTotalTasks');
  const monthlyCompletedEl = document.getElementById('monthlyCompletedTasks');
  const monthlyOverdueEl = document.getElementById('monthlyOverdueTasks');
  
  if (monthlyTotalEl) monthlyTotalEl.textContent = monthTasks.length;
  if (monthlyCompletedEl) monthlyCompletedEl.textContent = completedTasks;
  if (monthlyOverdueEl) monthlyOverdueEl.textContent = overdueTasks;
}

// Task modal functions
function openTaskModal(taskId = null, preselectedDate = null) {
  editingTask = taskId ? tasks.find(t => t.id === taskId) : null;
  
  if (editingTask) {
    modalTitle.textContent = 'Edit Task';
    populateTaskForm(editingTask);
  } else {
    modalTitle.textContent = 'New Task';
    taskForm.reset();
    
    // Set default due date
    let defaultDate;
    if (preselectedDate) {
      defaultDate = preselectedDate;
    } else if (currentPage === 'calendar') {
      defaultDate = currentCalendarDate;
    } else {
      defaultDate = new Date();
    }
    
    const dateString = defaultDate.toISOString().split('T')[0];
    document.getElementById('taskDueDate').value = dateString;
  }
  
  taskModal.classList.remove('hidden');
}

function closeTaskModal() {
  taskModal.classList.add('hidden');
  editingTask = null;
  taskForm.reset();
}

function populateTaskForm(task) {
  document.getElementById('taskTitle').value = task.title || '';
  document.getElementById('taskDescription').value = task.description || '';
  document.getElementById('taskPriority').value = task.priority || 'medium';
  document.getElementById('taskStatus').value = task.status || 'to-do';
  document.getElementById('taskCategory').value = task.category || '';
  document.getElementById('taskDueDate').value = task.dueDate || '';
  document.getElementById('taskNotes').value = task.comments ? task.comments.join('\n') : '';
}

function handleTaskSubmit(e) {
  e.preventDefault();
  
  const title = document.getElementById('taskTitle').value.trim();
  const description = document.getElementById('taskDescription').value.trim();
  const priority = document.getElementById('taskPriority').value;
  const status = document.getElementById('taskStatus').value;
  const category = document.getElementById('taskCategory').value;
  const dueDate = document.getElementById('taskDueDate').value;
  const notes = document.getElementById('taskNotes').value.trim();
  
  // Basic validation
  if (!title) {
    alert('Please enter a task title');
    return;
  }
  
  if (!dueDate) {
    alert('Please select a due date');
    return;
  }
  
  const taskData = {
    title: title,
    description: description,
    priority: priority,
    status: status,
    category: category,
    dueDate: dueDate,
    comments: notes ? notes.split('\n').filter(c => c.trim()) : []
  };
  
  if (editingTask) {
    const taskIndex = tasks.findIndex(t => t.id === editingTask.id);
    if (taskIndex !== -1) {
      tasks[taskIndex] = { 
        ...editingTask, 
        ...taskData,
        completedDate: taskData.status === 'completed' && editingTask.status !== 'completed' 
          ? new Date().toISOString().split('T')[0] 
          : editingTask.completedDate
      };
    }
  } else {
    const newTask = {
      id: Math.max(...tasks.map(t => t.id), 0) + 1,
      createdDate: new Date().toISOString().split('T')[0],
      completedDate: taskData.status === 'completed' ? new Date().toISOString().split('T')[0] : null,
      ...taskData
    };
    tasks.push(newTask);
  }
  
  closeTaskModal();
  
  // Refresh current view
  switch (currentPage) {
    case 'dashboard':
      initializeDashboard();
      break;
    case 'tasks':
      switchTaskView(currentTaskView);
      break;
    case 'calendar':
      generateCalendar();
      updateCalendarStats();
      break;
    case 'kanban':
      initializeKanbanPage();
      break;
  }
}

// Filter and search functions
function getFilteredTasks() {
  return tasks.filter(task => {
    const matchesSearch = !searchTerm || 
      task.title.toLowerCase().includes(searchTerm) ||
      task.description.toLowerCase().includes(searchTerm);
    
    const matchesStatus = !statusFilter || task.status === statusFilter;
    const matchesPriority = !priorityFilter || task.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });
}

function applyFilters() {
  if (currentPage === 'tasks') {
    switchTaskView(currentTaskView);
  } else if (currentPage === 'kanban') {
    renderKanbanBoard();
  }
}

// Utility functions
function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  });
}

function formatStatus(status) {
  if (!status) return '';
  return status.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

function formatPriority(priority) {
  if (!priority) return '';
  return priority.charAt(0).toUpperCase() + priority.slice(1) + ' Priority';
}

// Make functions globally available for onclick handlers
window.openTaskModal = openTaskModal;
window.closeTaskModal = closeTaskModal;