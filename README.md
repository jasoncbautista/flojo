# Flojo

## What?

A no-backend backend framework.  


## Goal

To remove friction in prototyping web apps.



## Premise

A lot of code in a webapp doesn't really ever need to be written, it's
all boilerplate, a waste of precious cycles. Let's get computers to do
our work for us.


## Holy Grail

You shouldn't even need a server to host your backend. No setup of this and that. You just drop in a javascript script tag 
which takes care of all that for you:

``` HTML
  <script src="://flojo.com/apps/myapp/main.js" type="text/javascript">

````

## How does it work?


### Problem

Writing backend code for models, setting up correspodning databases and
then writting corresponding front-end code is tedious.
 
 
### Solution

Leverage a framework, Flojo, that allows users to create apps quickly
using forms and hooks.


Most of the code will be generated by the framework and the user can
concentrate on writting some frontend javascript and necessary services
to support the core of their app.


REST based APIs are automatically generated, but furthermore,
corresponding model code is written and generated, making it easy for
users to quickly write complex prototypes with real backends.

### Sample Interface

#### Creating an Entity


Creating an entity can be done via the Flojo rest API or through a
simple form like this:

![alt text](https://github.com/jasoncbautista/flojo/raw/master/docs/images/01_entity_form.png "Sample Entity Form")


##### Example 

An example of a filled out entity demonstrates how we could create
the concept of a comment. As we can see the comment can have multiple
properties. Most importantly it can have relationships to other
entities. In this example we have a field called "body" which is just a
string, and a child relationship to another entity named "post"

![alt text](https://github.com/jasoncbautista/flojo/raw/master/docs/images/02_entity_form_with_data.png "Sample Entity Form with Data")



### Generated Code

Once you create an entity, Flojo will generate a corresponding model.
Here is an example of how you can play around with the frontend code 
that was just generated.

``` javascript
// Simple ways of creating various entities:
var post = new MyApp.Post();
var comment = post.createComment({body: "testing this thing"});

// Another way of creating a comment 
var anotherComment = new MyApp.Comment({
                            post: post
                          , body: "another comment..."
                        });


// Now a simple way of getting all our comments that belong to a single post
var comments = post.getAllComments();

_.each(comments, function(comment) {
  console.log("Comment Body", comment.getBody());
});

````

