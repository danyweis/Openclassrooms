# -*- coding:Utf-8 -*
'''
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
'''

def tableMax(multip, max):
  i = 0
  while i < max: 
    print(i + 1, "*", multip, "=", (i + 1) * multip)
    i += 1

# On appelle la fonction avec le multiplicateur et le maximum en argument
tableMax(9, 22) 