# -*- coding:Utf-8 -*

def tablePar7():
  nombre = 7
  i = 0 # Notre compteur ! 
  while i < 10: # Tant que i est strictement inférieure à 10
    print(i + 1, "*", nombre, "=", (i + 1) * nombre)
    i += 1 # à chaque tour on ajoute 1 à i

# il faut appeler la fonction 
tablePar7()

def table(nb):
  i = 0
  while i < 10:
    print(i + 1, "*", nb, "=", (i + 1) * nb)
    i += 1

# on appelle la fonction avec un argument
table(5)


def tableMax(multip, max):
  i = 0
  while i < max: 
    print(i + 1, "*", multip, "=", (i + 1) * multip)
    i += 1

# On appelle la fonction avec le multiplicateur et le maximum en argument
tableMax(9, 22) 

def tableParDefaut(nombreChoisi, defaut = 10): # ci l'utilisateur donne pas de max le max va etre egal a defaut
  i = 0
  while i < defaut:
    print(i + 1, "*", nombreChoisi, "=", (i + 1) * nombreChoisi)
    i += 1

tableParDefaut(3, 5) # dans ce cas 10 est remplacer par 5 
tableParDefaut(3) # dans ce cas trois est multiplier par 10

# comment appeller les fonctions

def fonc(a = 1, b = 2, c = 3, d = 4, e = 5):
  print("a =", a, "b =", b, "c =", c, "d =", d, "e =", e)


'''
  on peut l'appeller de plusieur facon, voici quelque une:

fonc()  # RESULTAT a = 1 b = 2 c = 3 d = 4 e = 5
fonc(4) # RESULTAT a = 4 b = 2 c = 3 d = 4 e = 5
fonc(b = 8, d = 5)  # RESULTAT a = 1 b = 8 c = 3 d = 5 e = 5
fonc(b = 35, c = 48, a = 4, e = 9)  # RESULTAT a = 4 b = 35 c = 48 d = 4 e = 9

'''

# RETURN
def carre(valeur):
  return valeur * valeur

variable = carre(5) # variable est dans ce cas 25

print(variable)

# Les fonctions LAMBDA