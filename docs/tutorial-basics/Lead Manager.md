import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

- User clicks on Lead Manager of the right-side navigation panel then the **Leads** page should be open.
- The Leads page should display the data of all created Leads in the form of basic information of the Lead such as:
  - _Lead Name_
  - _Lead Status_
  - _Location_
  - _Email_
  - _Phone_
  - _Created Date_
- The Leads page should have a **Search** box which provides a search option for the user to search by any field text.

<details>

<summary>_**Add Lead**_</summary>

_Who:_

- Only **Admin, Sr. Architect** and **Project Architect** can create leads.

- Button should be displayed on the right side of the Leads page only to those users who have permission to create Leads, right now only three type of users **Admin, Sr. Architect** and **Project Architect** are allowed to create the Leads.

_When:_

- After clicking on the **Add Lead** button the **Add Lead** page should be open with the fields **Lead Name, Email, Phone, Location, Lead Manager, Lead Status, Created Date, Source, Description** with **Discard** and **Submit** button.

- **Lead Name, Email, Phone, Location, Lead Manager, Lead Status, Created Date** are mandatory fields, blank fields cannot be submitted. The message for respective field should be display in red color after validation i.e. “Lead Name is required”

- After clicking on the **Submit** button, the page will be submitted after validation and new Lead entries added into the database.

- After clicking on the **Discard** button, the user will be navigated to the **Leads** page.
</details>

- Each row will be clickable; after clicking on or selecting any Lead the specific Lead page will be open with three tabs, **Details, Actions** and **Contract (Only visible to the Admin, Sr. Architect)**.

- Users can toggle between these tabs but by default **Details** tab will be selected.

<Tabs>
  <TabItem value="details" label="Details" default>

     The **Details** page displays the Leads’ detailed information like Lead Name, Email, Phone, Location, Lead Manager, Lead Status, Created Date, Source and Description with the Create Project button.

</TabItem>
<TabItem value="actions" label="Actions">

- The Actions page have following fields: 
   - _Lead Status_
   - _Date_
   - _Description_
   - _Submit_
   - _Last View Update_ 

1. **Lead Status** is a drop-down field with the options to select or change the status of the Lead.  

2. The **Date** field should show the date picker calendar to select the date for changing the status of lead on that date.  

3. The **Description** field should be a multiline text box to write a description or note. 

4. Lead Status and Date are mandatory fields. 

5. Clicking the **View Last Update** button will display a consolidated list of all last updated actions.

6. After selecting the Lead Status, Date, and filling in the Description the page can be submitted by clicking **Submit** Button. After submitting the page, it should be validated, if lead is updated then toast message should be display “**Lead is updated successfully**”. If any required field is missing, the page will not be submitted and error msg will be display like “**Status is required.**” or “**Date is required.**” 

</TabItem>
<TabItem value="contracts" label="Contracts">

After clicking on the **Contract** tab,  

* The two buttons should be visible **Share to Client** and **Create Contract**. 

* If there is any Contract created and submitted by the **Sr. Architect**, then it will be shown under Contract for Approval. 

When this contract is approved or rejected, its status will be shown for that contract. 

:::info Create Contract

Only the Admin and Sr. Architect can create the contract, After clicking on the **Create Contract** button under **Actions** Tab.

After clicking on the Create Contract button, the Contract page should be open with the fields _Project Type, Contract Type, Client Name, Client Email, Client Phone, Project Name, City, Site Address, Quotation, 	File Name, Design Charges_ with _Submit_ and _Discard_ button. 

There are two types of contracts can be created: 

<hr></hr>

1. <u><b> Commercial Contract</b></u>: If the User selects the Commercial Project Type from the drop down, then below fields should be displayed for creating commercial Contract. Please refer to the attached file for more information.

* <u> _Project Type:_ </u> Drop down → Commercial, Residential 
* <u> _Contract Type:_ </u> Dorp down → Interior Design & Implementation, Architecture Construction & Interior Design Implementation, Architecture Planning & Interior Design, Interior Design 
* <u> _Company Name:_ </u> Single line Text box 
* <u> _Client Name:_ </u> Multiline Text box 
* <u> _Client Email:_ </u> Multiline Text box 
* <u> _Client Phone:_ </u> Multiline Text box 
* <u> _Project Name:_ </u> Single line Text box 
* <u> _City:_ </u> Single line Text box 
* <u> _Site Address:_ </u> Single line Text box 
* <u> _Quotation:_ </u> Single line Text box 
* <u> _Working Days:_ </u> Single line Text box → Only numbers allowed 
* <u> _Design Charges:_ </u> Only numbers allowed 
* <u> _Additional Note:_ </u> Multi line Text box 
* <u> _Submit:_ </u> Button at the end of the page to submit the filled contract. 
<hr></hr>

2. <u><b> Residential Contract</b></u>: If the user selects the Residential Project Type from the drop down, then below fields should be displayed for creating residential contract. Please refer to the attached file for more information. 

<ins><u>

   - _Project Type (Residential)_ 
   - _Contract Type_
   - _Client Name_
   - _Client Email_
   - _Client Phone_
   - _Project Name_
   - _City_
   - _Site Address_
   - _Quotation_
   - _File Name_
   - _Design Charges_
   - _Discount (%)_
   - _Design Stage_
   - _Design Charges for Covered Area (in Rs)_
   - _Covered Area (in SQFT)_

</u></ins>

_Design Stage_ will be a drop down, based on the selection of fields the other related fields will be open otherwise not, like if user selects Balconies and /Toilets and / Bedrooms then Balconies No./Toilets No./ Bedroom No./ Bedroom No. fields will be displayed. 

If _Terrace_ is selected from the _Design Stage_, then _Design Charges for Terrace Covered Area (in Rs), Terrace Covered Area (in SQFT), Design Charges for Terrace Open Area (in Rs)._



:::note Note

   + If any Lead converted into the Project, then Contract cannot be created. 
   + The new contract for a new project can be created for the same client. 

   :::

   </TabItem>
</Tabs>



