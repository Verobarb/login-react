<?php

$conn = mysqli_connect("localhost", "root", "root", "saqr");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $url = $_SERVER['REQUEST_URI'];
        $url_components = parse_url($url);
        parse_str($url_components['query'], $params);
        if (count($params) > 0) {
            $correo = $params['correo'];
            $contrasena = $params['contrasena'];
            $sql = "SELECT * FROM usuarios WHERE correo = '$correo' && contrasena = '$contrasena'";
            $result = mysqli_query($conn, $sql);
            $datos = array();
            $row = mysqli_fetch_row($result);
            if ($row && count($row) > 1) {
                $data = [
                    'nombre' => $row[1],
                    'apellidos' => $row[2],
                    'cedula' => $row[3],
                    'correo' => $row[4],
                ];
                echo json_encode(array("mensaje" => "Acceso correcto.", "data" => $data));
            } else {
                echo json_encode(array("mensaje" => "Usuario no encontrado.", "data" => $row));
            }
        } else {
            echo json_encode(array("mensaje" => "Datos insuficientes.", "data" => $row));
        }

        break;
    // Manejar solicitud POST
    case 'POST':
        $datos = json_decode(file_get_contents("php://input"), true);
        $nombre = $datos['nombre'];
        $apellidos = $datos['apellidos'];
        $cedula = $datos['cedula'];
        $correo = $datos['correo'];
        $contrasena = $datos['contrasena'];
        $sql = "INSERT INTO usuarios (nombre, apellidos, cedula, correo, contrasena) VALUES ('$nombre', '$apellidos','$cedula','$correo', '$contrasena')";
        if (mysqli_query($conn, $sql)) {
            echo json_encode(array("mensaje" => "Usuario agregado exitosamente."));
        } else {
            echo json_encode(array("mensaje" => "Error al agregar usuario."));
        }
        break;
    case 'PUT':
        // Manejar solicitud PUT
        $datos = json_decode(file_get_contents("php://input"), true);
        $id = $datos['id'];
        $nombre = $datos['nombre'];
        $apellidos = $datos['apellidos'];
        $correo = $datos['correo'];
        $contrasena = $datos['contrasena'];
        $sql = "UPDATE usuarios SET nombre = '$nombre', apellidos = '$apellidos', correo = '$correo', contrasena = '$contrasena' WHERE id = $id";
        if (mysqli_query($conn, $sql)) {
            echo json_encode(array("mensaje" => "Usuario actualizado exitosamente."));
        } else {
            echo json_encode(array("mensaje" => "Error al actualizar usuario."));
        }
        break;
    case 'DELETE':
        // Manejar solicitud DELETE
        $id = mysqli_real_escape_string($conn, $_GET['id']);
        $sql = "DELETE FROM usuarios WHERE id = $id";
        if (mysqli_query($conn, $sql)) {
            echo json_encode(array("mensaje" => "Usuario eliminado exitosamente."));
        } else {
            echo json_encode(array("mensaje" => "Error al eliminar usuario."));
        }
        break;
}
