// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener('DOMContentLoaded', function () {
    loadNotifications();
});

document.getElementById('dropdownMenuButton').addEventListener('click', function () {
    document.querySelector('.custom-drop-down').classList.toggle('show');
    
});

function loadNotifications() {
    fetch('/Notifications/GetUnread')
        .then(response => response.json())
        .then(data => {
            document.getElementById('notification-count').textContent = data.length;
            const notificationsDropdown = document.getElementById('notifications-dropdown');
            notificationsDropdown.innerHTML = '';
            data.forEach(notification => {

                const newDate = new Date(notification.date)
                console.log(newDate.getDay())

                const currentDate = `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`
                console.log(currentDate)
                const notificationLink = document.createElement('a');
                notificationLink.setAttribute('class', 'dropdown-item');
                notificationLink.setAttribute('href', `/Notifications/MarkAsRead/${notification.id}`);
                notificationLink.textContent = `${notification.message +"    " + currentDate}`;
                notificationsDropdown.appendChild(notificationLink);
            });
        })
        .catch(error => {
            console.error('Error fetching notifications:', error);
        });
}
