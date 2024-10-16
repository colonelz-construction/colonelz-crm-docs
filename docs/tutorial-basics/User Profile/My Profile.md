---
sidebar_position: 1
---

- **Who:** Any logged in user

- **When:** Click on **My Profile** or **click on Avatar** at the right corner of the page.

- **What:** A user clicks on **My Profile** then My Profile page should be open with tabs **Profile, Password** and **Users** (only for the admin), **Roles, Archived Users** Where **Profile** tab should be selected by default. 

When any logged in user clicks on the Avatar or Role Name at the top right corner of the page, a Navigation Palette should open with role-based links. If the logged-in user is an **Admin**, five navigation links should be displayed: **My Profile, Add User to Project, Add User to Lead, Create User, Sign Out**. If the logged-in user is not an Admin, the navigation links should be displayed based on their access permissions.


## Profile

- **Profile** page should be display with editable **Avatar/Profile Pic** (on mouse hover shows **Edit** option; after clicking on **Edit**, User can update his profile picture). 

- The Page should display an editable prefilled **Username** field and non-editable prefilled **Email id** and **Role** with **Update button**. 

## Password 

**Password** After clicking on password tab, the Password page should be open with three input fields **Current Password, New Password** and **Confirm Password** with **Reset** and **Update Password** button, so that user can change his password. 

## Users 

- After clicking on the **Users** tab, all created Users will be listed with **Username, Role,** and their **Email id** with the **Edit** and **Delete** icon with the **Create User** button and **Search** box. 

- After clicking the **Edit** icon, the **Edit User Role** form will be open with noneditable Username, Email Id and editable **Role** drop down to choose to update the User’s Role. 

- After clicking the **Delete** icon the dialogue box should be open to confirm the delete action. After confirming delete action it will be a soft delete, and User will be stored in archive. 

## Roles

- After clicking the Roles tab, the page should display the list of existing **Roles, Created Date** and **Access Level** columns with **Edit** and **Delete** icon.  

- Clicking on **Edit** icon, **Edit Role** page should open with editable **Role** field, assigned **Access level** like Lead- create, read, update, delete; based on the provided access at the time of Roles creation and **Select all Permission** check box with **Update** and **Back** button. 

- Clicking on **Delete** icon, Role will be deleted if that Role is not assigned to any User. 

## Archived Users

- After Clicking on **Archived Users** tab the Archived Users page will display the list of **Username**, their assigned **Role** and **Email** with **Restore** and **Delete** button. 

- Clicking on **Restore** icon the User will be restored with his assigned role. 

- Clicking on Delete icon the User will be permanently deleted from the system. 