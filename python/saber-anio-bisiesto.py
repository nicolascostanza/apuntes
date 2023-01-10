year = int(input('Ingrese el año que desea saber si es bisiesto '))

if year % 4 == 0:
	if(year % 100 == 0):
		if(year % 400 == 0):
				print('es bisiesto')
		else:
				print('no es bisiesto')
	else:
		print('año bisiesto')
else:
	print('no es año bisiesto')