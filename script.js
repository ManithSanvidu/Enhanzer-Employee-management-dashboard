const employees = [
    { first: "John", last: "Doe", address: "123 Main St, Apt 48\nSpringfield, IL 62704", mobile: "555-0101", email: "john.doe@example.com", department: "Engineering", designation: "Senior Developer", updatedBy: "A", updatedAt: "2024-05-23 10:45 PM", status: "active" },
    { first: "Jane", last: "Smith", address: "456 Oak Ave\nChicago, IL 60601", mobile: "555-0102", email: "jane.smith@example.com", department: "Marketing", designation: "Director", updatedBy: "B", updatedAt: "2024-05-22 03:15 PM", status: "active" },
    { first: "Alice", last: "Johnson", address: "789 Pine Rd\nAustin, TX 73301", mobile: "555-0103", email: "alice.johnson@example.com", department: "IT", designation: "Consultant", updatedBy: "Z", updatedAt: "2024-05-21 09:30 AM", status: "active" },
    { first: "Ilse", last: "Williams", address: "321 Elm St\nDenver, CO 80202", mobile: "555-0104", email: "ilse.williams@example.com", department: "Finance", designation: "Agent", updatedBy: "A", updatedAt: "2024-05-20 11:00 AM", status: "active" },
    { first: "Charlie", last: "Brown", address: "654 Maple Dr\nSeattle, WA 98101", mobile: "555-0105", email: "charlie.brown@example.com", department: "Legal", designation: "Senior Developer", updatedBy: "B", updatedAt: "2024-05-19 02:20 PM", status: "active" },
    { first: "Diana", last: "Miller", address: "987 Cedar Ln\nPortland, OR 97201", mobile: "555-0106", email: "diana.miller@example.com", department: "R&D", designation: "Director", updatedBy: "A", updatedAt: "2024-05-18 04:45 PM", status: "active" },
    { first: "Edward", last: "Davis", address: "147 Birch Blvd\nBoston, MA 02101", mobile: "555-0107", email: "edward.davis@example.com", department: "Engineering", designation: "Consultant", updatedBy: "Z", updatedAt: "2024-05-17 08:10 AM", status: "active" },
    { first: "Fiona", last: "Garcia", address: "258 Spruce Way\nMiami, FL 33101", mobile: "555-0108", email: "fiona.garcia@example.com", department: "Marketing", designation: "Agent", updatedBy: "B", updatedAt: "2024-05-16 01:55 PM", status: "active" },
    { first: "George", last: "Martinez", address: "369 Willow Ct\nPhoenix, AZ 85001", mobile: "555-0109", email: "george.martinez@example.com", department: "IT", designation: "Senior Developer", updatedBy: "A", updatedAt: "2024-05-15 06:30 PM", status: "active" },
    { first: "Hannah", last: "Rodriguez", address: "741 Ash Pl\nAtlanta, GA 30301", mobile: "555-0110", email: "hannah.rodriguez@example.com", department: "Finance", designation: "Director", updatedBy: "B", updatedAt: "2024-05-14 10:00 AM", status: "active" },
    { first: "Ian", last: "Wilson", address: "852 Poplar St\nDallas, TX 75201", mobile: "555-0111", email: "ian.wilson@example.com", department: "Legal", designation: "Consultant", updatedBy: "Z", updatedAt: "2024-05-13 03:40 PM", status: "active" },
    { first: "Julia", last: "Anderson", address: "963 Hickory Ave\nSan Diego, CA 92101", mobile: "555-0112", email: "julia.anderson@example.com", department: "R&D", designation: "Agent", updatedBy: "A", updatedAt: "2024-05-12 07:25 PM", status: "active" },
    { first: "Kevin", last: "Thomas", address: "159 Sycamore Rd\nMinneapolis, MN 55401", mobile: "555-0113", email: "kevin.thomas@example.com", department: "Engineering", designation: "Director", updatedBy: "B", updatedAt: "2024-05-11 11:50 AM", status: "active" },
    { first: "Laura", last: "Taylor", address: "357 Magnolia Dr\nNashville, TN 37201", mobile: "555-0114", email: "laura.taylor@example.com", department: "Marketing", designation: "Senior Developer", updatedBy: "A", updatedAt: "2024-05-10 09:15 AM", status: "active" },
    { first: "Mark", last: "Moore", address: "486 Dogwood Ln\nDetroit, MI 48201", mobile: "555-0115", email: "mark.moore@example.com", department: "IT", designation: "Consultant", updatedBy: "Z", updatedAt: "2024-05-09 02:00 PM", status: "active" },
    { first: "Nina", last: "Jackson", address: "624 Redwood Blvd\nSan Jose, CA 95101", mobile: "555-0116", email: "nina.jackson@example.com", department: "Finance", designation: "Agent", updatedBy: "B", updatedAt: "2024-05-08 05:35 PM", status: "active" },
    { first: "Oscar", last: "White", address: "735 Chestnut St\nPhiladelphia, PA 19101", mobile: "555-0117", email: "oscar.white@example.com", department: "Legal", designation: "Senior Developer", updatedBy: "A", updatedAt: "2024-05-07 08:45 AM", status: "inactive" },
    { first: "Paula", last: "Harris", address: "846 Walnut Ave\nHouston, TX 77001", mobile: "555-0118", email: "paula.harris@example.com", department: "R&D", designation: "Director", updatedBy: "B", updatedAt: "2024-05-06 12:10 PM", status: "inactive" },
    { first: "Rita", last: "Lewis", address: "168 Juniper Ct\nCharlotte, NC 28201", mobile: "555-0120", email: "rita.lewis@example.com", department: "Marketing", designation: "Agent", updatedBy: "A", updatedAt: "2024-05-04 01:30 PM", status: "deleted" },
     { first: "Quinn", last: "Clark", address: "957 Fir Rd\nColumbus, OH 43201", mobile: "555-0119", email: "quinn.clark@example.com", department: "Engineering", designation: "Consultant", updatedBy: "Z", updatedAt: "2024-05-05 04:20 PM", status: "draft" },
      { first: "Kamal", last: "Hassan", address: "735 Chestnut St\nPhiladelphia, PA 19101", mobile: "555-0117", email: "oscar.white@example.com", department: "Legal", designation: "Senior Developer", updatedBy: "A", updatedAt: "2024-05-07 08:45 AM", status: "draft" },
];

const table = document.getElementById("employeeTable");
const tabs = document.querySelectorAll(".tab");
const searchInput = document.getElementById("searchInput");
const activeBadge = document.getElementById("activeBadge");
const pageButtons = document.querySelectorAll(".page-btn");

let currentTab = "active";
let currentPage = 1;
let searchQuery = "";
const pageSize = 10;

function getFilteredEmployees() {
    let list = employees.filter((emp) => emp.status === currentTab);
    if (searchQuery.trim()) {
        const q = searchQuery.trim().toLowerCase();
        list = list.filter((emp) =>
            emp.first.toLowerCase().includes(q) ||
            emp.last.toLowerCase().includes(q) ||
            emp.address.toLowerCase().includes(q) ||
            emp.mobile.includes(q) ||
            emp.email.toLowerCase().includes(q) ||
            emp.department.toLowerCase().includes(q) ||
            emp.designation.toLowerCase().includes(q)
        );
    }
    return list;
}

function getAvatarClass(letter) {
    const l = letter.toUpperCase();
    if (l === "B") return "avatar-b";
    if (l === "Z") return "avatar-z";
    return "";
}

function formatAddress(address) {
    return address.replace(/\n/g, "<br>");
}

function renderTable() {
    const filtered = getFilteredEmployees();
    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * pageSize;
    const pageData = filtered.slice(start, start + pageSize);

    if (pageData.length === 0) {
        table.innerHTML = `<tr class="empty-row"><td colspan="8">No employees found</td></tr>`;
        return;
    }

    table.innerHTML = pageData.map((emp) => `
        <tr>
            <td>${emp.first}</td>
            <td>${emp.last}</td>
            <td>${formatAddress(emp.address)}</td>
            <td>${emp.mobile}</td>
            <td><a class="email-link" href="mailto:${emp.email}">${emp.email}</a></td>
            <td>${emp.department}</td>
            <td>${emp.designation}</td>
            <td>
                <div class="updated-cell">
                    <div class="avatar avatar-updater ${getAvatarClass(emp.updatedBy)}">${emp.updatedBy}</div>
                    <span>${emp.updatedAt}</span>
                </div>
            </td>
        </tr>
    `).join("");
}

function updateBadge() {
    const count = employees.filter((e) => e.status === "active").length;
    activeBadge.textContent = count;
}

function updatePaginationButtons() {
    const filtered = getFilteredEmployees();
    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    pageButtons.forEach((btn) => {
        const page = btn.dataset.page;
        if (page === "prev" || page === "next" || page === undefined) return;
        const num = parseInt(page, 10);
        btn.classList.toggle("active", num === currentPage && num <= totalPages);
        btn.style.display = num <= totalPages ? "inline-flex" : "none";
    });
}

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        currentTab = tab.dataset.tab;
        currentPage = 1;
        renderTable();
        updatePaginationButtons();
    });
});

searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    currentPage = 1;
    renderTable();
    updatePaginationButtons();
});

pageButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const filtered = getFilteredEmployees();
        const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
        const page = btn.dataset.page;

        if (page === "prev") {
            currentPage = Math.max(1, currentPage - 1);
        } else if (page === "next") {
            currentPage = Math.min(totalPages, currentPage + 1);
        } else {
            currentPage = parseInt(page, 10);
        }

        renderTable();
        updatePaginationButtons();
    });
});

updateBadge();
renderTable();
updatePaginationButtons();
