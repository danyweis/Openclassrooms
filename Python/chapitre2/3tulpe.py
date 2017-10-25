# -*-coding:utf-8 -*

tulpeVide = ()
tulpeNonVide = (1,) # AVEC QUE UN OBJET IL FAUT METTRE UNE VIRGULE
print(tulpeNonVide) # RETOURNE => 1,
tulpeAvecPlusieurValeurs = (1, 2, 5)

# LA DIFFERENCE ENTRE DES LISTES ET DES TULPES,
# UNE FOIS CREES, NE PEUVENT ETRE MODIFIE
# ON NE PEUT PLUS Y AJOUTER D'OBJET OU RETIRER

a, b = 3, 4
print(a) # RETOURNE 3
print(b) # RETOURNE 4

# ICI PYTHON UTILISE DES TULPES SANS LE MONTRER
(a, b) = (3, 4)

# UNE FONCTION RENVOYANT PLUSIEUR VALEURS
def decomposer(entier, divisePar):
    """ Cette fonction retourne la partie entiere et 
    le reste de entier / divisePar"""

    partieEntiere = entier // divisePar
    reste = entier % divisePar
    return partieEntiere, reste

# ENSUIT ON PEUT CAPTURER LA PARTIE ENTIERE ET LE RESTE
# DANS DEUX VARIABLES AU RETOUR DE LA FONCTION

partieEntiere, reste = decomposer(20, 3)
print(partieEntiere) # RETOURNE 6
print(reste) # RETOURNE 2

# AUTRE EXPLICATIONS VONT VENIR 