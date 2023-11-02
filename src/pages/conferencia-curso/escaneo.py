import cv2
from pyzbar import pyzbar

def escanear_codigo(frame):
    codigos_escaneados = pyzbar.decode(frame)
    for codigo in codigos_escaneados:
        x, y, w, h = codigo.rect
        tipo_codigo = codigo.type
        datos_codigo = codigo.data.decode('utf-8')
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
        
        texto = f'{tipo_codigo}: {datos_codigo}'
        cv2.putText(frame, texto, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
        
        return datos_codigo
    return None

def main():
    camara = cv2.VideoCapture(0)
    codigos_almacenados = []

    while True:
        ret, frame = camara.read()
        if not ret:
            continue

        codigo = escanear_codigo(frame)

        if codigo and codigo not in codigos_almacenados:
            codigos_almacenados.append(codigo)
            print(f"Código escaneado: {codigo}")

        cv2.imshow('Escaner de Códigos QR y Barras', frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    camara.release()
    cv2.destroyAllWindows()
    print("Códigos escaneados durante la sesión:")
    for codigo in codigos_almacenados:
        print(codigo)

if __name__ == "__main__":
    main()
