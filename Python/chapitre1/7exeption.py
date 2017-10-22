# -*-coding:utf-8 -*

# Une exeption est une "erreur"
# Tester:
# Forme minimale du block try
# !!! => A EVITER <= !!!

try:
    # bloc à essayer
except:
    # bloc qui sera exécuté en cas d'erreus

# un peut comme console.error()

'''
  => le mot-clé "try" suivi de ":" (essayer)
  => Le bloc d'instruction à essayer
  => Le mot-clé except suivi de ":" 
  => Le bloc d'instruction sera exécuté si une
     erreur est trouvée dans le premier bloc
'''

annee = input()
try: # On essaye de convertir annee en entier
    annee = int(anne)
except:
    print("Erreur lors de la conversion de l'année.")

# Forme plus complète

try:
    resultat = numerateur / denominateur
except:
    print("Une erreur est survenue... laquelle ?")

'''
Ici, plusieurs erreurs sont susceptibles
d'intervenir, chacune levant une exception
différente.

  =>  NameError: l'une des variables numerateur ou
      denominateur n'a pas été définie (elle n'existe
      pas). Si vous essayez dans l'interpréteur 
      l'instruction print(numerateur)alors que vous 
      n'avez pas défini la variable numerateur, vous 
      aurez la même erreur.
  =>  TypeError: l'une des variables numerateur ou 
      denominateur ne peut diviser ou être divisée 
      (les chaînes de caractères ne peuvent être 
      divisées, ni diviser d'autres types, par 
      exemple). Cette exception est levée car vous 
      utilisez l'opérateur de division « / » sur 
      des types qui ne savent pas quoi en faire.
  =>  ZeroDivisionError: encore elle ! 
      Si denominateur vaut 0, cette exception sera 
      levée.
'''
# On peut intercepter les types d'exeptionsen créant des bloc except:

try:
    resultat = numerateur / denominateur
except NameError:
    print("La variable numerateur ou denominateur n'a pas été définie")
except TypeError:
    print("La variable numerateur ou denominateur possède un type incompatible avec la division")
except ZeroDivisionError:
    print("La variable denominateur est égale à 0")

# Autre facon:

try:
    # bloc de test
except type_de_l_exeption as exeption_retournee:
    print("Voici l'erreur: ", exeption_retournee)


# Les mots-clé "else" et "finally"

# => else
try:
    result = num / denom
except NameError:
    print("La variable num ou denom n'a pas été définie")
except TypeError:
    print("La variable num ou denom possède un type incompatible avec la division")
except ZeroDivisionError:
    print("La variable denom est égale à 0")  
else:
    print("Le resultat est ", result)

# => finally

# finally permet d'executer le code même si erreur dans try

try:
    # test d'instruction 
except type_de_l_exeption:
    # traitement en cas d'erreur
finally:
    # Instruction executee qu'il y ait des erruers ou non

# ++ BONUS le mot-clé: "pass"

# SI RIEN NE DOIT SE PASSER EN CAS D'ERREUR

try:
    # test d'instruction
except type_de_l_exeption: # Rien ne doit se passer en cas d'erreur
    pass

'''
  =>  assert
      est un moyen simple de s'assurer, avant de
      continuer, qu'une condition est respectée.
      En général, on les utilise dans des blocs
      "try ... except"
'''

assert test # Si le test est True, l'execution se poursuit normalement.
            # Sinon une exeption AssertionError est lever

"""
EXEMPLE:
>>> var = 5
>>> assert var == 5   => le test est vrai
>>> assert var == 8   => le test est faux
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AssertionError
>>>
"""    

# nous voulons tester si l'utilisatuer ne donne pas une annee inferieur ou egal a zero

annee = input("Saisissiez une année supérieure à 0 :") 
try:
    annee = int(annee)
    assert annee > 0
except ValueError:
    print("Vous n'avez pas saisi un nombre")
except AssertionError:
    print("L'année saisi est inferieur ou égal à 0")


# LEVER UNE EXCEPTION

# mot-clé raise

raise TypeDeLExeption("message à afficher")

# je vais lever une exeption de type ValueError

annee = input() # l'utilisateur saisit l'année  
try:
    annee = int(annee) # On tente de convertir l'annee
    if annee <= 0:
        raise ValueError("l'annee saisie est négative ou nulle")
except ValueError:
    print("La valeur saisie est invalide(l'annee est peut-etre negative).")