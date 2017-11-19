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
