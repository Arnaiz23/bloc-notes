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


### Tests

- Notes
    - getAllNotes OK
    - getNote OK
    - createNote OK
    - updateNote OK
    - deleteNote OK


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
