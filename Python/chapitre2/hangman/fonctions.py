# -*-coding:utf-8 -*
import donnees
import random
import pickle

word = random.choice(donnees.listeMots)


def wordToFind(toFind):
    lettreOuMot = False
    x = 0
    motChercher = ""
    motListDonnee = []
    print(toFind)
    while x != 8 and lettreOuMot is False:

        exempleDonne = input("Donne une lettre ou un mot a 8 lettre:")

        if len(exempleDonne) == 8:
            if exempleDonne == toFind:
                print("bien jouer " + exempleDonne + " etait le mot chercer")
                lettreOuMot = True
            else:
                print("desoler " + exempleDonne + " n'est pas le mot rechercher")
        elif len(exempleDonne) == 1:
            motChercher += exempleDonne

            for i in toFind:
                if i in motChercher:
                    #print(i)
                    motListDonnee.append(i)
                else:
                    #oprint("*")
                    motListDonnee.append("*")
        else:
            print("essaye pas de tricher")
        print("".join(motListDonnee))
        motListDonnee = []
        x +=1
wordToFind(word)

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
