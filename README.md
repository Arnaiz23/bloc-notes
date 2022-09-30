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

- When you change the folder of a note, the count of the folder length in the header not change (Context or hook or both)
- If you create a lot of folders, collapse the design (put a scroll)
- If you updated the note, the folder length increase 1 although the folder doesn't changed
