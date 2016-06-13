# Issue

In Astronomy v1, you cannot set a field defined as an `object` to `null`.

# Demonstration

In this application, the server initialises and saves an instance of MyModel
with a `name` and an `obj` property.  It then retrieves the object from the
model from the database, and attempts to set the `obj` property to `null`.  This
fails.
