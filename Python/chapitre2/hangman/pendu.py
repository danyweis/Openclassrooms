# -*-coding:utf-8 -*
import donnees
import fonctions
import pickle

# WELCOME TEXT
print(donnees.bienvenu)
test = input(donnees.joueurConnu)
score = {"hello": 0,}
print(score)
if test == "S" or test == "s":
    playerName = input("Pseudo : ")
    if playerName in score is True:
        pass
    else:
        score[playerName] = 0

    print("Bonjour " + playerName + " ton score actuel est de : " + score[playerName].value() + "pts")
elif test == "B" or test == "b":
    with open("scores", "r") as sBoard:
        scoreBoard = sBoard.read()
    print(scoreBoard)
else:
    pass
#elif test == "E" or test == "e":
    # EXIT THE PROGRAM


# GET RANDOM WORD FROM  = >"fonctions.py line 5"
#print(fonctions.word)
print(score)
