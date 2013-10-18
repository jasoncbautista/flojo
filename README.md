# Flojo

## What?

A no-backend backend framework.  


## Goal

To remove friction in prototyping web apps.



## Premise

  A lot of code in a webapp doesn't really ever need to be written, it's all boilerplate, a waste of  precious cycles. Let's get computers to do our work for us.

## How does it work?


### Problem

 Writing backend code for models, setting up correspodning databases and then writtigin corresponding front-end code is tedious.
 
 
### Solution

Leverage a framework, Flojo, that allows users to create apps quickly using forms and hooks. 


Most of the code will be generated by the framework and the user can concentrate on writting some frontend javascript and necessary services to support the core of their app. 


REST based APIs are automatically generated, but furthermore, corresponding Model code is written and generated, making it easy for users to quickly write complex prototypes with real backends. 

### Sample Interface

#### Creating an Entity


Creating an entity can be done via the Flojo rest API or through a simple form like this:

![alt text](https://github.com/jasoncbautista/flojo/raw/master/docs/images/01_entity_form.png "Sample Entity Form")


##### Example 

An example of  a filled out entity demonstrates how we could create the concept of a commeont. As we can see the comment can have multiple properties. Most importantly it can have relationships to other entities. In this example we have a field called "body" which is just a string, and a child relationship to another entity named "post"

![alt text](https://github.com/jasoncbautista/flojo/raw/master/docs/images/02_entity_form_with_data.png "Sample Entity Form with Data")

