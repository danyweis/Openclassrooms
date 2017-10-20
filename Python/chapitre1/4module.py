# -*- coding:Utf-8 -*

# Comment importer des modules "mot-clé => import <= "

# module mathematique
import math

math.sqrt(16) # retourn 4

'''
on appelle la fonction du module
en tapon le nom du module (math)
suivi d'un point (.),
puis le nom de la fonction (dans ce cas "sprt")
'''

# savoir les fonction existant on tape dans l'interpréteur Python
# help("nom du module")

# c'est aussi possible de faire 
import math as mathematiques
mathematiques.sqrt(25)

# on peut aussi dire
from math import fabs # ici on import que la fonction est non tout le module
# on a donc plus besoin de preciser le module (math)
# fabs c'est l'oposer d'une valeur negative
fabs(-5) # retourn 5 
fabs(2) # retourn 2

# OU ON PEUT FAIRE CECI 
# IMPORTER TOUT DU MODULE
from math import *
# maintenant on peut tout utiliser sans preciser le module (math)
sqrt(4)   # retourn 2
fabs(-3)  # retourn 3
