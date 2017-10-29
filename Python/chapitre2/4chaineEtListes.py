# -*-coding:utf-8 -*

# COMMENT TRANSFORMER UNE CHAINE EN LISTE ET RECIPROQUEMENT

# CHAINE EN LISTE split

maChaine = "Bonjour a tous"
maChaine.split(" ") # RETOURNE ['Bonjour', 'a', 'tous']
maChaine.split() # RETOURNE ['Bonjour', 'a', 'tous']

# LISTE EN CHAINE join

maListe = ['Bonjour', 'a', 'tous']
" ".join(maListe) # RETOURNE Bonjour a tous


# CHANGER . EN , ET MONTRER QUE 3 APRES LE ,

def afficheFlottant(num):
    num = str(num)
    numListe = num.split(".")
    if len(numListe[1]) > 3:
        numListe[1] = numListe[1][:3]
    #print(",".join(numListe))
    return ",".join(numListe)

afficheFlottant(3.99999999)

# CORRECTION 

def affFlottant(flottant):
    if type(flottant) is not float:
        raise TypeError("Le paramètre attendu doit être un flottant")
    flottant = str(flottant)
    partieEntiere, partieFlottante = flottant.split(".")
    return ",".join([partieEntiere, partieFlottante[:3]])


# FONCTIONS DONT ON NE CONNAIT PAS A L'AVANC LE NOMBRE DE PARAMETRES

# def fonction(* lesParametres):

    # ON PLACE UNE *  DEVANT LE NOM DU PARAMETRE QUI ACCUEILLERA LA LISTE
# EXEMPLE

def fonctionIncunnue(* parametres):
    print("J'ai reçu : {}.".format(parametres))

fonctionIncunnue() # RETOURNE J'ai reçu : ().
fonctionIncunnue(3) # RETOURNE J'ai reçu : (3,).
fonctionIncunnue("a", "b", "c") # RETOURNE J'ai reçu : ("a", "b", "c").
var = 3.5
fonctionIncunnue(var, [4], "...") # RETOURNE J'ai reçu : (3.5, [4], "...").

'''
AUSSI POSSIBLE:
==> fonctionInconnue(nom, prenom, * commentaires) 
!!! DANS CE CAS C'EST IMPERATIVE DE PRECISER UN NOM ET UN PRENOM,
    ET ENSUITE METTRE CE QU'ON VEUX EN COMMENTAIRES

PAS POSSIBLE:
==> fonctionInconnue(* commentaires, nom, prenom)
'''

def afficher (* parametres, sep = ' ', fin = '\n'):
    """ FONCTION CHARGEE DE REPRODUIRE LE COMPORTEMENT DE PRINT.
    ELLE DOIT FINIR PAR FAIRE APPEL A PRINT POUR AFFICHER LE RESULTAT.
    MAIS LES PARAMETRES DEVRONT DEJA AVOIR ETE FORMATES.
    ON DOIT PASSER A PRINT UNE UNIQUE CHAINE, EN LUI SPECIFIANT DE NE 
    RIEN METTRE A LA FIN:
        print(chaine, end = '')"""
    
    # LES PARAMETRES SONT SOUS LA FORME D'UN TUPLE
    # OR ON A BESOIN DE LES CONVERTIR
    # MAIS ON NE PEUT PAS MODIFIER UN TUPLE
    # ON A PLUSIEURS POSSIBILITES, ICI JE CHOISIS DE CONVERTIS LE TUPLE EN LISTE
    parametres = list(parametres)
    # ON VA COMMENCER PAR CONVERTIR TOUTES LES VALEURS EN CHAINE
    # SINON ON VA AVOIR QUELQUES PROBLEMES LORS DU "join"
    for i, parametre in enumerate(parametres):
        parametres[i] = str(parametre)
    # LA LISTE DES PARAMETRES NE CONTIENT PLUS QUE DES CHAINES DE CARACTERES
    # A PRESENT ON VA CONSTITUER LA CHAINE FINALE
    chiane = sep.join(parametres)
    # ON AJOUTE LE PARAMETRE FIN A LA FIN DE LA CHAINE
    chaine += fin
    # ON AFFICHE L'ENSEMBLE
    print(chaine, end = '')

# TRANSFORMER UNE LISTE EN PARAMETRES DE FONCTION

listeDesParametres = [1, 4, 9, 16, 25, 36]
print(* listeDesParametres)