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