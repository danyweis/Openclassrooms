# -*-coding:utf-8 -*
import donnees
import fonctions
import pickle


# TRY IF THE FILE SCORE EXIST ALLREADY
try:
    with open("score", "rb") as f:
        scoreDepickle = pickle.Unpickler(f)
        getScore = scoreDepickle.load()
# IF THE FILE DOES NOT EXISTE AND THE PROGRAM RAISES AN ERROR CREATE THE FILE
except FileNotFoundError:
    with open("score", "wb") as f:
        scorePickle = pickle.Pickler(f)
        scorePickle.dump(donnees.score)


# WELCOME TEXT
print(donnees.bienvenu)
test = input(donnees.joueurConnu)


if test == "S" or test == "s":
    with open("score", "rb") as f:
        scoreDepickle = pickle.Unpickler(f)
        getScore = scoreDepickle.load()
    playerName = input("Pseudo : ")
    if playerName in getScore:
        print("Hi " + playerName + " you current score is " + getScore[playername])
    else:
        getScore[playerName] = 0
print(getScore)
#    fonctions.test()
'''
    if playerName in score is True:
        pass
    else:
        score[playerName] = 0
'''
    #print("Bonjour " + playerName + " ton score actuel est de : " +  "pts")
#elif test == "B" or test == "b":
#    with open("scores", "r") as sBoard:
#        scoreBoard = sBoard.read()
#    print(scoreBoard)
#else:
#    pass
#elif test == "E" or test == "e":
    # EXIT THE PROGRAM


# GET RANDOM WORD FROM  = >"fonctions.py line 5"
#print(fonctions.word)
