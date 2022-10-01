# Notepad project

## Issues

- Create a new field in the Note schema (status: {"active" - "trash"}) for delete a Note but send in a trash. In trash you can delete permanently.
- When you create a new Note, update the folder length if you add this note in a folder (View if Samsung Notes do this)

## Backend

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

- In /folderId/id -> when you change the note folder, the notes not change
- Folder change style
- Delete folder
- Change the /folderId for /folder/:folderId/ because if not change the 404 page never show
