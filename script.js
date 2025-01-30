function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("dateTime").textContent = now.toLocaleDateString('id-ID', options);
}

function updateMotivation() {
    const quotes = [
        "Tetap semangat, hari ini adalah kesempatan baru!",
        "Jangan menyerah, setiap usaha membawa hasil.",
        "Kesuksesan dimulai dengan langkah kecil.",
        "Kamu lebih kuat dari yang kamu kira!",
        "Lakukan yang terbaik, sisanya biarkan Tuhan bekerja."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("motivation").textContent = quotes[randomIndex];
}

function updateLocation() {
    document.getElementById("location").textContent = "Lokasi: Jakarta, Indonesia";
}

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();
    if (task === "") return;
    
    let li = document.createElement("li");
    li.innerHTML = `${task} 
        <button class="complete" onclick="toggleComplete(this)">Selesai</button>
        <button class="edit" onclick="editTask(this)">Edit</button>
        <button class="delete" onclick="removeTask(this)">Hapus</button>`;
    
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}

function toggleComplete(button) {
    button.parentElement.classList.toggle("completed");
}

function editTask(button) {
    let li = button.parentElement;
    let text = li.firstChild.textContent.trim();
    let newText = prompt("Edit tugas:", text);
    if (newText) li.firstChild.textContent = newText;
}

function clearAll() {
    document.getElementById("taskList").innerHTML = "";
}

updateDateTime();
updateMotivation();
updateLocation();