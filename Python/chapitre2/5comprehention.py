# -*-coding:utf-8 -*

listeOrigine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

listeCarre = [nb * nb for nb in listeOrigine] # J'AURAIS PU FAIRE "nb ** 2"
# EN PLUS J'UTILISE UNE BOUCLE FOR, JUSTE D'UNE AUTRE FACON
print(listeCarre)

# ==> FILTRAGE AVEC UN BRANCHEMENT CONDITIONNEL
listeFiltrage = [nb for nb in listeOrigine if nb % 2 == 0]
print(listeFiltrage)

# ==> MELANGE DE TOUT CA
