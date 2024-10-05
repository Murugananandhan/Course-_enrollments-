
let courses = [];


function addCourse() {
    const courseName = document.getElementById('courseName').value;
    const courseCode = document.getElementById('courseCode').value;

    if (courseName && courseCode) {
        const newCourse = {
            name: courseName,
            code: courseCode,
            students: []
        };

        courses.push(newCourse);
        displayCourses();
        updateCourseSelect();
    } else {
        alert('Please enter both course name and code.');
    }

 
    document.getElementById('courseName').value = '';
    document.getElementById('courseCode').value = '';
}


function displayCourses() {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = ''; 

    courses.forEach((course, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${course.name} (${course.code}) - ${course.students.length} enrolled`;
        courseList.appendChild(listItem);
    });
}


function updateCourseSelect() {
    const courseSelect = document.getElementById('courseSelect');
    courseSelect.innerHTML = '<option value="">Select a Course</option>'; 

    courses.forEach((course, index) => {
        const option = document.createElement('option');
        option.value = index; 
        option.textContent = `${course.name} (${course.code})`;
        courseSelect.appendChild(option);
    });
}


function enrollStudent() {
    const studentName = document.getElementById('studentName').value;
    const selectedCourseIndex = document.getElementById('courseSelect').value;

    if (studentName && selectedCourseIndex !== '') {
        const course = courses[selectedCourseIndex];
        course.students.push(studentName);

        displayCourses();
        displayEnrolledStudents(course);
    } else {
        alert('Please enter student name and select a course.');
    }

  
    document.getElementById('studentName').value = '';
}


function displayEnrolledStudents(course) {
    const enrolledStudentsDiv = document.getElementById('enrolledStudents');
    enrolledStudentsDiv.innerHTML = ''; 

    if (course.students.length > 0) {
        const heading = document.createElement('h3');
        heading.textContent = `Students Enrolled in ${course.name}`;
        enrolledStudentsDiv.appendChild(heading);

        const studentList = document.createElement('ul');
        course.students.forEach(student => {
            const studentItem = document.createElement('li');
            studentItem.textContent = student;
            studentList.appendChild(studentItem);
        });

        enrolledStudentsDiv.appendChild(studentList);
    } else {
        enrolledStudentsDiv.innerHTML = `<p>No students enrolled in ${course.name} yet.</p>`;
    }
}
