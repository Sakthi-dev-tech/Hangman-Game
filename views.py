from flask import Blueprint, render_template, request, redirect, url_for
from wonderwords import Defaults, RandomWord

views = Blueprint(__name__, "views")

@views.route("/")
def welcome():
    return render_template("welcome.html") 

@views.route("/settings")
def settings():
    return render_template("settings.html")

@views.route("/game")
def game():
    
    wordt = request.args.get('word-type')
    wordl = request.args.get('wordl')

    if wordt == None or wordl == None:
        return render_template("settings.html")
    else:
        wordl = int(wordl)
    
    if wordt == 'noun':
        w = RandomWord(adj=Defaults.NOUNS)
    elif wordt == 'verb':
        w = RandomWord(adj=Defaults.VERBS)
    elif wordt == 'profanity':
        w = RandomWord(adj=Defaults.PROFANITIES)

    word = w.random_words(amount=1, word_max_length=wordl, word_min_length=wordl)

    return render_template("game.html", word=word[0], wordl = wordl)