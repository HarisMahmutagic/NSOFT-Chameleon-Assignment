## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

# chameleonassignment

This application is SPA app, which have 2 pages, "Login" and "Workspace".
It's important to note, there is also a mobile version ( max- width of device 600px).

First page would be Login page.
That would be ordinary login form.
User has to enter email address and password.
Email address needs to have @ and also the last 4 characters needs to be ".com"
Password needs to have at least 8 characters.
On the right side is button for unhide/hide password.

Clicking to sign in button user will be transferred to "Workspace" page.
For bigger sizes of screen, we have on top, header and bellow are two listes.

Header / monitor screen:
Top left side is logo.
Bottom left side is text.
Top right side is avatar and username. >> Username will be all characters in email address before "@"
Clicking to avatar or username, will be shown pop up button for logout, to the right bottom side.

Header / mobile screen:
Top left side is logo.
Full bottom is text.
Top right side is just avatar.
Clicking to avatar will pop up new screen.
Top- center will be username.
Bottom- center will be logout button.
Full left side will be field to back to the workspace.

WorkBody:
Workbody has two lists.

On the left side is To-Do list:

The user will be able to add new labels in to the To-Do list.
The labels in to the To-Do list are editable.
Also can add picture instead of text.
And may eventually be deleted.

On the left side of each label is checkbox. Clicking on it the label will be considered as done.
And will be automatically moved to Done list.
Also user can just drag label and drop it to the Done field.
Will be also considered as done.

//Note//, empty labels can not be moved to the Done list.

On the right side of each label is button (3 dots).
Clicking on it will be shown pop up field for add new image, or delete label..
<<

On the right side is Done list:
Right top side is trash can. Clicking on it, all labels from the Done list will be deleted.

The labels in to the Done list are not editable.

On the left side of eaxh label is checkbox.Clicking on it the label will be moved back to the To-Do list.
Also user can just drag label and drop it to the To-Do field.
On the right side of each label is button (3 dots).
Clicking on it will be shown pop up field for delete just one label..

Reload page is not allowed. If user click reload will be automatically loged out.
