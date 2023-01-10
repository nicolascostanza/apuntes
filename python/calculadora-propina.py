costo_cena = float(input('Cuando costo la cena ? '))
cantidad_personas = int(input('Cuantas personas eran ? '))
porcentaje_cena = float(input('Que porcentaje desea dar de propina ? '))

result = (costo_cena * (porcentaje_cena / 100 + 1)) / cantidad_personas

print(f'Lo que debe pagar cada integrante de la mesa es ${result // 1}')