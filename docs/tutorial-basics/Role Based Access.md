---
sidebar_position: 2
---

1. Based on the role user can access the portal’s functionalities, Only **Admin role** user has full access and control over it.  

2. Only Authorized user can Create New Role, Update and Delete the Roles. 

3. Every Role can be assigning the access permission like which role can access what? The access type can also be editable by the authorized user. 

4. The Role can be deleted only when it is not assigned to any user.
## Roles
   Here are the roles below available in the current release, authorized users can create more roles based on requirement.

- **Admin** - All Access 

- **Senior Architect** (Sr. Ar.) - All Projects in Lead & Ongoing, Contract & Estimates 

- **3D Visualizer** - Access limited to Projects data only, No access to Contracts / Estimates 

- **Project Architect** - Access limited to Projects data only, No access to Contracts / Estimates 

- **Jr. Interior Designer** (Junior Designer) - Access limited to Projects data only, No access to Contracts / Estimates 

- **Executive Assistant** (Procurement) - Access limited to Projects Procurements data & Estimates, No access to drawings 

- **Jr. Executive HR & Marketing** (HR & Admin) - Access limited to Company Policies. 

- **Site Supervisor** (Site InCharge)- Access limited to Site Photos & Pdfs (Site Drawings - released) that are shared to Site Work folder. 

- **Admin, Sr. Architect** and **Project Architect/Project Designer** can create Leads. 

- **Project Designer/Project Architect** is allowed to create Lead then he can access the created Lead and able to create Project of that Lead only and can have access for those projects only on which he was added by the admin without accessing Contract and Quotation.

## Access Levels

|Roles/Access Levels|Create|Read|Update/Restore|Delete|
|:-----------------:|:----:|:--:|:------------:|:----:|
| User              |X|Can view users and their details.|Can Update user’s role.|Can delete user.|
| UserArchive       |X|Can view archived users.|Can restore archived users.|Can permanently delete users.|
| Lead              |Can create leads.|Can view leads and their details, if the role has access to view file, then also can view files in the lead manager.|Role can edit leads and can change status.|X|
| Project           |Can create projects and also has lead view permission.|Can view leads and can view their details if role has access to view file, then also can view files in lead manager. Also depended on the user if he/she was added to that lead.|Role can edit Project and can change status.||
| MOM               |Can create MOM in project.|Can view MOM and All MOM in project.|X|X|
| Task              |Can create tasks and can create subtasks.|Can view Task Details.|Can Update Task Details.|Can delete tasks.|
| Contract          |Can create a contract.|Can View Contract in both Lead Manager and File Manager (if user has access to read files). In File Manager, users can share files for approval in the contract folder.|Can approve or reject contract in Leads.||
| File              |Can create folders and files in Files Manager.|View Folders and Files in File Manager. If read access is provided in Lead, then the user can view files of the lead section in the file manager; if read access in Project, then the user can view files of the project section in the file manager; and the same with company data in the file manager.|X|Can delete files and folders in File Manager.|
| Company Data      |Can view company data in File Manager.|X|X|X|
| Archive           |Can view archive files and folders in company data.|X|**Restore:** Can restore files and folders from Archive in company data.|Can delete files and folders in company data.|
| Add Member        |Can access and add user to project and add user to lead.|||| 
| Role              |Can create role.|Can view role's access.|Can edit roles Access.|Can delete roles.|






