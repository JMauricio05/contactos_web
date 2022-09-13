let contactos = [
    {
        nombre: 'María Camila Gomez',
        email: 'mcamila@ejemplo.com',
        telefono: '123456'
    },
    {
        nombre: 'Pepe Rodriguez',
        email: 'test@test.com',
        telefono: '3216564'
    }
];

function mostrarContactos() {
    const tbody = document
        .getElementById('contactosTable')
        .getElementsByTagName('tbody')[0];
    for (let index in contactos) {
        const contacto = contactos[index];
        const id = parseInt(index) + 1;
        let fila = '<tr>';
        fila += '   <td>' + id + '</td>';
        fila += '   <td>' + contacto.nombre + '</td>';
        fila += '   <td>' + contacto.email + '</td>';
        fila += '   <td>' + contacto.telefono + '</td>';
        fila += '</tr>';
        tbody.innerHTML += fila;
    }
}
mostrarContactos();

