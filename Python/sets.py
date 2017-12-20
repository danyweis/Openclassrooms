my_set = set (["one", "two", "three", "one"])
#print(my_set) # returns {'one', 'two', 'three'}
# IT WILL NOT SHOW DUPLICATES


my_set1 = set(["two", "three", "four"])

print(my_set1 | my_set) # THIS WILL RETURN {'one', 'two', 'three', 'four'}
""" this is called 'union' or 'or' and will
    not return double values """
print(my_set1 & my_set) # THIS WILL RETURN {'two', 'three'}
""" this  an intersection and will
    only the ones whi are in the two sets"""
print(my_set1 - my_set) # THIS WILL RETURN {'four'}
print(my_set - my_set1) # THIS WILL RETURN {'one'}

""" this is to find the diffrence between 
    the sets just have to be carefull if we call set1
    first we will get what is in set one that is not in set
    or the other way"""

print(my_set1 ^ my_set) # THIS WILL RETURN {'one', 'four'}
""" I HAVE TO FIND OUT WHY I GET {'one', 'four'} """
