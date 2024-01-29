Web Notification System: An ASP.NET Core Application

This repository contains the source code for a web application developed using ASP.NET Core and C#. The application features a notification system that interacts with a SQL Server database.

Overview

The application displays a notification icon on the top right corner of the screen. This icon indicates the number of unread notifications from a Notification table in the SQL Server database. Clicking on the icon reveals a dropdown menu showing the details of the notifications, such as the message and the date.

Features

- Display of notification count
- Detailed view of notifications on click
- Mark notifications as read (Stretch Goal)
- Delete notifications from the menu (Stretch Goal)

Technologies Used

- ASP.NET Core
- C#
- Entity Framework Core
- SQL Server
- Bootstrap
- jQuery

Architecture
The solution is layered as follows:

- User Experience (UX)
- ASP.NET Web API
- Database

The MVC pattern is followed and Razor views are used as the UI layer.


