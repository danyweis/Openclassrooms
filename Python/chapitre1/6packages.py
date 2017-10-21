# -*-coding:utf-8 -*

"""
=>  si on crée une bibliothèque imaginaire 
    avec une hiérarchie des répertoires et
    fichiers ressemblant à cela:
"""

'''
=>  * Un répertoire "bibliotheque" contenant:
        * Un répertoire "evenements" contenant:
            * Un module "clavier";
            * Un module "souris";
            * ...
        * Un répertoire "effets"contnant différents
          effets graphiques;
        * Un répertoire "objets" contenant différents
          objets graphique de notre fenêtre (boutons,
          zones de texte, barre de menus,...)
'''

# importer des packages avec "from" & "import"

import bibliotheque # => ici on import le package

# pour accéder aux sous-packages il faut faire:

bibliotheque.evenements # => pointe vers sous package evenements
bibliotheque.evenements.clavier # => pointe vers module clavier


# Si je veux importer qu'un module ou une fonction je fais:

from bibliotheque.objets import boutons
