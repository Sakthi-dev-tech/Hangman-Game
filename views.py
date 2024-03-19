from flask import Blueprint, render_template, request, redirect, url_for

views = Blueprint(__name__, "views")

@views.route("/")
def welcome():
    return render_template("welcome.html") 

@views.route("/login")
def login():
    return render_template("login.html")

@views.route("/signup")
def signup():
    return render_template("signup.html")