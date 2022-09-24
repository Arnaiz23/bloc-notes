# Notepad project

## Issues

- Create a new field in the Note schema (status: {"active" - "trash"}) for delete a Note but send in a trash. In trash you can delete permanently.

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
