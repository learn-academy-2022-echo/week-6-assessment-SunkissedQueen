# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:
From Developer Jason and consultants
Researched answer:
Fix it with: generate a migration (best practice), manually update the schema, or do a rollback
Foreign key on Student model - `cohort_id:integer`


2. Which RESTful routes must always be passed params? Why?

Your answer:
From Developer Jereme
Researched answer:
The RESTful routes are Index, Show, New, Create, Update, Delete, and Edit.

The RESTful routes that always require a param are SHOW, DELETE, EDIT, and UPDATE. All these four require a param indicating the id to specify what is being shown, deleted, edited, or updated. The others routes get, post, and put don't need params at all. Index displays all the content of a table without any params. New directs the user to a form without any params. Create establish new content without any params.


I have used RESTful routes before in my rails application, I used the respective routes with the appropriate http verb to allow my users to navigate the prototype website. When they first arrive they will be place on the root page, usually the index page, which was similar to mines. There was existing posts from before that were being displayed with the INDEX route. On that same page I given the users the ability to see specific posts with SHOW, the ability to create new posts with NEW and then CREATE. RESTful routes are integral in providing CRUD actions for the developers and users. 

3. Name three rails generator commands. What is created by each?

Your answer:
From Developer Luis
Researched answer:
There are many generate commands, a few that I have worked with are generate controller, rspec:install and model.
 These generate commands are apart of what make working with rails much more convenient. We don't have to the extra work of creating the files that will be added when these commands are ran. 

rails generate model Fish color:string, age:integer - This would create a model with the name of Fish, and columns with the name of color, age. The data type for each column is what follows after the colon. 


rails generate controller - This would create a controller for us. All of the methods would end up being added here.

rails generate rspec:install - This would add the needed dependencies for rspec testing. We would then see a rspec file with files for testing.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?
From Developer Joyce
action: "GET" location: /students
    Index - The controller would show all instances that were created of students 

action: "POST" location: /students
    Create - This controller is used to add a new instance in the database
    
action: "GET" location: /students/new
    New - This controller returns a HTML form that will allow you to create a new instance. It is good to remember that New doesn't interact with the database, but instead it is the in between between C and R in CRUD

action: "GET" location: /students/2
    Show - This controller would only show/display  the student instance that has the primary number of 2 

action: "GET" location: /students/2/edit
    Edit - This controller returns a HTML form for updating the instance in a database. It is good to remember that Edit doesn't interact with the database itself, it just allows to have the ability to make an adjustment to an already made instance

action: "PATCH" location: /students/2
    Update - This controller allows to overwrite a value of an instance using the edit form. 

action: "DELETE" location: /students/2
    Destroy - This controller is used to delete an  instance. In this example, the instance with the primary index of 2 would be deleted from the database

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
From Developer Elijah
1. As a user I can add items to my to do list with a task name, date. (create)
2. As a user I can see the items on my to do list.                      (read)
3. As a user I can edit items on my to do list                          (update)
4. As a user I can see my list and  the dates the tasks need to be completed by. (show)
5. As a user I can check off tasks that are complete.           (edit)
6. As a user I can delete items off my list.                       (destroy)
7. As a user I can have multiple to do lists.
8. As a user I can have a unique log in id and password.               (strong params)
9. As a user I can have tasks repeat at a certain increment. ie weekly or monthly.
10. As a user I can change the background color of my to do list.