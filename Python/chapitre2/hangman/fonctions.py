# -*-coding:utf-8 -*
import donnees
import random
import pickle

word = random.choice(donnees.listeMots)
'''
pour le mot rechercher on prend ou un ou huit sinon on leve une erreur
hi = len("abcdefgh")
print(hi)
'''

def test():
    try: # TRY IF THE FILE SCORE EXIST ALLREADY
        with open("score", "rb") as f:
            scoreDepickle = pickle.Unpickler(f)
            getScore = scoreDepickle.load()
            #print(getScore)
    except FileNotFoundError: # IF THE FILE DOES NOT EXISTE AND THE PROGRAM RAISES AN ERROR CREATE THE FILE
        with open("score", "wb") as f:
            scorePickle = pickle.Pickler(f)
            scorePickle.dump(donnees.score)

test()
