const students = {
    "Mattatha": {
        "Math": [15, 37],
        "Science": [6, 23],
        "English": [5, 20]
    },
    "Hadassah": {
        "Civics": [4, 25],
        "Pre-algebra": [0, 21],
        "Physical Science": [4, 21],
        "English": [0, 16]
    },
    "Zacharias": {
        "Earth/Space Science": [0, 10],
        "Language Arts": [0, 22],
        "Math": [0, 10]
    }
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const scheduleDiv = document.getElementById("schedule");

function generateSchedule() {
    for (let student in students) {
        let studentDiv = document.createElement("div");
        studentDiv.classList.add("student");
        
        let title = document.createElement("div");
        title.classList.add("title");
        title.textContent = student;
        studentDiv.appendChild(title);
        
        days.forEach(day => {
            let dayDiv = document.createElement("div");
            dayDiv.innerHTML = `<strong>${day}:</strong>`;
            let assignments = "";
            
            for (let subject in students[student]) {
                let seg1 = students[student][subject][0];
                let seg2 = students[student][subject][1];
                if (seg1 > 0) {
                    assignments += `<br> ${subject} (Segment 1): 1 assignment`;
                    students[student][subject][0]--;
                } else if (seg2 > 0) {
                    assignments += `<br> ${subject} (Segment 2): 1 assignment`;
                    students[student][subject][1]--;
                }
            }
            dayDiv.innerHTML += assignments || "<br>No assignments left";
            studentDiv.appendChild(dayDiv);
        });
        scheduleDiv.appendChild(studentDiv);
    }
}
generateSchedule();