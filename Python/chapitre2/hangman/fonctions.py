# -*-coding:utf-8 -*
import donnees
import random
import pickle
#import pendu

# FUNCTION TO GET RENDOM WORD
def randomWordToFind():
    word = random.choice(donnees.listeMots)
    return word

# FUNCTION TO START THE GAME AND PLAY
def wordToFind(toFind):
    lettreOuMot = False
    x = 0
    y = 8
    exempleDonne = ""
    motChercher = ""
    motListDonnee = []
    print(toFind)

    while x != 8 and lettreOuMot is False:

        exempleDonne = input("Donne une lettre ou un mot a 8 lettre:")

        if len(exempleDonne) == 8:
            if exempleDonne == toFind:
                print("bien jouer " + exempleDonne + " etait le mot chercer")
                lettreOuMot = True
                #global getScore
                #getScore[playerName] += y
                return y
            else:
                print("desoler " + exempleDonne + " n'est pas le mot rechercher")
        elif len(exempleDonne) == 1:
            motChercher += exempleDonne

            for i in toFind:
                if i in motChercher:
                    #print(i)
                    motListDonnee.append(i)

                    #if "*" in motListDonnee == False:
                        #global getScore
                        #getScore[playerName] += y
                        #return y
                else:
                    #oprint("*")
                    motListDonnee.append("*")
        else:
            print("essaye pas de tricher")
        leMotDit = "".join(motListDonnee)
        print(leMotDit)
        motListDonnee = []
        if leMotDit == toFind:
            print("bien jouer " + leMotDit + " etait le mot chercer")
            lettreOuMot = True
            return y
        x += 1
        y -= 1

#wordToFind(word)

def replay():
    rejouer = ""
    rejouer = input("Want to play again if yes press Y else press something else : ")
    return rejouer






'''
def test():
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
'''
#test()
