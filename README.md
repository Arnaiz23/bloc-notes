# Notepad project

## Issues

- Create a new field in the Note schema (status: {"active" - "trash"}) for delete a Note but send in a trash. In trash you can delete permanently.
- When you create a new Note, update the folder length if you add this note in a folder (View if Samsung Notes do this)

## Backend

### Errors WARNING!!!!!!!!!!

- When you deleted all the notes, the backend has an error (NotesService::87:22 -> null Reading length)

### Routes

- Folder
    - Add folder
    - Delete folder
    - Update folder
    - Get folder
    - Get folders
- Notes
    - Add note
    - Delete note
    - Update note
    - Get note
    - Get notes


## Database

### Collections

- Folder
    - _id
    - name
    - createdAt
    - length
- Notes
    - _id
    - title
    - fav ??
    - createdAt
    - updatedAt
    - content
    - folder_id


## Frontend

### Extra information

- For add notes in a folder, I have 2 options:
    1. In the name folder button, create a method that you can choose a new folder and the note is update automatically
    2. When you select a folder, in the title of the second column create a button that when you click this you can choose the notes that you want to add
