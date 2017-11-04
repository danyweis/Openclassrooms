# -*-coding:utf-8 -*

listeOrigine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

listeCarre = [nb * nb for nb in listeOrigine] # J'AURAIS PU FAIRE "nb ** 2"
# EN PLUS J'UTILISE UNE BOUCLE FOR, JUSTE D'UNE AUTRE FACON
print(listeCarre)

# ==> FILTRAGE AVEC UN BRANCHEMENT CONDITIONNEL
listeFiltrage = [nb for nb in listeOrigine if nb % 2 == 0]
print(listeFiltrage)

# ==> MELANGE DE TOUT CA
qttARetirer = 7 # ON RETIRE CHAQUE SEMAINE 7 FRUITS DE CHAQUE SORTE
fruitStockes = [15, 3, 18, 21] # PAR EXEMPLE 15 POMMES 3 MELONS ...
print([nbFruits - qttARetirer for nbFruits in fruitStockes if nbFruits > qttARetirer])

# EXEMPLE
inventaire = [
    ("pommes", 22),
    ("melons", 4),
    ("poires", 18),
    ("fraises", 75),
    ("cerises", 51)
]
# CE QUE J'AI TROUVER
'''
def getStock(item):
    return item[1]

inventaireSort = sorted(inventaire, key=getStock)
print(inventaireSort)
'''
inventaire1 = [sorted(stock) for stock in inventaire]
print(sorted(inventaire1))

# CORRECTION OPC
print("CORRECTION OPC")

# ON CHANGE LE SENS DE L'INVENTAIRE, LA QUANTITE AVANT LE NOM
inventaireInverse = [(qtt, nomFruit) for nomFruit, qtt in inventaire]
# DANS inventaireInverse ON PREND qtt, nomFruit DANS inventaire ET ON FAIT nomFruit, qtt
print(inventaireInverse)
# ON RECONSTITUE L'INVENTAIR TRIE
inventaire = [(nomFruit, qtt) for qtt, nomFruit in sorted(inventaireInverse, reverse = True)]
print(inventaire)

print("AUTRE POSSIBILITES")

# C'EST AUSSI POSSIBLE D'INVERSE AVANT DE RECONSTITUER
inventaire2 = [
    ("pommes", 22),
    ("melons", 4),
    ("poires", 18),
    ("fraises", 75),
    ("cerises", 51)
]
inventaireInverse2 = [(qtt, nomFruit) for nomFruit, qtt in inventaire2]
# ON TRIE L'inventaireInverse2 DANS L'ORDRE DECROISSANT
inventaireInverse2.sort(reverse = True)
print(inventaireInverse2)
# ET ON RECONSTRUIT L'inventaire2
inventaire2 = [(nomFruit, qtt) for qtt, nomFruit in inventaireInverse2]
print(inventaire2)
