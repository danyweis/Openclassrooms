# -*-coding:utf-8 -*

# LES LISTES  ET TUPLES

ma_liste = list() # ON CREE UNE LISTE VIDE

maListe = [] # ON CREE UNE LISTE VIDE

uneListe = [1, 2, 3, 4, 5] # UNE LISTE AVEC CINQ OBJETS
print(uneListe) # RETOURNE [1, 2, 3, 4, 5]

autreListe = [3.5, 1, "une chaine", []]

testListe = ["a", "s", "d"]
testListe[0] # RETOURNE a
testListe[2] # RETOURNE d
testListe[1] = "F" # ON REMPLACE "s" par "F"
print(testListe) # RETOURNE ["a", "F", "d"]


# INSERER

# append AJOUT A LA FIN DE LA LISTE

laListe = [1, 2, 3]
laLaiste.append(56)
print(laListe) # RETOURNE [1, 2, 3, 56]

# insert INSERER DANS UNE LISTE

dansListe = ["a", "b", "d", "e"]
dansListe.insert(2, "c") # ON INCERE "c" A L'INDICE 2
print(dansListe) # RETOURNE ["a", "b", "c", "d", "e"] 


# CONCATENATION DE LISTE

liste1 = [1, 2, 3]
liste2 = [4, 5, 6]

# extend()
liste1.extend(liste2) 
print(liste1) # RETOURNE [1, 2, 3, 4, 5, 6]

liste1 = [1, 2, 3]
liste1 + liste2 # RETOURNE [1, 2, 3, 4, 5, 6]

liste1 += liste2
print(liste1) # RETOURNE [1, 2, 3, 4, 5, 6]


# SUPPRIMER UN ELEMENT

# del nomDeLaVariable  => SUR UNE VARIABLE

testVariable = 34
testVariable # RETOURNE 34
del testVariable
testVariable # RETOURNE NameError 

# del liste[...] => SUR UNE LISTE

cetteListe = [-5, -3, 3, 4, 7, 10]
del cetteListe[0] # RETOURNE [-3, 3, 4, 7, 10]
del cetteListe[2] # RETOURNE [-3, 3, 7, 10]


# remove => ENLEVE QUE LE PREMIER TROUVER

lAutreListe = [1, 2, 3, 4, 3, 2, 1]
lAutreListe.remove(3) # RETOURNE [1, 2, 4, 3, 2, 1]
lAutreListe.remove(2) # RETOURNE [1, 4, 3, 2, 1]
lAutreListe.remove(1) # RETOURNE [4, 3, 2, 1]
