# Notecloud

Notecloud is a lightweight Evernote clone built using Ruby on Rails and React.js. See it live [here](https://notecloudhapp.herokuapp.com/#/)

## Features

### Notes

  Users can create, read, update and delete notes.

<img src="https://res.cloudinary.com/brainzilla/image/upload/v1528809424/notecloud_note_form.png"/>

### Notebooks 

Notes can be organized in notebooks. 

<img src="https://res.cloudinary.com/brainzilla/image/upload/v1528810078/notecloud_notebooks.png"/>

### Tags 

Tags can be created and linked to notes in a many to many realtionshsip. Tags can be created by clicking on the create tag button. 

<img src="https://res.cloudinary.com/brainzilla/image/upload/v1530720475/new-tag-create-1-large_f3jqjb.gif"/>

And also by typing the name of the tag in the input field on the note form. 

<img src="https://res.cloudinary.com/brainzilla/image/upload/v1530720627/new-tag-create-2-large.gif_nlpadz.gif"/>

A tag is only created if one does not already exist with that name and if the note form input is used a tagging association is created. 

### Search 

Users can search notebooks and tags via the search bar in the coresponding index component. 

<img src="https://res.cloudinary.com/brainzilla/image/upload/v1530719311/notebooks-search_x7uhmf.gif"/>

The controllers index method performs a case insensitive search if the search param is present and returns the corresponding collection.

```ruby
def index 
    if params[:search]
      @notebooks = current_user.notebooks.where("lower(name) LIKE ?", "%#{params[:search].downcase}%").includes(:notes)
    else 
      @notebooks = current_user.notebooks.includes(:notes)
    end 
    render :index
  end 
  ```
### Infinite Scroll 

Notes are loaded 25 at a time with the next batch being fetched when the user scrolls to the bottom of the list. When this occurs a loading spinner appears when loading begins and the disappears when the response is received. 

<img src="https://res.cloudinary.com/brainzilla/image/upload/v1530720027/infintie-scroll_ydjv2j.gif"/>

