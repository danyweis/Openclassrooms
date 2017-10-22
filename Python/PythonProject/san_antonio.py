# -*- coding: utf8 -*-

import random


quotes = [
    "ecoutez-moi, Monsieur Shakspeare, nous avons beau être ou ne pas être, nous sommes !", 
    "on doit pouvoir choisir entre s'écouter parler et se faire entendre."
]

characters = [
    "alvin et les Chipmunks",
    "babar",
    "betty boop",
    "calimero",
    "casper",
    "le chat potté",
    "Kirikou"
]

# def == function in JS
def show_random_item(my_list):
    random_number = random.randint(0, len(my_list) - 1)
    item = my_list[random_number]
    return item

def capit(words):
    for word in words:
        word.capitalize()

def message(character, quote):
    capit(character)  
    capit(quote)
    return "{} a dit : {}".format(character, quote)

user_answer = input("Tapez enter pour connaître une autre citation ou B pour quiter le programme.")

# Show random quote program
while user_answer != "B":
    print(message(show_random_item(characters), show_random_item(quotes)))
    user_answer = input("Tapez enter pour connaître une autre citation ou B pour quiter le programme.")